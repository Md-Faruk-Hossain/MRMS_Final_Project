﻿using MRMS_Blazor.Shared.CommonSection;
using MRMS_Blazor.Shared.DemandSection;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MRMS_Blazor.Shared.VisaSection
{
    public class VisaIssue
    {
        public int VisaIssueId { get; set; }

        [ForeignKey("Visa")]
        public int VisaId { get; set; }

        [Required(ErrorMessage = "Please enter title name")]
        [StringLength(150, ErrorMessage = "Please do not enter values over 150 characters")]
        [Display(Name = "Title")]
        public string Title { get; set; } = default!;


        [Display(Name = "Description")]
        public string? Description { get; set; }


        [EnumDataType(typeof(IssueStatus))]
        public IssueStatus Status { get; set; }


        [Required(ErrorMessage = "Please enter issue date")]
        [Column(TypeName = "date"),
        Display(Name = "Issue Date"),
        DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}",
        ApplyFormatInEditMode = true)]
        public DateTime IssueDate { get; set; }

        [Column(TypeName = "date"),
        Display(Name = "Resolve Date"),
        DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}",
        ApplyFormatInEditMode = true)]
        public DateTime? ResolveDate { get; set; }


        //Navigation
        [JsonIgnore]
        public virtual Visa? Visa { get; set; }
        [JsonIgnore]
        public ICollection<VisaIssueComment>? VisaIssueComments { get; set; } = new HashSet<VisaIssueComment>();
    }
}
