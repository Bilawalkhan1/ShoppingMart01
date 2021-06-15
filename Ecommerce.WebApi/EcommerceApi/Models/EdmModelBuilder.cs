using Microsoft.AspNet.OData.Builder;
using Microsoft.OData.Edm;

namespace EcommerceApi.Models
{
    public static class EdmModelBuilder
    {
        public static IEdmModel Build()
        {
            // create OData builder instance
            var builder = new ODataConventionModelBuilder();

            // map the entityset which is the type returned 
            // from the endpoint onto the OData pipeline
            // the string parameter is the name of the controller 
            // which supplies the data of type ProductModel in this case
            builder.EntitySet<Product>("ODataProducts")
                .EntityType.HasKey(x => x.ProductId);

            // configure a function onto the builder, AllReaders 
            // which is same as the name provided in the ODataRoute
            var fnAllReaders = builder.Function("AllProducts");

            // define what type the function returns; 
            // here it is of type ReaderModel
            fnAllReaders.ReturnsCollectionFromEntitySet
                <Product>("ODataProducts");

            // configure a function onto the builder, ReadersById 
            // which is same as the name provided in the ODataRoute
            var fnReadersById = builder.Function("ProductsById");

            // since this function takes a parameter of type id, 
            // define what type the parameter accepts and 
            // the identifier same as the one mentioned within the route
            fnReadersById.Parameter<int>("id");

            // define what type the function returns; 
            // here it is of type ReaderModel
            fnReadersById.ReturnsCollectionFromEntitySet
                <Product>("ODataProducts");

            // return the fully configured builder model 
            // on which the OData library shall be built
            return builder.GetEdmModel();
        }
    }
}
