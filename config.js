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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_28_01_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA1LFxuICAgICAgICAyOCxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidFhVWHh0S0RzWlVYTGJyL2Jydm1nMVl4U3FFWXRwa1hqSEVEZjdBUFBsQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI0QTQ5MTVGNENBMjgwNUVGQ0ZENURDRDRGQ0YyOUEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNjg2MTMxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3bVZlazBILVFPZW1FVktGbEFrTlF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQwNWJjMTFjLWZkYzgtNDI0MS04M2I3LWY2ZGY3NDU3MTViY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICA2OSxcbiAgICAgIDE1NyxcbiAgICAgIDM4LFxuICAgICAgMjMyLFxuICAgICAgMTY4LFxuICAgICAgNTUsXG4gICAgICAxMzAsXG4gICAgICA5NCxcbiAgICAgIDI0NCxcbiAgICAgIDg5LFxuICAgICAgMTYzLFxuICAgICAgMTc2LFxuICAgICAgMTg3LFxuICAgICAgMTk3LFxuICAgICAgMjM5LFxuICAgICAgMTc3LFxuICAgICAgMjQ4LFxuICAgICAgNTQsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICA2NSxcbiAgICAgIDExMSxcbiAgICAgIDEzNSxcbiAgICAgIDIyNyxcbiAgICAgIDU1LFxuICAgICAgMTk2LFxuICAgICAgMTM4LFxuICAgICAgMjUwLFxuICAgICAgMjU0LFxuICAgICAgMTU2LFxuICAgICAgNyxcbiAgICAgIDE0OSxcbiAgICAgIDEzOSxcbiAgICAgIDE5OCxcbiAgICAgIDk3LFxuICAgICAgNDYsXG4gICAgICAxMTksXG4gICAgICAxNyxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFSOFZXVk5GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTUxMTIyNDM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQ0KbGp86JUM6bIDNcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMT2lyd0ZFUGJNbWJ3R0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlFWam5HZ0VkZlpabkZpSit0RzdNQUhTelVqbXlkMkliUFNBTEovMjlIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJobG5zL3ZTd2NTNUdwQVZjVzBPTEVodXZkZjRwM2JvYXNiTkx5VDk3NXJBMEx6WjgyK2daRUhGMnFUUjdLckEzUmJnOXkzZVp5S0VTb2RRa0JYWVlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRTkxPMlpIOUtiaGEyQThjYWxPdHBBNG1jUzJXeGl6dDI3cUo5c2NrS0syblluS2Vucm45MnZEcFhzSFVZZm1kSmxiVUVaa3ZINjNWaXZ2T2VvcHhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzY4NjEzMDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJWitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlaKy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
