using EcommerceApi.IServices;
using EcommerceApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApi.Services
{
    public class ProductService: IProductService
    {
        EcommerceContext dbContext;
        public ProductService(EcommerceContext _db)
        {
            dbContext = _db;
        }
        public Product AddProduct(Product request)
        {
            var checkProduct = dbContext.Products
                .Select(x => x.ProductName == request.ProductName)
                .FirstOrDefault();
            if(checkProduct)
            {
                throw new Exception();
            }
            dbContext.Products.Add(request);
            dbContext.SaveChanges();
            return request;
        }
        public List<Product> GetAllProducts()
        {
            return dbContext.Products.ToList();
        }
    }
}
