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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_22_02_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRQSVRvTDRwUUlYSjRneUpNQTh4QjBBSDE4eHJCcERlWjBRKzdrQVlHZnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjk1MTEyMjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MTAxMzVCM0I5RDY4MzVFRUE1OEVCQTAxQjVDMjFBN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzkyODczMzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE5NjczOUY2NDhENkYxQkUwRTYxQUQwOTlGNEE2NkY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczOTI4NzMzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3Nm5jWG5hYlQyS21zMU5BLXNsUzlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyZjVjY2ZmLWRhNmEtNDM1Yy04YjRjLTA5ODM0NWViYTBjZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxMjgsXG4gICAgICA1MCxcbiAgICAgIDEyOCxcbiAgICAgIDIxNyxcbiAgICAgIDIwMyxcbiAgICAgIDIyOCxcbiAgICAgIDEwNCxcbiAgICAgIDEzMixcbiAgICAgIDE5MSxcbiAgICAgIDEyMyxcbiAgICAgIDE5NixcbiAgICAgIDg3LFxuICAgICAgODUsXG4gICAgICA2LFxuICAgICAgMjQyLFxuICAgICAgMTAyLFxuICAgICAgNTEsXG4gICAgICA0MSxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDc1LFxuICAgICAgMzcsXG4gICAgICAxMCxcbiAgICAgIDI3LFxuICAgICAgMTA5LFxuICAgICAgMTg1LFxuICAgICAgMjUsXG4gICAgICAxODgsXG4gICAgICAxLFxuICAgICAgMjIwLFxuICAgICAgODUsXG4gICAgICAxNDgsXG4gICAgICAxNDgsXG4gICAgICA0OSxcbiAgICAgIDIyOSxcbiAgICAgIDE3NCxcbiAgICAgIDU3LFxuICAgICAgMjQ2LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIxUzQ4RERSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTUxMTIyNDM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HgvLog8J2TofCdk6rwnZOz8J2TviA1OTExIOC8u+qnglwiLFxuICAgIFwibGlkXCI6IFwiMTg1ODA1ODIxNzg5MTU6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFA3M3RvR0VLTFdyYjBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvdmVDcEFKdzRVWHNJQld1WktRQ1VpMGNqdmx6VVFoOEVaeXBBZGRDZlRrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdPRUNVQTkvcEV6eXZzb1MwcnFLcGhTQ0MzWVJpbmFrNi9YeE9TM21IT0VqaGdhVkhKbnBIK2FRcGZ2clVORCt2ajhqOThUeW1SaHpFcTEzZE9IckFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBzTVJDM3YxTHl5eFB5RnlmQTlrTkVkRHZQbENOaHFuUldNTnhEWXFzamt0akp5dFovOU9BSFNIL01xQmk0eHlPL2wrQVZzdEVuM1U5Mi95SjFOdUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5NTExMjI0MzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTI4NzMzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURtVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRG1VLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFcrdW9nLzMvaG5wNDZEbXdRNnNzby9Ka1o3dElhV0hMQVF1K1VobzFIMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODAwOTEyMzA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzkyODczMzc5MzVcIn0iCn0="  // PUT your SESSION_ID 


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
