/*
Post-Deployment Script. Will run the populate scripts if PopulateLists is 'true'
*/

SET NOEXEC OFF
-- Done using NOEXEC to avoid syntax issues with including the scripts inside a BEGIN block.
IF 'true' <> '$(PopulateLists)'
    SET NOEXEC ON

PRINT N'Populate tables'
GO
:r .\PopulateTables.sql


SET NOEXEC OFF