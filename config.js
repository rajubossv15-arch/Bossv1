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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_57_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKRjA0cnZ0SHlmUThDY2ZsL2tQZjlGWEVWcWVIUThVOC8rMW8xaFBwWkYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTc4MjYyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjY3Rjc2MEJFQ0I3NTA3RDk4QzlGNzZFRTMyMzdDNDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU0NjU3ODQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhaLUhBMEs0VGFLZWJ2eTQ3QWZjSUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWUwODlhYzEtNTQwYy00YTdhLTk0YjItZTIzNWM5NWRhN2MxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjA3LFxuICAgICAgMjIsXG4gICAgICAyNyxcbiAgICAgIDEzMSxcbiAgICAgIDIyMSxcbiAgICAgIDE5NixcbiAgICAgIDEyMixcbiAgICAgIDc3LFxuICAgICAgMTMwLFxuICAgICAgNjIsXG4gICAgICAyMTksXG4gICAgICA4MyxcbiAgICAgIDMxLFxuICAgICAgMTY4LFxuICAgICAgOTUsXG4gICAgICAxODIsXG4gICAgICA2MixcbiAgICAgIDYyLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAyNDgsXG4gICAgICA0NixcbiAgICAgIDE4OSxcbiAgICAgIDcsXG4gICAgICAyMzcsXG4gICAgICA2MCxcbiAgICAgIDE2LFxuICAgICAgMTg0LFxuICAgICAgMjU1LFxuICAgICAgMjcsXG4gICAgICAyMzAsXG4gICAgICAyMjksXG4gICAgICAxMzEsXG4gICAgICAzNixcbiAgICAgIDE2NixcbiAgICAgIDE5MyxcbiAgICAgIDEzOCxcbiAgICAgIDIyMixcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJSdjhjSEVLN28xOFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYV3MyY0c2eFl4TGZqR1ZnZGJOZ1RDOFM4Zm5JbFBldktIRSs5bFh0WUNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjR4ZXRQMkx3UjJ5VVlicFdYdjdQbG43VVUzam5mZGNtVkV2S2JyeDNBN0l0eEZQNGZtWVBwUzJCNmRETWk5OG12dFd0SWd0ZENtd2JmVUJKdG54d0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9OMTNpOHcxSXBaK2ZVSSswVVQrZyt4emZjMmNacXNaR2FhM0JHMHNQMG1DMGtFdlRjdzBnYUwxWnkzeFJkRzd4YlFCZ0hOakZOa3Q4a0JFNTdOamd3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjIyNjQxOTIwMjA3MjQ6NDJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU0NjU3ODQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTE8wXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRNk5mbVFJeFVXckVhK0ZxbDB6VWd5SGdNMnZxVDh6b2tFejJ6Tk5qaW5jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMjg5ODA0NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NDY1Nzg0ODA5MFwifSIKfQ=="  // PUT your SESSION_ID 


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
