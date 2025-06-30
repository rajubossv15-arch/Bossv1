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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_02_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY2LFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNixcbiAgICAgICAgMTM4LFxuICAgICAgICA2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMzLFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyMEJTNjcxYnhyOHB6c0lJTWZ1a0NZTndaZ0pMNUVBcENzcXdUK1VITXVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMWjZIWUx1R1RaMjZRNmhVTnk3T2dRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5MzVjZDMzLTEzYWYtNGEwYi1hZjg5LWU2NDZmYmNlODUyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICA2NCxcbiAgICAgIDIzNixcbiAgICAgIDg4LFxuICAgICAgMTQ4LFxuICAgICAgMjM3LFxuICAgICAgMTI1LFxuICAgICAgMjMwLFxuICAgICAgMjU1LFxuICAgICAgMzIsXG4gICAgICA2NSxcbiAgICAgIDEzMSxcbiAgICAgIDYzLFxuICAgICAgMTUxLFxuICAgICAgNjksXG4gICAgICAxNDgsXG4gICAgICAzMSxcbiAgICAgIDE5NCxcbiAgICAgIDkyLFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDMsXG4gICAgICAyNTUsXG4gICAgICAxMTgsXG4gICAgICA1NixcbiAgICAgIDM3LFxuICAgICAgMTU4LFxuICAgICAgNzQsXG4gICAgICAxMzEsXG4gICAgICAxNDAsXG4gICAgICAyMTEsXG4gICAgICAxMixcbiAgICAgIDI0OCxcbiAgICAgIDIyMCxcbiAgICAgIDE3LFxuICAgICAgMTE2LFxuICAgICAgNzEsXG4gICAgICAyMTQsXG4gICAgICAxNDEsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0picW10MEVFUHV4aXNNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUTRaTVJ1NU5wRkZMQnU3VjByT013SC9LM2ptaDNkZm8zZEtzSmhXKzZ5bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5R2FBRjdkTE05eTZaMTYvY1o0STQxMGcxYmxZWml4QUxyNFcyVW1GUjM4amxLaVNhdlE0Um9YdVAyTWdKZmxkbGdXNEtieTJkTWhpdjI5dlAyRFdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0Unp5N0pBR2pHK3dyNzlHUnBWTDlFZ3dMVFczQ3RqNkQyNXltRUNYeHVvQlhMR1cxbUM1UWNMZ0JLKzRoZnJFYjRtL0lVYmhqVlNVcFRQcXVCMFBpUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYyMjY0MTkyMDIwNzI0OjI0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUxMjkyMTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUplXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYNXZwZnN1SFZLYnVGZjRhZDZvMlk5eElJY3JLWktCZ3hQVFZYc3NPOFY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjkyMTY1MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKZi5qc29uIjogIntcImtleURhdGFcIjpcIjlLMG9oY2d2eHgyVDB5R21pM05WeWVORGE4Q1BtUWRudm1Pek05YXpoOUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTIxNjUzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTI5MTcyOTg4NVwifSIKfQ=="  // PUT your SESSION_ID 


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
