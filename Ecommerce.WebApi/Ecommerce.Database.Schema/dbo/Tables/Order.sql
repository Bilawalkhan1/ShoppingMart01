CREATE TABLE [dbo].[Order](
    [OrderID] BIGINT IDENTITY(1,1) NOT NULL,
    [ProductID] [bigint] NOT NULL,
    [Status] [nvarchar] (50) NOT NULL,
    CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED ([OrderID] ASC),
    CONSTRAINT [FK_Product_Order] FOREIGN KEY ([ProductID]) REFERENCES [dbo].[Product] ([ProductID])
);
