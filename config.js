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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_06_03_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRzBOd1BlMHF2MVpXYTFGcWZiQno5dE9naTk3OU94V3VzMWs4b25PUEIrST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhGRkE5MEVCRTZFNEFDOUU2MEE0QjM5NzkxODdEMUU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MjkwNDQxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHbVN3QXBXaVRCVzQxS3VaMFNQV0tRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRlZjJlOGRjLWRiYjQtNDYwZC04MDYyLTgzZjRmMDA1MTljOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDIzNixcbiAgICAgIDIwNixcbiAgICAgIDE5NixcbiAgICAgIDkwLFxuICAgICAgMTc3LFxuICAgICAgMTI4LFxuICAgICAgMTg5LFxuICAgICAgMjMxLFxuICAgICAgMTI0LFxuICAgICAgMzUsXG4gICAgICAxODksXG4gICAgICAxNTUsXG4gICAgICA3OSxcbiAgICAgIDE4NyxcbiAgICAgIDk4LFxuICAgICAgMTA1LFxuICAgICAgMTQyLFxuICAgICAgMTE5LFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxOTksXG4gICAgICAxOTYsXG4gICAgICAxNTQsXG4gICAgICAyNDQsXG4gICAgICAxOTMsXG4gICAgICAxNjksXG4gICAgICAyMDIsXG4gICAgICAxNTUsXG4gICAgICAxODUsXG4gICAgICAyNDYsXG4gICAgICAxMzMsXG4gICAgICAxMzcsXG4gICAgICAxNzEsXG4gICAgICAxMTEsXG4gICAgICAzLFxuICAgICAgMjI5LFxuICAgICAgMTA1LFxuICAgICAgMTU4LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhLUEpIMzZQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTUxMTIyNDM6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kzem9Ma0RFTlc0aXI4R0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidFVncEVzNHFic080Mm5sdlkyVVV6SnZqRHR4dEs0Vlk0VStDZklhU1hFRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHdmRzU0dTbEdyOGJBMHVsWW92R0dZVFJhV3dLWEcxYXIyL09lcUlxbS9tV2lKS0VSOTErTHU0dVg4MnBrbDhZLzZCc1JLbWk3NS82QzNXOFFuTG5EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOVlN5LzZoRlUvVlA4d0RsZzFQdU0xc3AxNmNXUW9MSzlMYk45WXZXZmZ2am1FeDlUbFRJODEzK1B6YnhMUDJ4Y3daUy9ibVJVZmdkRDk3RVUrbnhCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI5MDQ0MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKVDhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpUOC5qc29uIjogIntcImtleURhdGFcIjpcIjJhY1p6d1RzWi9JU2pIZ2cvNGhQRHRlakY2NFY1aWVaY0c3d09NRDVGazg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTI1MzgzMDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDIzMTIzMDMxNzZcIn0iCn0="  // PUT your SESSION_ID 


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
