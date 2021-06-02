CREATE TABLE [dbo].[XrefProductToStatus]
(
	[XrefProductToStatusID] INT IDENTITY(1,1) NOT NULL,
	[ProductID] BIGINT NOT NULL,
	[StatusID] INT NOT NULL,
	CONSTRAINT	[PK_XrefProductToStatus] PRIMARY KEY CLUSTERED ([XrefProductToStatusID]),
    CONSTRAINT [FK_XrefProductToStatus_Product] FOREIGN KEY ([ProductID]) REFERENCES [dbo].[Product] ([ProductID]),
    CONSTRAINT [FK_XrefProductToStatus_Status] FOREIGN KEY ([StatusID]) REFERENCES [dbo].[ProductStatus] ([ProductStatusID]),
);
