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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_39_01_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDg2LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQzArS3d6VTg3RlJtd1poYmRnazdHK1h2M0Z6L3IxZ1JNdzFrVWVtNTgrMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTlKdVJiWXpUSWlaTFphcExjc0NUUVwiLFxuICBcInBob25lSWRcIjogXCJkMDUwYTIwZS01M2U3LTQ1YzYtYjRhOS0wZWJiZjVlMjU3ZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgNDcsXG4gICAgICAyMTksXG4gICAgICAyNDcsXG4gICAgICAyMTYsXG4gICAgICAyMTksXG4gICAgICAyNCxcbiAgICAgIDI1LFxuICAgICAgMSxcbiAgICAgIDQ2LFxuICAgICAgMTI4LFxuICAgICAgMTQ4LFxuICAgICAgMjI4LFxuICAgICAgMTY1LFxuICAgICAgMTcxLFxuICAgICAgMjQxLFxuICAgICAgMTc4LFxuICAgICAgMTcwLFxuICAgICAgNjAsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxNjYsXG4gICAgICAxMjAsXG4gICAgICAxNyxcbiAgICAgIDIzOSxcbiAgICAgIDE3MixcbiAgICAgIDIxNCxcbiAgICAgIDQ5LFxuICAgICAgNjIsXG4gICAgICAxNTcsXG4gICAgICAyMTgsXG4gICAgICAyMTAsXG4gICAgICA2MixcbiAgICAgIDIwOSxcbiAgICAgIDE4OCxcbiAgICAgIDIzOSxcbiAgICAgIDE4MSxcbiAgICAgIDk3LFxuICAgICAgMzYsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUTRGN0pTTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4Ly6IPCdk6HwnZOq8J2Ts/Cdk74gNTkxMSDgvLvqp4JcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMT2lyd0ZFT3E3NDd3R0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlFWam5HZ0VkZlpabkZpSit0RzdNQUhTelVqbXlkMkliUFNBTEovMjlIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5S0NlbTI1Z25vdGtNbklqa1VrMzE1VW9BQnBGcytyQzRNU1o2cUF3ZTJEWmwzWnJwQ05hT0daMlkyUmQyMGhiek9mRFVhdjdtM205L09rWm9BSG5BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0WDk4Y2NhcWh4THZzRDZEY3dUZG8wbndhTDIwZ3JGbkM1eEZOVUlCdXJBUXhmZW1MbFRraXpET0Y1TXM4a3F5bDNGT1NTaXhIMGlYaU5FNWRkSWVDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzgwNzE1MzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJWitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlaKy5qc29uIjogIntcImtleURhdGFcIjpcIkpKQnVsRU5tSnRKN2ZSZUpVQXJQTWY2QXpOVVdLVWg2bmxYKzVPZnVhc3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2ODE4MDIyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
