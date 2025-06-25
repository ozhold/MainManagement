using Microsoft.EntityFrameworkCore;
using StockManagement.Interfaces.Repositories;
using StockManagement.Interfaces.Services;
using StockManagement.Models;

namespace StockManagement.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _context;
    private readonly IUserService _userService;

    public ProductRepository(AppDbContext context, IUserService userService)
    {
        _context = context;
        _userService = userService;
    }
    public async Task<Product[]> GetAllAsync()
    {
        var userId = _userService.GetCurrentUser().Id;
        return await _context.Products.Where(x => x.UserId == userId).ToArrayAsync();
    }

    public Product GetById(int id)
    {
        return _context.Products.Single(x => x.Id == id);
    }

    public Product CreateProduct(Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();
        return product;
    }

    public void UpdateProduct(Product product)
    {
        _context.Products.Update(product);
        _context.SaveChanges();
    }

    public void DeleteById(int id)
    {
        var productToBeDeleted = GetById(id);
        _context.Products.Remove(productToBeDeleted);
        _context.SaveChanges();
    }
}
