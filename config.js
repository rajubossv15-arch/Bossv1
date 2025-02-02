const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923295112243" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923295112243";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_50_02_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5DaHRsMytJdTk2NElxMFdZb2tIeWxVcHpleDdEMHh6cGlseEZZWEd1MGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjEwQnVXeWpGUUV5eUtMUjhnc3RQQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmVjMjUyYWYtNThlMC00MzkwLTkyYzYtMmEyODE4MDgxZWIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDkxLFxuICAgICAgNixcbiAgICAgIDE4MixcbiAgICAgIDIzNyxcbiAgICAgIDM2LFxuICAgICAgMTUzLFxuICAgICAgNDcsXG4gICAgICAxMzgsXG4gICAgICAyMDQsXG4gICAgICAxMDgsXG4gICAgICAyMjQsXG4gICAgICAyMjQsXG4gICAgICAxOTEsXG4gICAgICAxMTMsXG4gICAgICA1OCxcbiAgICAgIDE2MyxcbiAgICAgIDIxMyxcbiAgICAgIDIxMSxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAyNDksXG4gICAgICAxMTIsXG4gICAgICAxOTMsXG4gICAgICAyMTAsXG4gICAgICAxMTYsXG4gICAgICAyNDUsXG4gICAgICAzNyxcbiAgICAgIDIzNSxcbiAgICAgIDE1NyxcbiAgICAgIDcxLFxuICAgICAgMjU1LFxuICAgICAgMTE0LFxuICAgICAgODgsXG4gICAgICAyMTIsXG4gICAgICAxNzQsXG4gICAgICAxMDUsXG4gICAgICAxMjksXG4gICAgICAxNjksXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTdEUEsxWFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI5NTExMjI0MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqngeC8uiDwnZOh8J2TqvCdk7PwnZO+IDU5MTEg4Ly76qeCXCIsXG4gICAgXCJsaWRcIjogXCIxODU4MDU4MjE3ODkxNToxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTE9pcndGRUpYWCs3d0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZRVmpuR2dFZGZaWm5GaUordEc3TUFIU3pVam15ZDJJYlBTQUxKLzI5SDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOGttSng2d1VUNDlLQ0hhdjdXd2ZHRTdhcXRmdlIyaU43WE5PaEFmbHltN1U3WWxNaExOMFoyRm1hUnFzYURjanlPV3o0TkdHRzJSVHcweGg0NERIQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieXpsbTBoQnVFR3NLSjN5KzZwZ0hLMGtiU2xBNDROSklNNVIzRUpBRHA0ZkF1dEZpR29qTCtjbUJrWm5CeWEyZHU3MURZaUNKT3dPTnJVRHB4S0x0aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjk1MTEyMjQzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM4NDY4MjQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVorXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKSkJ1bEVObUp0SjdmUmVKVUFyUE1mNkF6TlVXS1VoNm5sWCs1T2Z1YXNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjgxODAyMjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
