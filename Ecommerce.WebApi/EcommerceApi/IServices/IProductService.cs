using EcommerceApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApi.IServices
{
    public class AddProductRequest
    {


    }
    public interface IProductService
    {
        public Product AddProduct(Product request);
        public List<Product> GetAllProducts();
    }
}
