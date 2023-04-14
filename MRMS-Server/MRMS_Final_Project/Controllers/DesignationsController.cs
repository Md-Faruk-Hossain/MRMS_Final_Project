using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.EmployeeSection;

namespace MRMS_Final_Project.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class DesignationsController : ControllerBase
    {

        private IGlobalRepository _globalRepository;
        private IGenericRepository<Designation> _designationRepository;


        public DesignationsController(IGlobalRepository globalRepository)
        {
            this._globalRepository = globalRepository;
            this._designationRepository = _globalRepository.GetRepository<Designation>();
        }


        [HttpGet]
        public IEnumerable<Designation> GetFileType()
        {
            return _designationRepository.GetAll();
        }
        [HttpGet("{id}")]
        public ActionResult<Designation> GetDesignationByID(int id)
        {
            Designation designation=_designationRepository.Get(id);
            if (designation is null)
            {
                return NotFound();

            }
            return designation;
        }
        [HttpPost]
        public ActionResult DesignationPost(Designation designation)
        {
            try
            {
                _designationRepository.Insert(designation);
                _globalRepository.Save();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok(designation);
        }

        [HttpPut("{id}")]
        public ActionResult DesignationUpdate(Designation designation)
        {
            if (designation.DesignationId==0)
            {
                return NoContent();
            }
            _designationRepository.Update(designation);
            _globalRepository.Save();
            return Ok(designation);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteDesignation(int id)
        {
            var desination = _designationRepository.Get(id);
            if (desination == null)
            {
                return NotFound();
            }
            _designationRepository.Delete(desination);
            _globalRepository.Save();
            return NoContent();
        }


        
    }
}
