namespace TodoApi.Dtos;

public class TodoRequestDto
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
    public int? LabelId { get; set; }
}