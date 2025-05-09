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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_00_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDQzLFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxLFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrUUNhSlczZys0NEMydFlkeTFvTW04QVE2cGpGbnJDeGxKOExDWFVRZFJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTc4MjYyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMERDQzUyRjhDMTFGNEZFRTAyNkU1QTk2NkEwMTI1NThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2ODA2NDA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQThDMUY5ODRFREYyRjE2RDU1NzBGRTI2OUZCNTQ2NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDY4MDY0MDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieGh5aWdWZlFTR0czY0tscGhqeXlsUVwiLFxuICBcInBob25lSWRcIjogXCI1NzkyYTJiZi0wNzNjLTQxM2EtOWYyNy0yODMzNDMxOWExYjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAyNTAsXG4gICAgICAyMyxcbiAgICAgIDI2LFxuICAgICAgMTMsXG4gICAgICAxNTcsXG4gICAgICAxNDEsXG4gICAgICAxODQsXG4gICAgICAyMzYsXG4gICAgICA2MSxcbiAgICAgIDUyLFxuICAgICAgMTcxLFxuICAgICAgMjM1LFxuICAgICAgMTEyLFxuICAgICAgNTMsXG4gICAgICAyMTMsXG4gICAgICAyMTAsXG4gICAgICAxLFxuICAgICAgMTExLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMjI1LFxuICAgICAgMjI1LFxuICAgICAgNjEsXG4gICAgICA2LFxuICAgICAgMjYsXG4gICAgICAyNTUsXG4gICAgICA1MCxcbiAgICAgIDE5MixcbiAgICAgIDE4MCxcbiAgICAgIDEwNixcbiAgICAgIDIxNSxcbiAgICAgIDM5LFxuICAgICAgMTAyLFxuICAgICAgMjA0LFxuICAgICAgNjYsXG4gICAgICAyMTAsXG4gICAgICAxNTcsXG4gICAgICA4MSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUTjk3TEhHVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjIyNjQxOTIwMjA3MjQ6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlBxbXQwRUVQL00rTUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRNFpNUnU1TnBGRkxCdTdWMHJPTXdIL0szam1oM2RmbzNkS3NKaFcrNnlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlsRnVHemcrdTB6bEJnMlc1anNpZ2RhdHJvamhHMEJnNWp4QTc5cG1PY1hCTlV3S0lBNXBoRXNFSUM2MGdIVklpMUJ2TXdrSTh0T01NZEw4aFc5akJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImV2K2dpWjJhdGFqb3BRam1PRTNIWFI1NWE0di8xdU5KTTNmKzdFU1VMVzFvWTR3Y2JxWDQ1bXY3Q2hhUHVSS24yVURMbFNYZ2lLZGk2WE9MQ0FSbEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTc4MjYyNjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjgwNjQwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFqTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWpOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWXdMTTR6OW9IQ2tUeXVTT1hiTWp0Wk1WQVBBa1NmV21nM1VPVFI1NVVIST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MjE2NTMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY4MDY0MDcyNTJcIn0iCn0="  // PUT your SESSION_ID 


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
