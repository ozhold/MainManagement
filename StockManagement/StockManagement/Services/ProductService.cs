using StockManagement.Interfaces.Repositories;
using StockManagement.Interfaces.Services;
using StockManagement.Models;

namespace StockManagement.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _repository;
    private readonly IUserService _userService;

    public ProductService(IProductRepository repository, IUserService userService)
    {
        _repository = repository;
        _userService = userService;
    }

    public async Task<Product[]> GetAllAsync()
    {
        return await _repository.GetAllAsync();
    }

    public Product GetProductById(int id)
    {
        return _repository.GetById(id);
    }

    public Product Create(Product product)
    {
        var userIdFromToken = _userService.GetCurrentUser().Id;
        product.UserId = userIdFromToken;
        var createdProduct = _repository.CreateProduct(product);
        return createdProduct;
    }

    public void Delete(int id)
    {
        _repository.DeleteById(id);
    }

    public void Update(Product product)
    {
        var dbModel = _repository.GetById(product.Id);

        dbModel.Name = product.Name;
        dbModel.Description = product.Description;
        dbModel.Price = product.Price;
        dbModel.DiscountPercentage = product.DiscountPercentage;
        dbModel.Stock = product.Stock;

        _repository.UpdateProduct(dbModel);
    }
}
