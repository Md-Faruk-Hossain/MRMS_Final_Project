using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.VisaSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisaIssueCommentsController : ControllerBase
    {
        private IGlobalRepository _globalRepo;
        private IGenericRepository<VisaIssueComment> _visaIssueCommentRepo;
        public VisaIssueCommentsController(IGlobalRepository globalRepo)
        {
            _globalRepo = globalRepo;
            _visaIssueCommentRepo = _globalRepo.GetRepository<VisaIssueComment>();
        }
        //GetVisaIssueComment
        [HttpGet]
        public IEnumerable<VisaIssueComment> GetVisaIssueComments()
        {
            return _visaIssueCommentRepo.GetAll();
        }
        //GetVisaIssues by VisaIssueCommentId
        [HttpGet("{VisaIssueCommentId}")]
        public ActionResult<VisaIssueComment> GetVisaIssuesByVisaIssueId(int VisaIssueCommentId)
        {
            VisaIssueComment visaIssueComment = _visaIssueCommentRepo.Get(VisaIssueCommentId);
            if (visaIssueComment is not null)
            {
                return visaIssueComment;
            }
            return NotFound();

        }
        //Post VisaIssue
        [HttpPost]
        public IActionResult PostVisaIssue(VisaIssueComment visaIssueComment)
        {

            _visaIssueCommentRepo.Insert(visaIssueComment);
            _globalRepo.Save();
            return Ok(visaIssueComment);
        }

        //Update VisaIssueComment
        [HttpPut]
        public IActionResult PutVisaIssue(VisaIssueComment visaIssueComment)
        {
            if (visaIssueComment.VisaIssueCommentId == 0)
            {
                return NotFound();
            }
            _visaIssueCommentRepo.Update(visaIssueComment);
            _globalRepo.Save();
            return Ok(visaIssueComment);
        }
        //Delete VisaIssue
        [HttpDelete("{VisaIssueCommentId}")]
        public IActionResult DeleteVisaIssue(int VisaIssueCommentId)
        {
            VisaIssueComment visaIssueComment = _visaIssueCommentRepo.Get(VisaIssueCommentId);
            if (visaIssueComment == null)
            {
                return NotFound();
            }
            _visaIssueCommentRepo.Delete(VisaIssueCommentId);
            _globalRepo.Save();
            return Ok(visaIssueComment);
        }
    }
}
