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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_47_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjQ0cmhZUGw0eXRSaWtZbHdVZzV2N3hZWWtHK3h2NTl2VkdxT3U0MnBkTVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NjE5MTg2N0VDRTg0OEYyNzU5Rjk2MEUwNjJBQ0Y2Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTQ0OTg4MjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib0IzT0xqaWhRQmVBNGp0Q0lRd3RDUVwiLFxuICBcInBob25lSWRcIjogXCI4Yjc3ZjhiYi1lYmI0LTRlYzUtYjEzYy1mNzM0YTVlNTA4MjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxLFxuICAgICAgMTkzLFxuICAgICAgOTksXG4gICAgICA4OSxcbiAgICAgIDEwNCxcbiAgICAgIDE3MSxcbiAgICAgIDE2MyxcbiAgICAgIDE2NyxcbiAgICAgIDEzMyxcbiAgICAgIDE3NSxcbiAgICAgIDIxMixcbiAgICAgIDEyNCxcbiAgICAgIDM1LFxuICAgICAgNTIsXG4gICAgICAxMzAsXG4gICAgICAxNDcsXG4gICAgICA5NixcbiAgICAgIDkxLFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDEsXG4gICAgICA5NixcbiAgICAgIDM4LFxuICAgICAgMjMwLFxuICAgICAgMTA3LFxuICAgICAgNzksXG4gICAgICA5LFxuICAgICAgMjQsXG4gICAgICAxMjMsXG4gICAgICAxNzQsXG4gICAgICAxMjUsXG4gICAgICAxOCxcbiAgICAgIDIyLFxuICAgICAgMjQzLFxuICAgICAgMTM0LFxuICAgICAgMjA4LFxuICAgICAgMzcsXG4gICAgICAxMDgsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeVJ2OGNIRVA2TnpzUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhXczJjRzZ4WXhMZmpHVmdkYk5nVEM4UzhmbklsUGV2S0hFKzlsWHRZQ2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlFSZkJXa2krOTduVE1CV0x4cVdaM2s1Rmg3cGNtYWdyYXhXdllIbzlqSlpVWUl6UXMyNDloS0tUZllpT3NkR0IvN0FmZkJXdHJYdHNyZzBNMWVYQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQW1uT2g3VXhYNWFvNkZMMzBRMFl4Rm00aXBLQ2xVeE1hUC95R3lLRXVrN2JPcDhCbEt1N3ZndEJXS1ZPYlZJMXNWRVBhbDdnTnd4WXFYdzNIdXpCaXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE3ODI2MjY6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MjI2NDE5MjAyMDcyNDo0MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTc4MjYyNjo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTQ0OTg4MThcbn0iCn0="  // PUT your SESSION_ID 


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
