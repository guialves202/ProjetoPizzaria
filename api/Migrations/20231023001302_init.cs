﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Extras",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Extra = table.Column<string>(type: "nvarchar(80)", maxLength: 80, nullable: false),
                    Price = table.Column<float>(type: "real", maxLength: 5, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Extras", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Flavors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Flavor = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Price = table.Column<float>(type: "real", maxLength: 5, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flavors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<float>(type: "real", maxLength: 7, nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Street = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    StreetNumber = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Neighborhood = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Complement = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    City = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Clients_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pizzas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<float>(type: "real", maxLength: 7, nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    OrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pizzas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pizzas_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExtraModelPizzaModel",
                columns: table => new
                {
                    ExtrasId = table.Column<int>(type: "int", nullable: false),
                    PizzasId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExtraModelPizzaModel", x => new { x.ExtrasId, x.PizzasId });
                    table.ForeignKey(
                        name: "FK_ExtraModelPizzaModel_Extras_ExtrasId",
                        column: x => x.ExtrasId,
                        principalTable: "Extras",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ExtraModelPizzaModel_Pizzas_PizzasId",
                        column: x => x.PizzasId,
                        principalTable: "Pizzas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FlavorModelPizzaModel",
                columns: table => new
                {
                    FlavorsId = table.Column<int>(type: "int", nullable: false),
                    PizzasId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlavorModelPizzaModel", x => new { x.FlavorsId, x.PizzasId });
                    table.ForeignKey(
                        name: "FK_FlavorModelPizzaModel_Flavors_FlavorsId",
                        column: x => x.FlavorsId,
                        principalTable: "Flavors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FlavorModelPizzaModel_Pizzas_PizzasId",
                        column: x => x.PizzasId,
                        principalTable: "Pizzas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clients_OrderId",
                table: "Clients",
                column: "OrderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ExtraModelPizzaModel_PizzasId",
                table: "ExtraModelPizzaModel",
                column: "PizzasId");

            migrationBuilder.CreateIndex(
                name: "IX_FlavorModelPizzaModel_PizzasId",
                table: "FlavorModelPizzaModel",
                column: "PizzasId");

            migrationBuilder.CreateIndex(
                name: "IX_Pizzas_OrderId",
                table: "Pizzas",
                column: "OrderId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "ExtraModelPizzaModel");

            migrationBuilder.DropTable(
                name: "FlavorModelPizzaModel");

            migrationBuilder.DropTable(
                name: "Extras");

            migrationBuilder.DropTable(
                name: "Flavors");

            migrationBuilder.DropTable(
                name: "Pizzas");

            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
