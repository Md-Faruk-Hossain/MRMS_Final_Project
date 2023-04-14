using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.CommonSection;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgentsController : ControllerBase
    {
        private IGlobalRepository _globalRepo;
        private IGenericRepository<Agent> _agentRepo;

        public AgentsController(IGlobalRepository globalRepository)
        {
            this._globalRepo = globalRepository;
            this._agentRepo = _globalRepo.GetRepository<Agent>();
        }

        //Get Agents
        [HttpGet]
        public IEnumerable<Agent> GetAgents()
        {
            return _agentRepo.GetAll();
        }

        //Get Agent by agentId
        [HttpGet("{agentId}")]
        public ActionResult<Agent> GetAgentByAgentId(int agentId)
        {
            Agent agent = _agentRepo.Get(agentId);

            if (agent is not null)
            {
                return agent;
            }
            return NotFound();
        }

        //Post Agent
        [HttpPost]
        public IActionResult AddAgent(Agent agent)
        {
            _agentRepo.Insert(agent);
            _globalRepo.Save();
            return CreatedAtAction(nameof(GetAgentByAgentId), new { agentId = agent.AgentId }, agent);
        }

        //Update Agent
        [HttpPut]
        public IActionResult AgentUpdate(Agent agent)
        {
            if (agent.AgentId == 0)
            {
                return NotFound();
            }
            _agentRepo.Update(agent);
            _globalRepo.Save();
            return Ok(agent);
        }

        //Delete Agent
        [HttpDelete("{id}")]
        public IActionResult DeleteAgent(int id)
        {
            Agent agent = _agentRepo.Get(id);
            if (agent == null)
            {
                return NotFound();
            }

            _agentRepo.Delete(agent);
            _globalRepo.Save();
            return Ok(agent);
        }

    }
}
