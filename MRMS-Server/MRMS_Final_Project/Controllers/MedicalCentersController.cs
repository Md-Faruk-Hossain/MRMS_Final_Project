using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.MedicalSection;

[Route("api/[controller]")]
[ApiController]
public class MedicalCentersController : ControllerBase
{
    private IGlobalRepository _globalRepo;
    private IGenericRepository<MedicalCenter> _medicalRepo;

    public MedicalCentersController(IGlobalRepository globalRepository)
    {
        this._globalRepo = globalRepository;
        this._medicalRepo = _globalRepo.GetRepository<MedicalCenter>();
    }

    // GET: api/MedicalCenters

    [HttpGet]
    public IEnumerable<MedicalCenter> GetMedicalCenters()
    {
        return _medicalRepo.GetAll();
    }

    [HttpGet("{id}")]
    public ActionResult<MedicalCenter>GetMedicalCenterById(int id)
    {
        try
        {
            MedicalCenter medicalCenter=_medicalRepo.Get(id);
            return medicalCenter;
        }
        catch (Exception ex)
        {

            BadRequest(ex.Message);
        }
        return Ok();
    }

    //Insert Medical Center
    [HttpPost]
    public ActionResult MedicalCentersPost(MedicalCenter medicalCenters)
    {
        try
        {
            _medicalRepo.Insert(medicalCenters);
            _globalRepo.Save();
        }
        catch (Exception ex)
        {

            return BadRequest(ex.Message);
        }
        return Ok(medicalCenters);
    }

    //Update Medical Center
    [HttpPut("{id}")]
    public IActionResult UpdateMedicalCenter(MedicalCenter medicalCenter)
    {
       

        try
        {
            if (medicalCenter.MedicalCenterId == 0)
            {
                return NotFound();
            }
            _medicalRepo.Update(medicalCenter);
            _globalRepo.Save();
        }
        catch (Exception ex)
        {

            return BadRequest(ex.Message);
        }
        return Ok(medicalCenter);
    }


    //Delete Medical Center
    [HttpDelete("{id}")]
    public IActionResult DeleteMedicalCenter(int id)
    {
        MedicalCenter medicalCenter = _medicalRepo.Get(id);
        try
        {   
            if (medicalCenter == null)
            {
                return NotFound();
            }
            _medicalRepo.Delete(medicalCenter);
            _globalRepo.Save();
        }
        catch (Exception ex)
        {

            return BadRequest(ex.Message);
        }
        return Ok(medicalCenter);
    }
}