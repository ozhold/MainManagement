﻿using Microsoft.EntityFrameworkCore;

namespace StockManagement.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }
    public DbSet<User> Users { get; set; }
    //public DbSet<Customer> Customers {get;set;}
}
