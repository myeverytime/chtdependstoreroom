/* 
CREATE DATABASE WBF_Vault
REM GO
*/

USE WBF_VAULT
GO

CREATE TABLE dbo.Accounts
  (
    AccountID nvarchar(32) PRIMARY KEY,
    Name nvarchar(255) NOT NULL,
    FileCode nvarchar(32) NOT NULL,
    Address text NOT NULL,
    Phone1 nvarchar(20) NOT NULL,
    Phone2 nvarchar(20) NOT NULL,
    Fax nvarchar(20) NOT NULL,
    Email nvarchar(20) NOT NULL,
    ProjectIDMask nvarchar(32) NOT NULL,
    ProjectFCMask nvarchar(32) NOT NULL,
    Created datetime NOT NULL,
    Note text NOT NULL
)
GO
 