using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.CommonSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private IGlobalRepository _globalRepo;
        private IGenericRepository<Company> _comparyRepo;

        public CompaniesController(IGlobalRepository globalRepo)
        {
            this._globalRepo = globalRepo;
            this._comparyRepo = _globalRepo.GetRepository<Company>();
        }
        // Get Company
        [HttpGet]
        public IEnumerable<Company> GetCompany()
        {
            return _comparyRepo.GetAll();
        }
        // Get Company by CompanyId
        [HttpGet("{companyId}")]
        public ActionResult<Company> GetCompanyByCompanyId(int companyId)
        {
            Company company = _comparyRepo.Get(companyId);
            if (company is not null)
            {
                return company;
            }
            return NotFound();
        }
        // Insert Company
        [HttpPost]
        public IActionResult PostCompany(Company Company)
        {
            _comparyRepo.Insert(Company);
            _globalRepo.Save();
            return Ok(Company);
        }
        // Update Company
        [HttpPut]
        public IActionResult PutCompany(Company Company)
        {
            if (Company.CompanyId == 0)
            {
                return NotFound();
            }
            _comparyRepo.Update(Company);
            _globalRepo.Save();
            return Ok(Company);
        }
        // Delete Company
        [HttpDelete("{companyID}")]
        public IActionResult DeleteCompany(int companyId)
        {
            Company Company = _comparyRepo.Get(companyId);
            if (Company == null)
            {
                return NotFound();
            }
            _comparyRepo.Delete(Company);
            _globalRepo.Save();
            return Ok(Company);
        }
    }
}
