﻿CREATE TABLE [dbo].[Role]
(
	[RoleID] INT IDENTITY(1,1) NOT NULL ,
	[RoleName] VARCHAR(80) NOT NULL,
	[EffectiveFromDate] DATETIME NULL,
	[EffectiveToDate] DATETIME NULL,
	[DisabledInd] BIT NULL,
	CONSTRAINT	[PK_Role] PRIMARY KEY CLUSTERED ([RoleID])
)
