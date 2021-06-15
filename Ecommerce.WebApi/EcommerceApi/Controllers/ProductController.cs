using EcommerceApi.IServices;
using EcommerceApi.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService productService;
        public ProductController(IProductService product)
        {
            productService = product;
        }
        [HttpPost]
        [Route("addProduct")]
        [Authorize]
        public void AddProduct([FromBody] Product request)
        {
            productService.AddProduct(request);
        }
        [EnableQuery()]
        [HttpGet]
        [Route("getall")]
        public PageResult<Product> GetAllProducts(ODataQueryOptions<Product> oDataQueryOptions)
        {
            return productService.GetAllProducts(oDataQueryOptions);
        }
    }
}
