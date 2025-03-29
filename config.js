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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_13_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRUdUN3lZZVMzUlVkS1llVVQ3dTBOenFuWUJreUtmdGJqN2dvd1BGcGdpRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEyQTAwQTQ3QkQwMUFBQUIyRDRBMTYzNEZBRDM2QzM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzI2NDgyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5NTExMjI0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjIzMzVCMTUyRDNGODVFRTMwRDk1MkRDMUM5NEY5QThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQzMjY0ODI4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkg4YU9US21jVFd1NGVSODFRd2w5QmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI5MzJjMGItMTU1Ni00N2QxLWE5NjctMTBjZWI1MmU0MGFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDY0LFxuICAgICAgMTAwLFxuICAgICAgMTMsXG4gICAgICAzOCxcbiAgICAgIDIxNixcbiAgICAgIDI4LFxuICAgICAgMjM1LFxuICAgICAgMTUzLFxuICAgICAgMTgzLFxuICAgICAgMTAwLFxuICAgICAgMjUyLFxuICAgICAgMzQsXG4gICAgICAyMjksXG4gICAgICAyNTIsXG4gICAgICAxNDEsXG4gICAgICAxOCxcbiAgICAgIDMsXG4gICAgICA3MyxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA2MSxcbiAgICAgIDE5NixcbiAgICAgIDI1NCxcbiAgICAgIDcsXG4gICAgICAxNjUsXG4gICAgICAyNTIsXG4gICAgICAyMTYsXG4gICAgICAxMjIsXG4gICAgICAyMixcbiAgICAgIDIxNixcbiAgICAgIDEwOSxcbiAgICAgIDQ5LFxuICAgICAgMTQsXG4gICAgICAxOTMsXG4gICAgICAyMzAsXG4gICAgICAyMjgsXG4gICAgICAxNzcsXG4gICAgICA0MixcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKREZDRlQ3SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIxODU4MDU4MjE3ODkxNTozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ0dtTkVCRUxLNG9MOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBrbHc1bDJOMHRETXpaQzB6TVowK0xBUW1pZlVvK0xCVDhkSmdweXV1bkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVVE4SDZDSXJOaCs1R0tibDE2a2dyRnlCOCtvUjZ3ejk4K0ZrcklsMmhoejA2VTRrRGtIVnRHQ1ZWbnJkeXB1RDZObnBTWjV1aXo3MHMxMmlCWUVlRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV3c5aHBJSk96cVhvbVFoZTUySCsxWDdtc2xSMnhHbEpXSXNuZXdKNU05bElNbmJmOXhGcVZTcVNCYkpDSHNLNlFueFRoMTh0dVhHUk9zekF4a2lyQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjk1MTEyMjQzOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDMyNjQ4MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIZVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhlWC5qc29uIjogIntcImtleURhdGFcIjpcIjRiN2RjR2Ywa3VIRFltYWc3QjN2V0hWQ0pIYVNzNkZGVzRkOVZ2NmdOQVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM4Njk4ODAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDMyNjQ4MjY4NjVcIn0iCn0="  // PUT your SESSION_ID 


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
