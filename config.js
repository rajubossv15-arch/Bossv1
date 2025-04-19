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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_49_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi8wS01GSWxKczFWT2Zvd2NWNk1qM2hmU3BoRUhwYm5rVDcrU1RNK1ZJRmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjk1MTEyMjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODNFM0FCRTFFMUU2OTJFOUU0QTE3NTVDNkY2QTFBQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDUwMjczOTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE4MUY3OUU4NjFEOUUzOUVFODMzQjczRTcwMEYwNjQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NTAyNzM5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhdlZoSFZsUFNBNktyNV91Wm9GaUhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhMzM2OTcyLTYyYTEtNDY3My05MDEwLTdkODJmM2YwMTk1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxNTcsXG4gICAgICAyNDksXG4gICAgICAxNzIsXG4gICAgICAxLFxuICAgICAgNjcsXG4gICAgICAxOCxcbiAgICAgIDIyMixcbiAgICAgIDcyLFxuICAgICAgMjEwLFxuICAgICAgMjIzLFxuICAgICAgMjUxLFxuICAgICAgOTcsXG4gICAgICA0NyxcbiAgICAgIDI0OSxcbiAgICAgIDU4LFxuICAgICAgODQsXG4gICAgICAyNixcbiAgICAgIDExNyxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDM4LFxuICAgICAgNDUsXG4gICAgICA2MyxcbiAgICAgIDEzNixcbiAgICAgIDQ0LFxuICAgICAgMTAsXG4gICAgICAyMTUsXG4gICAgICAxNTUsXG4gICAgICAyMCxcbiAgICAgIDEzOSxcbiAgICAgIDE5NSxcbiAgICAgIDE5NCxcbiAgICAgIDEzMixcbiAgICAgIDE3MSxcbiAgICAgIDE5OCxcbiAgICAgIDQsXG4gICAgICAyMTQsXG4gICAgICAyNixcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUjlNMldSNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIxODU4MDU4MjE3ODkxNTozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS0dtTkVCRUxlQ2pNQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBrbHc1bDJOMHRETXpaQzB6TVowK0xBUW1pZlVvK0xCVDhkSmdweXV1bkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicDQvYW1QSFZ2R3RGSE5tKzdNaDhoYmErcVZ3c0cyV2ZSVmw4V0VISUc4clRjdVJ2UFdnN0VoYXduYXlTRDU3TTFXTllCMW00ZTFPanVYaFJTOTlHQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMEJYQ2YwL2doMXVDU3ZjS3hTKzRIdWE2MXJ5ZlduaHVmWnVuMkkrbUlxQWE3ZEVNNUV0dGg2a2VNb3l2OUZuK3VISUpEd0RmTVQrT09IUHM5SytCaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjk1MTEyMjQzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUwMjczODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQcEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBwRS5qc29uIjogIntcImtleURhdGFcIjpcInlSZFpPcEc0UjI3dEFaOVYycW1uT1QrN0g2d1IyQ3IyMnB1MHNSMWRzOU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM4Njk4ODAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDUwMjczOTE1NDZcIn0iCn0="  // PUT your SESSION_ID 


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
