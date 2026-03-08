using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Dtos;
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
    public async Task<ActionResult<TaskItem>> AddTodo(TodoRequestDto newTodoDto)
    {
        var todo = new TaskItem
        {
            Title = newTodoDto.Title,
            Description = newTodoDto.Description,
            IsCompleted = newTodoDto.IsCompleted,
            LabelId = newTodoDto.LabelId,
            CreatedAt = DateTime.UtcNow
        };
        
        _context.TaskItems.Add(todo);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTodoById), new { id = todo.Id }, todo);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTodo(int id, TodoRequestDto updatedTodoDto)
    {
        var todo = await _context.TaskItems.FindAsync(id);
        if (todo == null)
        {
            return NotFound();
        }
        
        todo.Title = updatedTodoDto.Title;
        todo.Description = updatedTodoDto.Description;
        todo.IsCompleted = updatedTodoDto.IsCompleted;
        todo.LabelId = updatedTodoDto.LabelId;

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
