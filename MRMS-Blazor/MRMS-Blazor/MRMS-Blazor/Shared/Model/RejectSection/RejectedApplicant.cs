﻿using MRMS_Blazor.Shared.ApplicantSection;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MRMS_Blazor.Shared.RejectSection
{
    public class RejectedApplicant
    {
        public int RejectedApplicantId { get; set; }

        [ForeignKey("Applicant")]
        public int ApplicantId { get; set; }

        public DateTime RejectedDate { get; set; }

        public string? Reason { get; set; }


        //Navigation
        [JsonIgnore]
        public virtual Applicant? Applicant { get; set; }
    }
}
