using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailsController : ControllerBase
    {
        private readonly APIDbContext _context;

        public EmailsController(APIDbContext context)
        {
            _context = context;
        }

        //Endpoint to retrieve all emails in the database
        // GET: api/Emails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Email>>> GetEmails()
        {
            return await _context.Emails.ToListAsync();
        }

        //Endpoint to retrieve an email from the database by its id
        // GET: api/Emails/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Email>> GetEmail(int id)
        {
            var email = await _context.Emails.FindAsync(id);

            if (email == null)
            {
                return NotFound();
            }

            return email;
        }

        //Endpoint to add an email to the database
        // POST: api/Emails
        [HttpPost]
        public async Task<ActionResult<Email>> PostEmail(Email email)
        {
            _context.Emails.Add(email);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmail", new { id = email.Id }, email);
        }
    }
}
