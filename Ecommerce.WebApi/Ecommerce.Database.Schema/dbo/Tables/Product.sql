CREATE TABLE [dbo].[Product]
(
	[ProductID] BIGINT Identity(1,1) NOT NULL,
	[ProductName] NVARCHAR(80) NULL,
	[Description] NVARCHAR(250) NULL,
	[Status] INT NULL,
	[ArchivedInd] BIT NULL,
	[CoverImage] image NULL,
	[Price] int Null,
    CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED ([ProductID])
);
