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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_38_03_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk"  // PUT your SESSION_ID 


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
