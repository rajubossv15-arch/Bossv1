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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_20_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODksXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSUV0S0Q3SlFOalorbnNqcy80dUE1NURCNkxDc1dlK01oSGc2Y1F5bnF3ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZlRSQkxTaFdTb0tjYlRRTFBPRUh4d1wiLFxuICBcInBob25lSWRcIjogXCJmMGY4MmI2Zi04NWVkLTQ1ZmYtOWY4Yi0yNWJmYjE5ZjA0NDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMjM3LFxuICAgICAgMTk1LFxuICAgICAgMTU3LFxuICAgICAgODQsXG4gICAgICAxNDYsXG4gICAgICA3OSxcbiAgICAgIDExNCxcbiAgICAgIDE4OCxcbiAgICAgIDE0OSxcbiAgICAgIDI1MyxcbiAgICAgIDEyNixcbiAgICAgIDIwNSxcbiAgICAgIDE2MyxcbiAgICAgIDU3LFxuICAgICAgMTk1LFxuICAgICAgNDQsXG4gICAgICA4MixcbiAgICAgIDIxNixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDE1NixcbiAgICAgIDgyLFxuICAgICAgMTgwLFxuICAgICAgMTU0LFxuICAgICAgOTksXG4gICAgICAxMTQsXG4gICAgICAyMTYsXG4gICAgICAxMjEsXG4gICAgICAyMTQsXG4gICAgICAxODIsXG4gICAgICAxMzAsXG4gICAgICAxODksXG4gICAgICA2LFxuICAgICAgODYsXG4gICAgICAyNDEsXG4gICAgICA4OCxcbiAgICAgIDgzLFxuICAgICAgMjI0LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlk3TjNFOUdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTUxMTIyNDM6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xPR21ORUJFTTdhenNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUGtsdzVsMk4wdERNelpDMHpNWjArTEFRbWlmVW8rTEJUOGRKZ3B5dXVuST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0RGNKMEVKaHRoNHBuVDU0VnM2U0k4VzhuaEtGbW42UmRvMlhnM2RVbzF5bWgzTEJPcW9QdUd5VWlsV0ZxYzFxMXRybEVhTjBoT2VKOGtWTTBEQkNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5YTRVaFV3MUtKcDFXdm95ZnhaZEtRS0lZVG5SQ2NheFNYU2FFc29pVnAwcnBKb0Q5bER0RjFpTUlDbmlPWTlFR29JYlJqb0YwZnVySmpkU1U2VVpEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjEyMDAxOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
