using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceApi.Models
{
    public partial class Product
    {
        public long ProductId { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int? Status { get; set; }
        public bool? ArchivedInd { get; set; }
        public byte[] CoverImage { get; set; }
        public int? Price { get; set; }
    }
}
