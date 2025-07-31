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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_24_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDU1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFsSkpvTGI2VUxZUkNDZGlzSjZjQVhwbEJDQmZ4MDR5SHdjTlV6dkZaMlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZmUzU4WEhTVGR5dTdGcUxEeU82U3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWM2ZWVlNGMtNTIwMC00Y2NiLWI4NjItNDQyNmRkNGQyYTdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDE0OCxcbiAgICAgIDE3NixcbiAgICAgIDEyLFxuICAgICAgNCxcbiAgICAgIDk4LFxuICAgICAgNDAsXG4gICAgICAxNzgsXG4gICAgICA3NyxcbiAgICAgIDIyMixcbiAgICAgIDgwLFxuICAgICAgOTksXG4gICAgICAxODcsXG4gICAgICAyNTQsXG4gICAgICAxMDgsXG4gICAgICAyMDYsXG4gICAgICAxMTEsXG4gICAgICAxNCxcbiAgICAgIDIzOCxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDQxLFxuICAgICAgOTUsXG4gICAgICAyNCxcbiAgICAgIDgyLFxuICAgICAgMTExLFxuICAgICAgNDUsXG4gICAgICA2LFxuICAgICAgOTQsXG4gICAgICA2NCxcbiAgICAgIDIzNCxcbiAgICAgIDgsXG4gICAgICA0NixcbiAgICAgIDExMixcbiAgICAgIDU4LFxuICAgICAgMTExLFxuICAgICAgMTcwLFxuICAgICAgMTcsXG4gICAgICAxMixcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pUTWphNEhFTitxcWNRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiblF2UjJRNFpWaTBkdnNNUndaNmN0QXJyamF5Y0UrK2U0YmgwWVY5d0ptUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxM1IzWmFWS0JLWU1oVTZpY0hyZ2l0WmtuZzAzcnpSV0tmZG9nT3dhWkxBZFZSYkJPMUgxOFUwVVd2SUttMXQxOTk3Skc0MkZXV3M1aUN2QWE3NWdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuL1NDcUxiMUhSMkRyS2tNREx1emRRMEFLTmdaMkxGbEpsLzM0MVQwaXliMXRGcVlMUDFob2RPSVo4QVhIZDZWNUdqT1lhSExidjZiQUlvZ0lJREZEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYyMjY0MTkyMDIwNzI0OjMzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzODk2MjkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmM1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKYzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnSVQyK1VyYlZSM0NPWHF1d2YyZ3ZRSm5xRGIvMUFORDdVMjdKSnRXcWh3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NzU3Mzk5MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzQyNzQwNjk1MlwifSIKfQ=="  // PUT your SESSION_ID 


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
