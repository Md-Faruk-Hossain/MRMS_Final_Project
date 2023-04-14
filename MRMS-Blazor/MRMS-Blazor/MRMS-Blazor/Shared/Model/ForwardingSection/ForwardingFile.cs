﻿using MRMS_Blazor.Shared.CommonSection;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MRMS_Blazor.Shared.ForwardingSection
{
    public class ForwardingFile
    {
        public int ForwardingFileId { get; set; }

        [ForeignKey("Forwarding")]
        public int ForwardingId { get; set; }

        [ForeignKey("FileType")]
        public int FileTypeId { get; set; }

        [Display(Name = "Description")]
        public string? Description { get; set; }

        public string? Filepath { get; set; }

        [Column(TypeName = "date"),
        Display(Name = "Date"),
        DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}",
        ApplyFormatInEditMode = true)]
        public DateTime Date { get; set; }


        //Navigation
        [JsonIgnore]
        public virtual FileType? FileType { get; set; }
        [JsonIgnore]
        public virtual Forwarding? Forwarding { get; set; }
    }
}
