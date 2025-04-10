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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_14_04_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc0LFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrSkdIcUtycWJvNHliTmI3UVg0MVFXTExRc1hZalJEYTdQV3dIbDZhTGl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5NTExMjI0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDY0OUFDQjYwQUVCMUNGQ0M0NEIyQzNGOTQ3RDQzOEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ0MzA4ODkzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjk1MTEyMjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NjYyNDAyRUYwNTlEREY1NTg2MzhCQjAzNDAzMTQwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQzMDg4OTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXZhUEQ3TWFRWC1yWWVEaHVoN215UVwiLFxuICBcInBob25lSWRcIjogXCJkMTRhOTA3ZS01ZTFmLTQ0NWEtOGU0OC1jM2E1ZmZmNmZjOGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMTksXG4gICAgICAyLFxuICAgICAgMjAyLFxuICAgICAgNDAsXG4gICAgICA4MyxcbiAgICAgIDI0NCxcbiAgICAgIDE0MCxcbiAgICAgIDEwLFxuICAgICAgOTksXG4gICAgICA1NCxcbiAgICAgIDE5NixcbiAgICAgIDg4LFxuICAgICAgODAsXG4gICAgICAxMzksXG4gICAgICAxMDksXG4gICAgICAxNDksXG4gICAgICA2MyxcbiAgICAgIDE2OCxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICA1OSxcbiAgICAgIDE5MixcbiAgICAgIDEyNSxcbiAgICAgIDIzOSxcbiAgICAgIDQ2LFxuICAgICAgOTMsXG4gICAgICAzMyxcbiAgICAgIDEyMixcbiAgICAgIDI1LFxuICAgICAgNTMsXG4gICAgICAyMTcsXG4gICAgICAyMDMsXG4gICAgICAxODEsXG4gICAgICAxNTAsXG4gICAgICA0LFxuICAgICAgOTQsXG4gICAgICAxNTIsXG4gICAgICAxNDQsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUkI4MlhNTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIxODU4MDU4MjE3ODkxNTozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR0dtTkVCRUpXVjRMOEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBrbHc1bDJOMHRETXpaQzB6TVowK0xBUW1pZlVvK0xCVDhkSmdweXV1bkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTFNBTFB4Q1U2Z0RSdFNLMnYvWW5SZVRxZjdFUU0xcHpEM2hBWkY3ZVhhMGx1cnM4c0p6dG5LSGZxSURLUUhmdTN2YXluMm05TWxTYTRIaFFqa0k1QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieHdoVURBME5SWldncVNaWUNjOTFBMVpmQjhhTEo4Nk40OTN4M21KMkN2cnlnWVBQdHJjeXRiOGhrcTNZRFVPUFhsNW5aNTI3azgybHlWcmpmZ0dPREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjk1MTEyMjQzOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQzMDg4ODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKYm1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpibS5qc29uIjogIntcImtleURhdGFcIjpcIm5TVXhrMFJFajhZa2ppT2MvMnFrNnZmeEtHZmIwVEltaGZ6dDNyaEVBemM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM4Njk4ODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQyMTIwNzgyMjlcIn0iCn0="  // PUT your SESSION_ID 


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
