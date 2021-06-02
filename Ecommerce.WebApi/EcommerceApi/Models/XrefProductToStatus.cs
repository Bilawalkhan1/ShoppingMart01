using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceApi.Models
{
    public partial class XrefProductToStatus
    {
        public int XrefProductToStatusId { get; set; }
        public long ProductId { get; set; }
        public string StatusId { get; set; }
    }
}
