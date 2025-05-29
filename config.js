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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_16_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3LFxuICAgICAgICA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9TMXZkL0xPNXJPa1hGRVI1bmtJbXFubW9nRTl2bXNiU0lUck0vS3JLRTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RTY4NTI1ODlBQjdCOTc4N0UzMkJFMzc1RUE1N0I3M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDg0ODEzNTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3MkYwODVCQzg4RjRCM0I1QjlBOEI5QzIwNjNBQjVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODQ4MTM2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSajhYSGVGVFFBcVFHT19BVnp3WXNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYyNDMyMDljLWIxZDQtNDc5Yy1hY2QwLTk0NmU2YzQyNTg5N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDI2LFxuICAgICAgMTkwLFxuICAgICAgMTcwLFxuICAgICAgMTUwLFxuICAgICAgMTM4LFxuICAgICAgMjAzLFxuICAgICAgOTcsXG4gICAgICAxMDAsXG4gICAgICAxNDEsXG4gICAgICAxMTYsXG4gICAgICAxODgsXG4gICAgICAyNTEsXG4gICAgICAxMjMsXG4gICAgICAxOTYsXG4gICAgICAxNixcbiAgICAgIDE1MyxcbiAgICAgIDIxNyxcbiAgICAgIDgyLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDUsXG4gICAgICAyNSxcbiAgICAgIDE0MyxcbiAgICAgIDE1MCxcbiAgICAgIDMwLFxuICAgICAgMTc2LFxuICAgICAgMjE0LFxuICAgICAgMzMsXG4gICAgICA0NSxcbiAgICAgIDE2LFxuICAgICAgNjQsXG4gICAgICAxNTksXG4gICAgICAyMCxcbiAgICAgIDU1LFxuICAgICAgMTc2LFxuICAgICAgMTc3LFxuICAgICAgMTQ3LFxuICAgICAgMyxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlRxbXQwRUVNZnEzc0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRNFpNUnU1TnBGRkxCdTdWMHJPTXdIL0szam1oM2RmbzNkS3NKaFcrNnlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFHUTNKWlFYdHpEMTBZdmprT05VQ0gwbi94UzBSN1FGMGd3R1hrRWlwVkN5M1hkZVl4NHczblhCd3FmL2pWSnhPdk81bXZ0bUNsWTlHM3lTNjRyVERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjd6Z0xTY0RJQmt3VlRqVUdpbHY2VTMwZjFpdVlDdk4yYXU0Sjk2bGVYWXhjZStYbUZXNHBpZ011NHdodTh6V1lMSWVZU3doaXE5VEhxRHJWRWJEQWh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjIyNjQxOTIwMjA3MjQ6MThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg0ODEzNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJVmNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlWYy5qc29uIjogIntcImtleURhdGFcIjpcImdBY2Z0YkJ5cXJ4M2NqaGxEQ2k4cWlNQjI4YWNXK2NyNVI1NDNkOGphS2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTIxNjUzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ4NDgxMzYwMjYzXCJ9Igp9"  // PUT your SESSION_ID 


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
