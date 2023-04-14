using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.VisaSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisaIssuesController : ControllerBase
    {
        private IGlobalRepository _globalRepo;
        private IGenericRepository<VisaIssue> _visaIssueRepo;
        public VisaIssuesController(IGlobalRepository globalRepo)
        {
            _globalRepo = globalRepo;
            _visaIssueRepo = _globalRepo.GetRepository<VisaIssue>();
        }
        //GetVisaIssue
        [HttpGet]
        public IEnumerable<VisaIssue> GetVisaIssues()
        {
            return _visaIssueRepo.GetAll();
        }
        //GetVisaIssues by VisaIssueId
        [HttpGet("{VisaIssueId}")]
        public ActionResult<VisaIssue> GetVisaIssuesByVisaIssueId(int VisaIssueId)
        {
            VisaIssue visaIssue = _visaIssueRepo.Get(VisaIssueId);
            if (visaIssue is not null)
            {
                return visaIssue;
            }
            return NotFound();

        }
        //Post VisaIssue
        [HttpPost]
        public IActionResult PostVisaIssue(VisaIssue visaIssue)
        {

            _visaIssueRepo.Insert(visaIssue);
            _globalRepo.Save();
            return Ok(visaIssue);
        }

        //Update VisaIssue
        [HttpPut]
        public IActionResult PutVisaIssue(VisaIssue  visaIssue)
        {
            if (visaIssue.VisaIssueId == 0)
            {
                return NotFound();
            }
            _visaIssueRepo.Update(visaIssue);
            _globalRepo.Save();
            return Ok(visaIssue);
        }
        //Delete VisaIssue
        [HttpDelete("{VisaIssueId}")]
        public IActionResult DeleteVisaIssue(int VisaIssueId)
        {
            VisaIssue visaIssue = _visaIssueRepo.Get(VisaIssueId);
            if (visaIssue == null)
            {
                return NotFound();
            }
            _visaIssueRepo.Delete(VisaIssueId);
            _globalRepo.Save();
            return Ok(visaIssue);
        }
    }
}
