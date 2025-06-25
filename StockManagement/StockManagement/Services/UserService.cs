using StockManagement.Interfaces.Repositories;
using StockManagement.Interfaces.Services;
using StockManagement.Models;
using System.Security.Claims;

namespace StockManagement.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _repository;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UserService(IUserRepository repository, IHttpContextAccessor httpContextAccessor)
    {
        _repository = repository;
        _httpContextAccessor = httpContextAccessor;
    }

    public User? Login(string email, string password)
    {
        var user = _repository.GetByEmail(email);

        if (user != null)
        {
            if(user.Password == password)
            {
                user.LastLoginDate = DateTime.UtcNow;
                _repository.UpdateUser(user);

                return user;
            }
        }
        return null;
    }

    public User GetCurrentUser()
    {
        var contextUser = _httpContextAccessor.HttpContext?.User;

        var userIdClaim = contextUser?.FindFirst(ClaimTypes.NameIdentifier);
        if (userIdClaim == null)
        {
            throw new UnauthorizedAccessException("User ID not found in token");
        }

        int userId = int.Parse(userIdClaim.Value);

        var userResult = _repository.GetById(userId);

        if(userResult == null)
        {
            throw new NullReferenceException($"User with id ${userId} not found in the database");
        }

        return userResult;
    }
}
