/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
/*
Post-Deployment Script. Will run the populate scripts if PopulateLists is 'true'
*/

SET NOEXEC OFF
-- Done using NOEXEC to avoid syntax issues with including the scripts inside a BEGIN block.
IF 'true' <> '$(PopulateLists)'
    SET NOEXEC ON

PRINT N'Populate tables'
GO

INSERT INTO
  [dbo].[Identity] (
    [Firstname],
    [Lastname],
    [Email],
    [Password]
  )
VALUES
  ('Admin','Shopit','admin@shopit.com','12345'),
  ('test','user','testuser@shopit.com','12345'),
  ('test2','user2','testuser2@shopit.com','12345')


SET NOEXEC OFF
GO
