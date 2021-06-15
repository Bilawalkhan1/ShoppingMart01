using EcommerceApi.IServices;
using EcommerceApi.Models;
using EcommerceApi.Services;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OData.Edm;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerUI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace EcommerceApi
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:4200",
                                                          "http://www.shopit.com")
                                      .AllowAnyHeader()
                                      .AllowAnyMethod();
                                  });
            });
            services.AddControllers();
            
            services.AddSwaggerGen();

            services.AddHttpClient();
            services.AddDbContext<Models.EcommerceContext>(options =>
                        options.UseSqlServer(Configuration["DbConnection"]));
            services.AddTransient<IIdentityService, IdentityService>();
            services.AddTransient<IProductService, ProductService>();
            services.AddAuthentication(x =>
            {
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = "https://localhost:44309",
                    ValidAudience = "https://localhost:44309",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ThisismySecretKey"))
                };
            });
            //services.AddOData();
            //services.AddMvc(options => options.EnableEndpointRouting = false);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //IEdmModel model = EdmModelBuilder.Build();

            //app.UseOData(model);

            //app.UseMvc(builder =>
            //{
            //    builder.Select().Expand().Filter().OrderBy()
            //      .MaxTop(1000).Count();
            //    builder.MapODataServiceRoute("odata", "odata", model);
            //    builder.MapRoute(
            //      name: "Default",
            //      template: "{controller=Home}/{action=Index}/{id?}");
            //});
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger(c =>
                {
                    c.SerializeAsV2 = true;
                });
                //app.UseOpenApi();
                //app.UseSwaggerUi3();
                app.UseSwaggerUI(c =>
                {

                    c.IndexStream = () => GetType().Assembly.GetManifestResourceStream("EcommerceApi.SwaggerCustom.index.html");
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Ecommerce API V1");
                });
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
