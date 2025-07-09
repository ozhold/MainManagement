using Microsoft.Extensions.Options;
using StockManagement.CommonModels;
using StockManagement.Interfaces.Repositories;
using StockManagement.Interfaces.Services;
using StockManagement.Models;

namespace StockManagement.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IUserService _userService;
    private readonly MySettings _settings;

    public ProductService(IProductRepository productRepository, IUserService userService, IOptions<MySettings> options)
    {
        _productRepository = productRepository;
        _userService = userService;
        _settings = options.Value;
    }

    private void DisableDiscountIfSet(Product[] products)
    {
        foreach (var item in products)
        {
            DisableDiscountIfSet(item);
        }   
    }

    private void DisableDiscountIfSet(Product product)
    {
        if (_settings.DiscountDisabled)
        {
            product.DiscountPercentage = null;   
        }
    }

    public async Task<Product[]> GetAsync()
    {
        var results = await _productRepository.GetAsync();

        DisableDiscountIfSet(results);

        return results;
    }

    public async Task<Product> GetAsync(int id)
    {
        var result =  await _productRepository.GetAsync(id);

        DisableDiscountIfSet(result);

        return result;
    }

    public async Task<Product> CreateAsync(Product product)
    {
        var userIdFromToken = _userService.GetCurrentUser().Id;
        product.UserId = userIdFromToken;

        var createdProduct = await _productRepository.CreateAsync(product);
        return createdProduct;
    }

    public async Task DeleteAsync(int id)
    {
        await _productRepository.DeleteAsync(id);
    }

    public async Task UpdateAsync(Product product)
    {
        var dbModel = await _productRepository.GetAsync(product.Id);

        dbModel.Name = product.Name;
        dbModel.Description = product.Description;
        dbModel.Price = product.Price;
        dbModel.DiscountPercentage = product.DiscountPercentage;
        dbModel.Stock = product.Stock;

        await _productRepository.UpdateAsync(dbModel);
    }
}
