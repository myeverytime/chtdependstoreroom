CREATE DATABASE CardFile
Go

USE CardFile

CREATE TABLE [CardFile].[dbo].[ACCOUNT] (
	[AccountID] [varchar] (32) NOT NULL ,
	[Name] [varchar] (50),
	[Address] [text],
	[Phone1] [varchar] (20),
	[Phone2] [varchar] (20),
	[Email] [varchar] (128),
	[Note] [text] 
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE TABLE [CardFile].[dbo].[CONTACT] (
	[AccountID] [varchar] (50) NOT NULL ,
	[Name] [varchar] (50) NOT NULL ,
	[Title] [varchar] (50),
	[Phone] [varchar] (20),
	[Extn] [varchar] (10),
	[Email] [varchar] (128),
	[Note] [text],
	[PhotoID] [image] NULL 
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS OFF 
GO

CREATE PROC get_Contacts (@AccntID varchar(32) ) AS
SELECT * FROM Contact WHERE Contact.AccountID = @AccntID
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON 
GO
