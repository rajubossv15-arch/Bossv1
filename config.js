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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_50_02_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5TGFmcGFlQzhmREtVaUxkcktPaTU0RWxZLzIvdlU5RGtCd3JUVUJHeVo0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5NTExMjI0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTNENDI5QkIzQjNCNDE4OTI3QTFFNkRCQUU2MkUzMzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM4NzU5ODE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjk1MTEyMjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNjhDMkMwOEY0MTkxNDJBODYzMEUyNERBMTlCQUMwNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mzg3NTk4MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnY4X25OWFRTcVNYdThaRTRWQkwzUVwiLFxuICBcInBob25lSWRcIjogXCJmNjQ5ZTQ1OS0xMjZmLTQ1NjEtOThhMS04YmIyM2I3Nzg4YWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICA0MixcbiAgICAgIDIyNCxcbiAgICAgIDE4MCxcbiAgICAgIDIyOCxcbiAgICAgIDEsXG4gICAgICAxNDMsXG4gICAgICAxMzIsXG4gICAgICAxMDgsXG4gICAgICA5NCxcbiAgICAgIDI2LFxuICAgICAgMzUsXG4gICAgICA5MSxcbiAgICAgIDEyMyxcbiAgICAgIDIxNSxcbiAgICAgIDE3MCxcbiAgICAgIDYsXG4gICAgICAxNSxcbiAgICAgIDI0MCxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDgwLFxuICAgICAgNyxcbiAgICAgIDI2LFxuICAgICAgMjM1LFxuICAgICAgMTYyLFxuICAgICAgODgsXG4gICAgICAxMTIsXG4gICAgICAxNDIsXG4gICAgICAyNyxcbiAgICAgIDE5LFxuICAgICAgMjI1LFxuICAgICAgMTUxLFxuICAgICAgMTY1LFxuICAgICAgMTE5LFxuICAgICAgMTcxLFxuICAgICAgMzMsXG4gICAgICAyMDMsXG4gICAgICA2NSxcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0MTRRNjMzUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4Ly6IPCdk6HwnZOq8J2Ts/Cdk74gNTkxMSDgvLvqp4JcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQT2lyd0ZFUDY4amIwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlFWam5HZ0VkZlpabkZpSit0RzdNQUhTelVqbXlkMkliUFNBTEovMjlIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUeWFCTUJWbStOY1pWUlZ2ZG5xQmo4UjBOczFrNk8zeXRSNGJKUVNWekJhc0FMSW1ydFg4SXJ6WXk2TWYzMk14QXNwWHR4UUxmcGdPMHh4UWhOc21CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXb2lYWFhOTmFnY2psbmI5TEZZc0dkck5ESlFIOFNaSWUyV05xejBrbk1yZVlPaGtsMERYZjU3eUJSeURJdXgwZzV3T04vSGU3cnBQMDhOZ0x2SWFEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzg3NTk4MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZWNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFlYy5qc29uIjogIntcImtleURhdGFcIjpcIkFyWFNyTFNpeWZ0YlZMOFhRWlRKRzRuRmsvd3ViTm0yRkdXejVNYW1xRXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2ODE4MDIyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM4NzU5ODEzMzE3XCJ9Igp9"  // PUT your SESSION_ID 


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
