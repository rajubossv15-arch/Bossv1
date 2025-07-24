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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_58_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZVXM3Q0xWblJjYWJEUnlBaEhCMWdZQms1WFdnMlFRYVd4Y2RSeThpSnJ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0aV9YdlNJY1Q2Q0duVldYLWxyMXJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlOTZiOTkzLTU3ZGUtNDcyYi04ZTZlLTllMmI0YzY1Zjk3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICA4OSxcbiAgICAgIDE3NyxcbiAgICAgIDE4MSxcbiAgICAgIDIyMCxcbiAgICAgIDE0NyxcbiAgICAgIDIzMCxcbiAgICAgIDIzNCxcbiAgICAgIDI4LFxuICAgICAgMTU4LFxuICAgICAgMTEwLFxuICAgICAgNjksXG4gICAgICAxODAsXG4gICAgICAxMTUsXG4gICAgICA1MCxcbiAgICAgIDE1NCxcbiAgICAgIDk5LFxuICAgICAgMTA0LFxuICAgICAgMTc4LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAyMjgsXG4gICAgICAzNixcbiAgICAgIDc1LFxuICAgICAgMTM4LFxuICAgICAgMTIzLFxuICAgICAgOTksXG4gICAgICAxMTIsXG4gICAgICA0OSxcbiAgICAgIDE5MixcbiAgICAgIDIyNixcbiAgICAgIDM1LFxuICAgICAgMjE2LFxuICAgICAgMTY3LFxuICAgICAgMjE5LFxuICAgICAgNzEsXG4gICAgICAyMjIsXG4gICAgICAyMjgsXG4gICAgICAxNjQsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pqcW10MEVFSWVVaWNRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUTRaTVJ1NU5wRkZMQnU3VjByT013SC9LM2ptaDNkZm8zZEtzSmhXKzZ5bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiaG4ra1F2ZVhkMG02dFZhUzI0bDk5RG5LNVVYY3FiQmVoek9pbmRUZG5Pd05Pd0NMeURpNE1QZklZUHZwYXl3NmJ5R1NyMjB0dENqZm5tNUpHanNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZSmVvNDJla1ZYY2hVaDkvcVhZblgyYmtLOEplaXl3aDMwNWMyZFUwVHdmcFZLeWVOMm5oc3hjMFo5c1hMM1ZtVS9wWndBeHRhdTR3UmI3Y3E4SEpEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYyMjY0MTkyMDIwNzI0OjMxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzMzY5MDk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUplXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYNXZwZnN1SFZLYnVGZjRhZDZvMlk5eElJY3JLWktCZ3hQVFZYc3NPOFY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjkyMTY1MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKZi5qc29uIjogIntcImtleURhdGFcIjpcIjlLMG9oY2d2eHgyVDB5R21pM05WeWVORGE4Q1BtUWRudm1Pek05YXpoOUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTIxNjUzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTI5MTcyOTg4NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKZy5qc29uIjogIntcImtleURhdGFcIjpcImJjUVROWTZsVG4rQ3h4S28wR2daNFVPd01BWDlpYk5BdlNwa1JiT3RUbmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTIxNjUzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUpoLmpzb24iOiAie1wia2V5RGF0YVwiOlwia3I4Y0w0WDJUWi9BdU1hZnRXTnhVK1BzVDZmNHUyTFBtaHF6MFVsMWJQaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MjE2NTM0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUppLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTVlZL3NjZ0p1cSswL0FKbHhzQysyaFdjVER0dC9ubHNyMTBac3NsRTBJZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MjE2NTM0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKai5qc29uIjogIntcImtleURhdGFcIjpcIkEyTVlTaVN1aWNwQlhDOGlodGg4Rm93RTJ5VnRmM3B4blFtSStiYXN2dDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTIxNjUzNCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUprLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVi9RcEpHZy8zTjdHQnYwcS9vNk9qRVloMk9VUngxSzFDMERoVm05OVBjUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MjE2NTM0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUzMzI5MDM3NTE4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUpsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0FiT2xnS1JDT0dnT3NKL2s0MTRFUTJUUGI3Y0ZJaExIVm4wOFdFR282Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MjE2NTM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5S3QwM2c1YVo0bFN2WStQUVBlRysxSHVCdTFPWWxMN1dKTmdST0p3d2NRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjkyMTY1MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTMzNjAyMjk2NTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4WEpnOGJpWUlIcy9XN0JpbW5oU1ZNcDkyV0ZmK2JuUUlqanVMeDNMQWxRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjkyMTY1MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzM2MDI5NjM5OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKby5qc29uIjogIntcImtleURhdGFcIjpcIlNsbHFBZytVbm9kT1JjYktKNzJJY2hkRVVkL21JVG5KZENrODBQTDJLUG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTIxNjUzNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUzMzY5MDAxMTMxXCJ9Igp9"  // PUT your SESSION_ID 


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
