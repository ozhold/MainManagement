using StockManagement.DataContracts;

namespace StockManagement.MockData
{
    public static class MockProductList
    {
        public static ProductListViewModel ProductList = new ProductListViewModel()
        {
            Products = [
                new ProductViewModel()
                {
                    Id = 1,
                    Name = "Pen",
                    Description = "Iets om mee te schrijven",
                    Price = 12.50m,
                    Stock = 120,
                    DiscountPercentage = 10
                },
                new ProductViewModel()
                {
                    Id = 2,
                    Name = "Horloge",
                    Description = "Vertelt de tijd",
                    Price = 220.50m,
                    Stock = 20
                }
            ]
        };
    }
}
