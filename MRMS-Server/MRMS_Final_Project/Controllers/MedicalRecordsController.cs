using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.MedicalSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicalRecordsController : ControllerBase
    {
        private IGlobalRepository _globalRepo;
        private IGenericRepository<MedicalRecord> _medicalRepo;

        public MedicalRecordsController(IGlobalRepository globalRepository)
        {
            this._globalRepo = globalRepository;
            this._medicalRepo = _globalRepo.GetRepository<MedicalRecord>();
        }



        [HttpGet]
        public IEnumerable<MedicalRecord> GetMedicalRecord()
        {
            return _medicalRepo.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<MedicalRecord> GetMedicalRecordsById(int id)
        {
            try
            {
                MedicalRecord medicalRecord = _medicalRepo.Get(id);
                return medicalRecord;
            }
            catch (Exception ex)
            {

                BadRequest(ex.Message);
            }
            return Ok();
        }

        [HttpPost]
        public ActionResult MedicalRecordPost(MedicalRecord medicalRecord)
        {
            try
            {
                _medicalRepo.Insert(medicalRecord);
                _globalRepo.Save();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok(medicalRecord);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateMedicalRecored(MedicalRecord medicalRecord)
        {


            try
            {
                if (medicalRecord.MedicalRecordId == 0)
                {
                    return NotFound();
                }
                _medicalRepo.Update(medicalRecord);
                _globalRepo.Save();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok(medicalRecord);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMedicalRecords(int id)
        {
            MedicalRecord medicalRecord = _medicalRepo.Get(id);
            try
            {
                if (medicalRecord == null)
                {
                    return NotFound();
                }
                _medicalRepo.Delete(medicalRecord);
                _globalRepo.Save();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok(medicalRecord);
        }
    }
}
