using MRMS_Blazor.Shared.CommonSection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace MRMS_Blazor.Shared.Services
{
    public class AgentService
    {
        private readonly HttpClient _httpClient;

        public AgentService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<Agent>> GetAgentsAsync()
        {
            return await _httpClient.GetFromJsonAsync<IEnumerable<Agent>>("http://localhost:5146/api/agents");
        }

        public async Task<Agent> GetAgentByAgentIdAsync(int agentId)
        {
            return await _httpClient.GetFromJsonAsync<Agent>($"http://localhost:5146/api/agents/{agentId}");
        }

        public async Task<HttpResponseMessage> AddAgentAsync(Agent agent)
        {
            return await _httpClient.PostAsJsonAsync("http://localhost:5146/api/agents", agent);
        }

        public async Task<HttpResponseMessage> UpdateAgentAsync(Agent agent)
        {
            return await _httpClient.PutAsJsonAsync("http://localhost:5146/api/agents", agent);
        }

        public async Task<HttpResponseMessage> DeleteAgentAsync(int id)
        {
            return await _httpClient.DeleteAsync($"http://localhost:5146/api/agents/{id}");
        }
    }
}
