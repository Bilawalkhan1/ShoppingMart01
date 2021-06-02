using EcommerceApi.IServices;
using EcommerceApi.Models;
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
        [HttpGet]
        [Route("getall")]
        public List<Product> GetAllProducts()
        {
            return productService.GetAllProducts();
        }
    }
}
