CREATE TABLE [dbo].[ProductStatus]
(
	[ProductStatusID] INT IDENTITY(1,1) NOT NULL ,
	[Name] VARCHAR(30) NOT NULL,
	[DisabledInd] BIT NULL,
	CONSTRAINT	[PK_ProductStatus] PRIMARY KEY CLUSTERED ([ProductStatusID]),
)
