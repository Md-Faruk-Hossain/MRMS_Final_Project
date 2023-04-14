using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.VisaSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisaFileTransfersController : ControllerBase
    {
        private IGlobalRepository _globalRepo;
        private IGenericRepository<VisaFileTransfer> _visaFileTransferRepo;
        public VisaFileTransfersController(IGlobalRepository globalRepo)
        {
            _globalRepo = globalRepo;
            _visaFileTransferRepo = _globalRepo.GetRepository<VisaFileTransfer>();
        }
        //GetVisaFilesTransfer
        [HttpGet]
        public IEnumerable<VisaFileTransfer> GetVisaFileTransfers()
        {
            return _visaFileTransferRepo.GetAll();
        }
        //GetVisaFiles by VisaFileTransferId
        [HttpGet("{VisaFileTransferId}")]
        public ActionResult<VisaFileTransfer> GetVisaFilesByVisaFileId(int VisaFileTransferId)
        {
            VisaFileTransfer visaFileTransfer = _visaFileTransferRepo.Get(VisaFileTransferId);
            if (visaFileTransfer is not null)
            {
                return visaFileTransfer;
            }
            return NotFound();

        }
        //Post VisaFileTransfer
        [HttpPost]
        public IActionResult VisaFileTransfer(VisaFileTransfer visaFileTransfer)
        {

            _visaFileTransferRepo.Insert(visaFileTransfer);
            _globalRepo.Save();
            return Ok(visaFileTransfer);
        }

        //Update VisaFileTransfer
        [HttpPut]
        public IActionResult PutVisaFileTransfer(VisaFileTransfer visaFileTransfer)
        {
            if (visaFileTransfer.VisaFileTransferId == 0)
            {
                return NotFound();
            }
            _visaFileTransferRepo.Update(visaFileTransfer);
            _globalRepo.Save();
            return Ok(visaFileTransfer);
        }
        //Delete VisaFileTransfer
        [HttpDelete("{VisaFileTransferId}")]
        public IActionResult DeleteVisaFileTransfer(int VisaFileTransferId)
        {
            VisaFileTransfer visaFileTransfer = _visaFileTransferRepo.Get(VisaFileTransferId);
            if (visaFileTransfer == null)
            {
                return NotFound();
            }
            _visaFileTransferRepo.Delete(visaFileTransfer);
            _globalRepo.Save();
            return Ok(visaFileTransfer);
        }
    }
}
