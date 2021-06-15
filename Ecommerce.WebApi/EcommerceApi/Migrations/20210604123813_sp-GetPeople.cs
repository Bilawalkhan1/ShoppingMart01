using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EcommerceApi.Migrations
{
    public partial class spGetPeople : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            var sp = @"CREATE PROCEDURE [dbo].[GetPeople]
                    @FirstName varchar(50)
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from [Identity] where Firstname like @FirstName +'%'
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Identity");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "ProductStatus");

            migrationBuilder.DropTable(
                name: "Role");

            migrationBuilder.DropTable(
                name: "XrefIdentityToRole");

            migrationBuilder.DropTable(
                name: "XrefProductToStatus");
        }
    }
}
