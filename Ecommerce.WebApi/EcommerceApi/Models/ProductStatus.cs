using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceApi.Models
{
    public partial class ProductStatus
    {
        public int ProductStatusId { get; set; }
        public string Name { get; set; }
        public bool? DisabaledInd { get; set; }
    }
}
