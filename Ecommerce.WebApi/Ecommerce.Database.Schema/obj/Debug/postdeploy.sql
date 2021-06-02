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
