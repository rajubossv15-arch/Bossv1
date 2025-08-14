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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_33_08_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSUE4TG4zL3g1bi9ka3ZTSmowREhBTVlMb240NEN6elNKZ3Zjck5YTmZ4WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4NEY5RjhGRkJDMTY5QUMyOTUzOTQwOUIwQzI1ODUyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NTE5Mjc4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJES2ZoYmk5R1NpMmtiRi0wUXFNVVR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjViMWNmMzlhLWQwZDYtNDhjNS1hOGQwLTE3ZDI2ZmNjMTQ3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDE0MixcbiAgICAgIDIyMSxcbiAgICAgIDIxMixcbiAgICAgIDI1NSxcbiAgICAgIDIzLFxuICAgICAgMTMzLFxuICAgICAgMTY4LFxuICAgICAgMjQwLFxuICAgICAgMTkxLFxuICAgICAgMzMsXG4gICAgICAxMjEsXG4gICAgICA3NSxcbiAgICAgIDIyMCxcbiAgICAgIDU3LFxuICAgICAgMzksXG4gICAgICAzMCxcbiAgICAgIDY0LFxuICAgICAgMzcsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMjYsXG4gICAgICAzOSxcbiAgICAgIDI0LFxuICAgICAgMTkyLFxuICAgICAgMTAsXG4gICAgICA3NSxcbiAgICAgIDQ4LFxuICAgICAgMjI5LFxuICAgICAgMjI1LFxuICAgICAgMTMwLFxuICAgICAgMzksXG4gICAgICAxMzQsXG4gICAgICAxNTcsXG4gICAgICA3NixcbiAgICAgIDEzOSxcbiAgICAgIDM1LFxuICAgICAgMTg0LFxuICAgICAgMjE2LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZSdjhjSEVNUzcrTVFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYV3MyY0c2eFl4TGZqR1ZnZGJOZ1RDOFM4Zm5JbFBldktIRSs5bFh0WUNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBBUTZTZFdSVzc5NnBaNEdLL0RTanI0S015cS9DTFNZa0hrRG1lWG9uVjhmZmxPQTg2SUpmazR4N2FuUWE1Tkx3QWxhK3BYMTFHdk5haFBicElZRkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImcwbkJzZGJsWE9Jc0NZNzd5bVFaVGEwV2YrL2dhZi9KZDlFTGxvTWViOXpiWkhGZ0pheEhYUng2aWpWdlhBem4xV2tIN0M4Nk54NWZQNTY0K055cGhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjIyNjQxOTIwMjA3MjQ6NDNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU1MTkyNzc1XG59Igp9"  // PUT your SESSION_ID 


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
