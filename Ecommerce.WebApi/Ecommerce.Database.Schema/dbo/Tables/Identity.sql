CREATE TABLE [dbo].[Identity](
	[IdentityID] [bigint] IDENTITY(1,1) NOT NULL,
	[Firstname] [nvarchar](50) NULL,
	[Lastname] [nvarchar](50) NULL,
	[Email] [nvarchar](80) NULL,
	[Password] [nvarchar](520) NULL,
	[City] [nvarchar](80) NULL,
	[MobileNumber] [nvarchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[IsActive] [bit] NULL,
    CONSTRAINT [PK_Identity] PRIMARY KEY CLUSTERED ([IdentityID] ASC),
	CONSTRAINT [UQ_Email] UNIQUE NONCLUSTERED([Email] ASC),
);
GO