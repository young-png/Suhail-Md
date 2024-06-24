const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="abmerchant45@gmail.com"
global.location="Abuja,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Alex:<password>@alex.0bio0un.mongodb.net/?retryWrites=true&w=majority&appName=Alex"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168000939";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://whatsapp.com/channel/0029VadHtwWFCCoaogdKsh0B" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_35_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICA0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgxLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUjdoS2VLWXh4Nnprb2JMMGR3SGR6Q2xEeFRPWmI4Y3JoYlp4MjhsQ01IST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFB0Z1dwRjBURjZ2bHpJbVhQWktwUVwiLFxuICBcInBob25lSWRcIjogXCJlYWFlODRkYi0wZDMxLTRhM2QtYmMxNS1hYzEyYTcwNDA0YzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxMzgsXG4gICAgICAxMzIsXG4gICAgICAxODUsXG4gICAgICAyMzMsXG4gICAgICAyNDUsXG4gICAgICA5NyxcbiAgICAgIDIyMixcbiAgICAgIDkzLFxuICAgICAgMTIwLFxuICAgICAgMjMsXG4gICAgICAxOSxcbiAgICAgIDE3OCxcbiAgICAgIDEyMSxcbiAgICAgIDk1LFxuICAgICAgMyxcbiAgICAgIDE3MSxcbiAgICAgIDEzNixcbiAgICAgIDE3MCxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICA4OSxcbiAgICAgIDQ3LFxuICAgICAgMjgsXG4gICAgICAxNDEsXG4gICAgICAxOTYsXG4gICAgICAyMTQsXG4gICAgICAxMjUsXG4gICAgICAxMzMsXG4gICAgICA2NCxcbiAgICAgIDI0NSxcbiAgICAgIDEyMSxcbiAgICAgIDE3MCxcbiAgICAgIDI0OSxcbiAgICAgIDM2LFxuICAgICAgMjAwLFxuICAgICAgMTEsXG4gICAgICA5OSxcbiAgICAgIDgwLFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUUzOTI5VFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjgwMDA5Mzk6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NjgzNTQ3ODgwNjc3Njo3MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeTFoNnNCRUtqQTVyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkY0SHIwNEhWOGRkUzg1Y2YzdFlZaFJkQzRJbnlRTnZQZ0RaV013ZGh3M0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY2ZTYytYanJtMndRZ3pleWtLRnIwNWFoUjBVVGJ2R3VWSkQ5TVB3aURJU3UramFBU1RpVDdjU21XVjduam0xV2EyTlhtdk9Nc05mRUdWUkpNNlMwQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYndYQTVpQTFiamhVZDVpL0NONXFoZzhIbWN3K2ZLU1VqMXRTSVFDMmljZ3JXYk9jTmZGNDBiSEJoK3I4RzZ3cFB1eHRaRGFiVjE1dXliUk91Rk9RZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODAwMDkzOTo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjQ2ODkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTUyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBNTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNSWNsbEZRM2xWYnduRnlndnpCaW9YRmxGeXhPd3JXYnBCU1hlbXgzcXg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1ODczNDQ3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MTgzMTM2MDg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🇳🇬",
  packname: process.env.PACK_NAME || "🇳🇬",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "→⁠(⁠°⁠ ⁠۝ ⁠°⁠)⁠┗",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
