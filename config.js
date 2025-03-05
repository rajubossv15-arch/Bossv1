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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_58_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidlFtV1JtczJsY2tpRVEwK2ZGaUdxTFIwdWdKQ0hFR0dCMTl4R0ZoR2xIMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwielA3Ulg1eHFRdXlINVIzOXJPT2oyQVwiLFxuICBcInBob25lSWRcIjogXCJkNzhhYzJjZC0zZGZjLTQxNzYtOThmNS0xYjk1YTE4YWM0MmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxOTEsXG4gICAgICAxNTcsXG4gICAgICAyMixcbiAgICAgIDE1MSxcbiAgICAgIDE1LFxuICAgICAgNTIsXG4gICAgICA4OSxcbiAgICAgIDQxLFxuICAgICAgNDQsXG4gICAgICAxMzIsXG4gICAgICAzNixcbiAgICAgIDY4LFxuICAgICAgMTIwLFxuICAgICAgMyxcbiAgICAgIDEyNyxcbiAgICAgIDExLFxuICAgICAgNjYsXG4gICAgICAzOCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA1NyxcbiAgICAgIDEwMCxcbiAgICAgIDIwNCxcbiAgICAgIDU3LFxuICAgICAgMTE1LFxuICAgICAgMjksXG4gICAgICAxMDksXG4gICAgICA2OCxcbiAgICAgIDE1MixcbiAgICAgIDE3MCxcbiAgICAgIDEwMSxcbiAgICAgIDEzNyxcbiAgICAgIDI0OCxcbiAgICAgIDg3LFxuICAgICAgOTUsXG4gICAgICAyMzQsXG4gICAgICA3OSxcbiAgICAgIDIwNCxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURkdWRzU2SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4Ly6IPCdk6HwnZOq8J2Ts/Cdk74gNTkxMSDgvLvqp4JcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xQNzN0b0dFSkxOb2I0R0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib3ZlQ3BBSnc0VVhzSUJXdVpLUUNVaTBjanZselVRaDhFWnlwQWRkQ2ZUaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1L2RjOUxadFc5MlJvZThiRXQ3RG1tTVNVbDBpeFk4SkxtRW5VZ3AwK2hCb0didzhmSXIyVEM3akl4UlBuSGxMYmZObHNzUTJhaHNrOFQyV1pNZHdBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZbUZrQmIzQUtCKzFaQlZ2ek9uUndJVitSTG4zMjNWN3RaODdleXlFb0lOTzZMZGZXQjFUaXFTS0JHZk5ET3dGbTdsVmIrSTFLWjkyRkFQeDFDcGNDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDExODY3MTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEbVZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURtVi5qc29uIjogIntcImtleURhdGFcIjpcIkVBVmZ0OVpBUGR6TGY0NzNvdCtKTGh4b0IzUTRWenBGNURyMU91bnhJNVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwMDkxMjMwNyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzQxMTg2NjI2Mjk0XCJ9Igp9"  // PUT your SESSION_ID 


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
