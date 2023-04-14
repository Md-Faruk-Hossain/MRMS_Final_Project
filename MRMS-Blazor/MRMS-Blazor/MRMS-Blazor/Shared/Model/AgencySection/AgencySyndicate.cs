using MRMS_Blazor.Shared.MedicalSection;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MRMS_Blazor.Shared.AgencySection
{
    public class AgencySyndicate
    {

        public int AgencySyndicateId { get; set; }


        [ForeignKey("Agency")]
        public int AgencyId { get; set; }

        //Navigation
        [JsonIgnore]
        public virtual Agency? Agency { get; set; }
        [JsonIgnore]
        public virtual ICollection<MedicalRecord> MedicalRecords { get; set; } = new List<MedicalRecord>();
    }
}
