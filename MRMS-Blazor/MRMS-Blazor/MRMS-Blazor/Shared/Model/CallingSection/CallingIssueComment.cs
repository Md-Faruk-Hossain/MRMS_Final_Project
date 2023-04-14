using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MRMS_Blazor.Shared.CallingSection
{
    public class CallingIssueComment
    {
        public int CallingIssueCommentId { get; set; }

        [ForeignKey("CallingIssue")]
        public int CallingIssueId { get; set; }

        public string? Comment { get; set; }


        //Navigation
        [JsonIgnore]
        public virtual CallingIssue? CallingIssue { get; set; }
    }
}
