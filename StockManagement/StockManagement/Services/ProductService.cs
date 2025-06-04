using StockManagement.Models;
using StockManagement.Repositories;

namespace StockManagement.Services;

public class ProductService
{
    private ProductRepository repository;

    public ProductService()
    {
        repository = new ProductRepository();
    }

    public Product Create(Product product)
    {
        var createdProduct = repository.CreateProduct(product);

        return createdProduct;
    }
    public Product GetProductById(int id)
    {
        return null;
    }
}
