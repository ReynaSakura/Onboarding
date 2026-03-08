using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TodoController(ApplicationDbContext context) : ControllerBase
{
    private readonly ApplicationDbContext _context = context;

    [HttpGet]
    public async Task<ActionResult<List<TaskItem>>> GetTodos()
    {
        var todos = await _context.TaskItems.Include(t => t.Label).ToListAsync();
        return Ok(todos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TaskItem>> GetTodoById(int id)
    {
        var todo = await _context.TaskItems
            .Include(t => t.Label)
            .FirstOrDefaultAsync(t => t.Id == id);

        if (todo == null)
        {
            return NotFound();
        }

        return Ok(todo);
    }

    [HttpPost]
    public async Task<ActionResult<TaskItem>> AddTodo(TaskItem newTodo)
    {
        if (newTodo == null)
        {
            return BadRequest();
        }

        _context.TaskItems.Add(newTodo);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTodoById), new { id = newTodo.Id }, newTodo);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTodo(int id, TaskItem updatedTodo)
    {
        var todo = await _context.TaskItems.FindAsync(id);
        if (todo == null)
        {
            return NotFound();
        }
        
        todo.Title = updatedTodo.Title;
        todo.Description = updatedTodo.Description;
        todo.IsCompleted = updatedTodo.IsCompleted;
        todo.LabelId = updatedTodo.LabelId;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodo(int id)
    {
        var todo = await _context.TaskItems.FindAsync(id);
        if (todo == null)
        {
            return NotFound();
        }

        _context.TaskItems.Remove(todo);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
