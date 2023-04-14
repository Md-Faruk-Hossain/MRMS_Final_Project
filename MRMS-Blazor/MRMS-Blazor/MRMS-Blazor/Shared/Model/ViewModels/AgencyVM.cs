using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace MRMS_Blazor.Shared.ViewModels
{
    public class AgencyVM
    {
        public string Name { get; set; } = default!;
        public string RL { get; set; } = default!;
        public string Address { get; set; } = default!;
        public string ContactNo { get; set; } = default!;
        public string? Manager { get; set; }
        public string? Accountant { get; set; }
        public int AgencyId { get; set; }
    }
}
