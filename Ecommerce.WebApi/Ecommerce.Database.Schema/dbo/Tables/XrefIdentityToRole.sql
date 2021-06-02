CREATE TABLE [dbo].[XrefIdentityToRole]
(
	[XrefIdentityToRoleDBID] INT Identity(1,1) NOT NULL,
	[RoleID] INT NOT NULL,
	[IdentityID] BIGINT NOT NULL,
	[DisabledInd] BIGINT NOT NULL,
	CONSTRAINT	[PK_XrefIdentityToRole] PRIMARY KEY CLUSTERED ([XrefIdentityToRoleDBID]),
    CONSTRAINT [FK_XrefIdentityToRole_Role] FOREIGN KEY ([RoleID]) REFERENCES [dbo].[Role] ([RoleID]),
    CONSTRAINT [FK_XrefIdentityToRole_Identity] FOREIGN KEY ([IdentityID]) REFERENCES [dbo].[Identity] ([IdentityID])
)
