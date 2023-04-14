using MRMS_Blazor.Shared.ApplicantSection;
using MRMS_Blazor.Shared.CommonSection;
using MRMS_Blazor.Shared.DemandSection;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MRMS_Blazor.Shared.CallingSection
{
    public class Calling
    {
        public int CallingId { get; set; }

        [ForeignKey("Applicant")]
        public int ApplicantId { get; set; }

        [ForeignKey("Trade")]
        public int TradeId { get; set; }

        //Enum data
        public CallingStatus CallingStatus { get; set; }

        public string? CallingGroup { get; set; }

        public DateTime CallingIssueDate { get; set; }


        //Navigation
        [JsonIgnore]
        public virtual Applicant? Applicant { get; set; }
        [JsonIgnore]
        public virtual Trade? Trade { get; set; }
        [JsonIgnore]
        public virtual ICollection<CallingFile> CallingFiles { get; set; } = new List<CallingFile>();
        [JsonIgnore]
        public virtual ICollection<CallingIssue> CallingIssues { get; set; } = new List<CallingIssue>();
    }
}
