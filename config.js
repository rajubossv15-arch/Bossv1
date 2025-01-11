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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_31_01_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUxLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidmxYUkthUUZHSi9sZkl4RmVqYjk2MGFzY1JGYWQ5VjlTOXNQeGpqZEtBST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU5MEU0Rjk5OTBEMkVBODhDNjA5N0Y0RkY4RDRGNTAzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNjM0NjY2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6a3BSdkJnR1M3ZWdYWWU0Njl5Z0N3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkNzM3OTJlLTNjYjQtNGZlYS04NzUyLTY2NjQzNGI3ZGJlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAyNixcbiAgICAgIDE5MixcbiAgICAgIDE5NyxcbiAgICAgIDM3LFxuICAgICAgMjE0LFxuICAgICAgMjEyLFxuICAgICAgMTgxLFxuICAgICAgOTQsXG4gICAgICAxOTQsXG4gICAgICAxOTYsXG4gICAgICAxOTksXG4gICAgICAxMjQsXG4gICAgICA0MCxcbiAgICAgIDcyLFxuICAgICAgNDAsXG4gICAgICAxMTAsXG4gICAgICAyMTIsXG4gICAgICAyNTQsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICA4OCxcbiAgICAgIDgsXG4gICAgICA3NixcbiAgICAgIDg2LFxuICAgICAgNzgsXG4gICAgICAyOCxcbiAgICAgIDE2MyxcbiAgICAgIDY4LFxuICAgICAgNjcsXG4gICAgICA0NSxcbiAgICAgIDEzNixcbiAgICAgIDg0LFxuICAgICAgMjI0LFxuICAgICAgNixcbiAgICAgIDE4OCxcbiAgICAgIDgwLFxuICAgICAgMjM4LFxuICAgICAgNDUsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQThaTlZCUVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI5NTExMjI0MzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlDQpsanzolQzpsgM1wiLFxuICAgIFwibGlkXCI6IFwiMTg1ODA1ODIxNzg5MTU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxPaXJ3RkVLT1krcnNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmUVZqbkdnRWRmWlpuRmlKK3RHN01BSFN6VWpteWQySWJQU0FMSi8yOUg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJraGs1WEd3R1Rqak8wN2ZuMHordlQ1WW04SmRUcWs1VXRjQW5HR2VXV3RsSjFlWGxkRW9ja2Y3b2F5akVmUDJuNTljTkszZVlhckMxSHJtK0FSVUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNONDBMTndHRjdUN0w5RlBNKzJnR1hMZGs3SWRPb1pIVWJKZ3FFcTlLeEppOXIzRVlKVFVtdlpIMEpnWGd3Qm9Wd08zbDU5UTZPdHp0ZjZmeHVqb0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5NTExMjI0MzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjM0NjY2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlaK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVorLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSkpCdWxFTm1KdEo3ZlJlSlVBclBNZjZBek5VV0tVaDZubFgrNU9mdWFzcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDY4MTgwMjI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzYxNzE4NjM5NDhcIn0iCn0="  // PUT your SESSION_ID 


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



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
