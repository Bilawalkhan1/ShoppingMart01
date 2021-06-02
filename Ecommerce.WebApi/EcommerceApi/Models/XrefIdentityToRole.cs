using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceApi.Models
{
    public partial class XrefIdentityToRole
    {
        public int XrefIdentityToRoleDbid { get; set; }
        public long RoleId { get; set; }
        public long IdentitId { get; set; }
        public bool? DisabledInd { get; set; }
    }
}
