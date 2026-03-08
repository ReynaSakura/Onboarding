using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TodoApi.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Labels",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "HouseWork" },
                    { 2, "HomeWork" }
                });

            migrationBuilder.InsertData(
                table: "TaskItems",
                columns: new[] { "Id", "CreatedAt", "Description", "IsCompleted", "LabelId", "Title" },
                values: new object[,]
                {
                    { 1, new DateTime(2026, 3, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "Buy Milk, Cookie, Chocolate", false, 1, "Buy grocery" },
                    { 2, new DateTime(2026, 3, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "Watch the tutorial", true, 2, "Learning EF Core" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
