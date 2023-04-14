using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.AgencySection;
using MRMS.Model.CommonSection;
using MRMS.Model.ViewModels;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgencyController : ControllerBase
    {
        private IGlobalRepository _globalRepository;
        private IGenericRepository<Agency> _agencyRepository;
        private IGenericRepository<AgencySyndicate> _syndicateRepository;


        public AgencyController(IGlobalRepository globalRepository)
        {
            this._globalRepository = globalRepository;
            this._agencyRepository = _globalRepository.GetRepository<Agency>();
            this._syndicateRepository = _globalRepository.GetRepository<AgencySyndicate>();
        }

        //Get Agency
        [HttpGet]
        public IEnumerable<Agency> GetAgency()
        {
            return _agencyRepository.GetAll();
        }
        //Get Agency by agencyId
        [HttpGet("{AgencyId}")]
        public ActionResult<Agency> GetAgencyByAgentId(int agencyId)
        {
            var agency = _agencyRepository.Get(agencyId);

            if (agency is not null)
            {
                return agency;
            }
            return NotFound();
        }

        //Post Agency
        [HttpPost]
        public IActionResult AgencyPost(Agency agency)
        {
            _agencyRepository.Insert(agency);
            _globalRepository.Save();
            return Ok(agency);

        }

        //Update Agency
        [HttpPut]
        public IActionResult AgencyUpdate(Agency agency)
        {
            if (agency.AgencyId==0)
            {
                return NotFound();
            }
            _agencyRepository.Update(agency);
            _globalRepository.Save();
            return Ok(agency);
        }

        //Delete Agency
        [HttpDelete("{id}")]
        public IActionResult DeleteAgency(int id)
        {
            Agency agency = _agencyRepository.Get(id);
            if (agency == null)
            {
                return NotFound();
            }
         
            _agencyRepository.Delete(agency);
            _globalRepository.Save();
            return Ok(agency);
        }
    }
}
