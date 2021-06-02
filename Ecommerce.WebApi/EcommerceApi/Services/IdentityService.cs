using EcommerceApi.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Net.Http;
using EcommerceApi.Models;
using System.Linq;
using EcommerceApi.Common;
using System.Collections.Generic;

namespace EcommerceApi.Services
{
    public class IdentityService : ControllerBase, IIdentityService
    {
        EcommerceContext dbContext;
        public IdentityService(EcommerceContext _db)
        {
            dbContext = _db;
        }
        public static class ErrorIdentifiers
        {
            public const string EmailAlreadyExists = "EMAIL_ALREADY_EXISTS";
        }
        public IActionResult Register(RegisterRequest request)
        {
            IActionResult response = BadRequest();
            ValidateEmail(request);

            if (request != null)
            {
                request.CreationDate = DateTime.Now;
                var addUser = new Identity();
                addUser.FirstName = request.FirstName;
                addUser.LastName = request.LastName;
                addUser.Email = request.Email;
                addUser.Password = request.Password;
                addUser.MobileNumber = request.MobileNumber;
                dbContext.Identities.Add(addUser);
                dbContext.SaveChanges();
                response = Ok("user added");
            }
            return response;

        }
        public IActionResult GetAuthenticationToken(LoginRequest request)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(request);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private void ValidateEmail(RegisterRequest request)
        {
            var identity = dbContext.Identities
                .SingleOrDefault(identityItem => identityItem.Email == request.Email);

            if (identity != null)
            {
                throw new DataValidationException<Identity>(
                    nameof(request.Email),
                    $"Email already exists.",
                    identifier: ErrorIdentifiers.EmailAlreadyExists);
            }
        }

        private LoginRequest AuthenticateUser(LoginRequest request)
        {
            var user = dbContext.Identities.Where(i => i.Email == request.Email).FirstOrDefault();

            if (user != null)
            {
                var response = new LoginRequest { Email = user.Email, Password = user.Password };
                return response;
            };
            return null;
        }

        private string GenerateJSONWebToken(LoginRequest userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ThisismySecretKey"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            List<Claim> claims = new List<Claim> {
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email),
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Password),
                new Claim("DateOfJoing", new DateTime().ToString("yyyy-MM-dd")),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            if(userInfo.Email == "test@gmail.com")
            {
                claims.Add(new Claim("Role", "admin"));

            }
            else
            {
                claims.Add(new Claim("Role", "user"));

            }
            var token = new JwtSecurityToken("https://localhost:44309",
              "https://localhost:44309",
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
