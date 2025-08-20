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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_35_08_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MixcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUzLFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc0LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFOZW9CSEhPZ0xrdE5NTVBjbW9FbzRGS1E0enltbjQ4YS96eC9wYUpEelk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzEwNDY5NTQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5REFDRENCNzQ5QzE1MDJENTYzNEQ3QTg5MEFDMTgzM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTU2OTY5NDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRHlobHBTcGxUSUdYcXJwT0U5Y0o3d1wiLFxuICBcInBob25lSWRcIjogXCIzYjc3M2FkMy0zOWRjLTRkZmUtYjdlYi1lMTNiODY1MjhjZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjU1LFxuICAgICAgNzUsXG4gICAgICA4OSxcbiAgICAgIDE4OSxcbiAgICAgIDksXG4gICAgICAxODEsXG4gICAgICA0NixcbiAgICAgIDIyOCxcbiAgICAgIDE3MyxcbiAgICAgIDc3LFxuICAgICAgMTgsXG4gICAgICAzMCxcbiAgICAgIDEwMixcbiAgICAgIDE1MCxcbiAgICAgIDI2LFxuICAgICAgMjA2LFxuICAgICAgMjUxLFxuICAgICAgNDUsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMjQsXG4gICAgICAxMTYsXG4gICAgICAyNDAsXG4gICAgICAyMTcsXG4gICAgICAyMDgsXG4gICAgICA0NSxcbiAgICAgIDExLFxuICAgICAgNTgsXG4gICAgICA0OSxcbiAgICAgIDI1LFxuICAgICAgNSxcbiAgICAgIDE2NSxcbiAgICAgIDIxNyxcbiAgICAgIDIyNixcbiAgICAgIDE5NixcbiAgICAgIDEyMixcbiAgICAgIDExNyxcbiAgICAgIDIxNCxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL2w3ZTRCRUs2ZWw4VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktJYkY4K0NVSmVIRWd2SWZ5OE9KN1BwMksvclo0c1U4cFVRRGJCVWlpbjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZis3cEFHek1tL1drc0VJVFM1bDQrNlZqTjVjemdiVnhzTERjMmFHNDVrb0VUYnV0YmNTSjFOeTdkT0I3bnl2RnFpSTNSOTRBaGVTb01jb0tVN1JVQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3F4R0tTMUkvdnRMMGgyTnBDOWJlOFFZaVhtSi9qdG9nVmcvVERWb3B4alRXbWxWNE1odkhmTTBZbzYzSGZwVDZuRnBaQ045L2srNGdlR0tjdldtaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTA0Njk1NDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcyOTUwMjgwMDAzNTg3OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTA0Njk1NDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU1Njk2OTQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXZ4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFdnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBbWpid0FPZ2JJdVNMcXFTdWM1Wm1NSURpWXFMcFROdUlUUitPQzlHcUhFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwMDkyMDk3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU1Njk2MDM0MjA1XCJ9Igp9"  // PUT your SESSION_ID 


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
