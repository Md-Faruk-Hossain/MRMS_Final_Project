using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.VisaSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisaFilesController : ControllerBase
    {
               
        private IGlobalRepository _globalRepo;
        private IGenericRepository<VisaFile> _visaFilesRepo;
        public VisaFilesController(IGlobalRepository globalRepo)
        {
            _globalRepo = globalRepo;
            _visaFilesRepo = _globalRepo.GetRepository<VisaFile>();
        }
        //GetVisaFiles
        [HttpGet]
        public IEnumerable<VisaFile> GetVisaFiles()
        {
            return _visaFilesRepo.GetAll();
        }
        //GetVisaFiles by VisaFileId
        [HttpGet("{VisaFileId}")]
        public ActionResult<VisaFile> GetVisaFilesByVisaFileId(int VisaFileId)
        {
            VisaFile visaFile = _visaFilesRepo.Get(VisaFileId);
            if(visaFile is not null)
            {
                 return visaFile;
            }
            return NotFound();

        }
        //Post Visa
        [HttpPost]
        public IActionResult PostVisaFile(VisaFile visaFile)
        {

            _visaFilesRepo.Insert(visaFile);
            _globalRepo.Save();
            return Ok(visaFile);
        }

        //Update VisaFile
        [HttpPut]
        public IActionResult PutVisaFile(VisaFile visaFile)
        {
            if (visaFile.VisaFileId == 0)
            {
                return NotFound();
            }
            _visaFilesRepo.Update(visaFile);
            _globalRepo.Save();
            return Ok(visaFile);
        }
        //Delete VisaFile
        [HttpDelete("{VisaFileId}")]
        public IActionResult DeleteVisaFile(int VisaFileId) 
        {
            VisaFile visaFile = _visaFilesRepo.Get(VisaFileId);
            if (visaFile == null)
            {
                return NotFound();
            }
            _visaFilesRepo.Delete(VisaFileId);
            _globalRepo.Save();
            return Ok(visaFile);
        }     
     
    }
}
