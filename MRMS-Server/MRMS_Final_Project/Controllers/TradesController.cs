using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.DemandSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TradesController : ControllerBase
    {
        private IGlobalRepository _globalRepo;       
        private IGenericRepository<Trade> _tradeRepo;

       
        public TradesController(IGlobalRepository globalRepo)
        {
            this._globalRepo = globalRepo;           
            this._tradeRepo = _globalRepo.GetRepository<Trade>();
           

        }
        //Get Data
        [HttpGet]
        public IEnumerable<Trade> GetTrades()
        {
            return _tradeRepo.GetAll();
        }

        [HttpGet("{tradeId}")]
        public ActionResult<Trade> GetTradeByTradeId(int tradeId)
        {
            Trade trade = _tradeRepo.Get(tradeId);
            if (trade is not null)
            {
                return trade;
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult PostTrade(Trade trade)
        {
            _tradeRepo.Insert(trade);
            _globalRepo.Save();
            return CreatedAtAction(nameof(GetTradeByTradeId), new { TradeId = trade.TradeId }, trade);
        }

        [HttpPut]
        public IActionResult UpdateTrade(Trade trade)
        {
            if (trade.TradeId == 0)
            {
                return NoContent();
            }
            _tradeRepo.Update(trade);
            _globalRepo.Save();
            return Ok(trade);

        }
        [HttpDelete("{id}")]
        public IActionResult DeleteTrade(int id)
        {
            Trade trade = _tradeRepo.Get(id);
            if (trade == null)
            {
                return NotFound();
            }
            _tradeRepo.Delete(trade);
            _globalRepo.Save();
            return Ok(trade);
        }
    }
}
