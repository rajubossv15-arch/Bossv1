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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_42_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdkUnQ0S3c0ZWEzWFRVZTNkSkMxbVBxNXJvdmE5RjdMWmVhNmRxTUwwRkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNTBCNTM4MzIyM0IzQzQ2NTY2NkY2ODhFRDUzOTgyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTk5OTIxNjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWGNzLWxCWEZSbktuQ2FrZGxWUlFDUVwiLFxuICBcInBob25lSWRcIjogXCI5YzZhOTBjNS03NDQwLTRiZDItYjAzOS1jNzYwM2U2MmQ3NWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjM4LFxuICAgICAgMjMwLFxuICAgICAgMjcsXG4gICAgICAxOCxcbiAgICAgIDEyNSxcbiAgICAgIDE2LFxuICAgICAgMjUxLFxuICAgICAgMjQ4LFxuICAgICAgMTg1LFxuICAgICAgNDAsXG4gICAgICAyNDQsXG4gICAgICAxODAsXG4gICAgICAyMDgsXG4gICAgICAyNixcbiAgICAgIDExMCxcbiAgICAgIDI5LFxuICAgICAgMjgsXG4gICAgICA5LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgMTYsXG4gICAgICAxMixcbiAgICAgIDUyLFxuICAgICAgOTIsXG4gICAgICAyNTUsXG4gICAgICA5LFxuICAgICAgMjUzLFxuICAgICAgODQsXG4gICAgICAyMTQsXG4gICAgICAyMTMsXG4gICAgICAzMyxcbiAgICAgIDI1MyxcbiAgICAgIDE2NCxcbiAgICAgIDQ1LFxuICAgICAgMzgsXG4gICAgICAyNDMsXG4gICAgICA1NyxcbiAgICAgIDUwLFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2FBMks0Q0VOeXluY2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4YUc2MGNhTzhCYVdPUG9hS1lmMDUrRUV4cEdBcTZibXpLaGEvNEFUd3djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBtU0x0cllJa09mRGZUbWhlNVRucEtMdGtKM0t2dUpDeEpVOU91N2k0Sm8xVEF1elkxT2pFN0JZSncwUXR2NjhnS2doUithUldhUEp5OTdmQXE0akRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJNZEF6SDY0RVp2Q2lUWVJxemRvMTkvTzNKTDVTN1h3K0taYnl2Vm1jRmc0UFl1NjlsOFJtemtDTlFZbzNSQmVlVjVxb25RU2c5MjE2eDN2SVNrY0N3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjIyNjQxOTIwMjA3MjQ6NDZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1OTk5MjE2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU90SVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3RJLmpzb24iOiAie1wia2V5RGF0YVwiOlwidnZJR1JJeFV4OVYrcE5nanhSZjJKZFdML25sYmJwWGZxcWNOOUl2dnZhRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzQ3ODE3MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1OTk5MjE2NTU0NFwifSIKfQ=="  // PUT your SESSION_ID 


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
