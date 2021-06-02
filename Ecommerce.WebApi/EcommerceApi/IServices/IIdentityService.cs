using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApi.IServices
{
    public class GenerateAuthenticationTokenResponse
    {
        public string Token { get; set; }
    }
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class RegisterRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string MobileNumber { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public DateTime? CreationDate { get; set; }
        public bool? isActive { get; set; }
    }
    public interface IIdentityService
    {
        public IActionResult GetAuthenticationToken(LoginRequest request);
        public IActionResult Register(RegisterRequest request);
    }
}
