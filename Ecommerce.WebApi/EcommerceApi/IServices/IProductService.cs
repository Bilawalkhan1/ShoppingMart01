using EcommerceApi.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Query;
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
        PageResult<Product> GetAllProducts(ODataQueryOptions<Product> oDataQueryOptions);
    }
}
