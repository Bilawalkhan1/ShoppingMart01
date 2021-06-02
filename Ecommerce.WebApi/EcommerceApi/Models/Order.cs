using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceApi.Models
{
    public partial class Order
    {
        public long OrderId { get; set; }
        public long ProductId { get; set; }
        public string Status { get; set; }
    }
}
