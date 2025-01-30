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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_23_01_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDUxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaGxMQndDdlpGaEdRYTg2Slg4dk8xOE8yNFRLK1Fic1U4bmM5NEFXRWR2dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFVwYXRfN3ZUUG05VlMweVllRkV1QVwiLFxuICBcInBob25lSWRcIjogXCJiOWU3ODE4ZC00MDU3LTRhOTctYTYwZS00NWU1N2MwODQyZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTgyLFxuICAgICAgMTYxLFxuICAgICAgMjQ2LFxuICAgICAgMTksXG4gICAgICAxNjksXG4gICAgICAzLFxuICAgICAgMTg3LFxuICAgICAgMTI3LFxuICAgICAgMTY4LFxuICAgICAgMTEzLFxuICAgICAgMTc3LFxuICAgICAgMjAyLFxuICAgICAgMTYsXG4gICAgICAyNDksXG4gICAgICAxNzEsXG4gICAgICAxNTAsXG4gICAgICA5LFxuICAgICAgMjA2LFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMTc5LFxuICAgICAgMTIyLFxuICAgICAgNDMsXG4gICAgICAxMjAsXG4gICAgICAxNDQsXG4gICAgICAxNTMsXG4gICAgICA5NSxcbiAgICAgIDE0LFxuICAgICAgMTQ5LFxuICAgICAgMTY0LFxuICAgICAgMjAzLFxuICAgICAgMjQ3LFxuICAgICAgMzYsXG4gICAgICAyNTEsXG4gICAgICAxMzYsXG4gICAgICA0MSxcbiAgICAgIDIxMSxcbiAgICAgIDI1NCxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWENDNkJOVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4Ly6IPCdk6HwnZOq8J2Ts/Cdk74gNTkxMSDgvLvqp4JcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMT2lyd0ZFTTM2N2J3R0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlFWam5HZ0VkZlpabkZpSit0RzdNQUhTelVqbXlkMkliUFNBTEovMjlIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6L3hERUVid0liaXBQRFZJajhjeFBWZ3VPdUpyWDBGTmVHTGhLQkR2d05rOXpRWC84a3ZUeGIxMUxwcGR3VW8yUDNkdUtiajYwbWZxRU9ZRlJmcDlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0clBsTTYyVnZKd3JTdmlVb3BqOG1wQ2RMeEx4TFhIT2UyL1pJdmpRc3ZnQjJEVXFZdktDeGFyUlBKSXpGdE5vRVVPeSsrcTEzeHRLUGlabEZidm9DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzgyNDM0MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJWitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlaKy5qc29uIjogIntcImtleURhdGFcIjpcIkpKQnVsRU5tSnRKN2ZSZUpVQXJQTWY2QXpOVVdLVWg2bmxYKzVPZnVhc3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2ODE4MDIyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
