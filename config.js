const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="abmerchant45@gmail.com"
global.location="Abuja,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria;
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "" 


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

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_42_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgMjIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2F1S0lnSmFGOE1mSGJZVkZrQ3lHZHE2WjBpeUROZUQ3WUJoMnd2MjVkOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY4MDAwOTM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNkFBNTNFMEVENzE2MTM5M0UwQTk2MUFCQkU4RjBBM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzMjA5NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFRHLVhYVDJURktOWGlLYi1KY0dGQVwiLFxuICBcInBob25lSWRcIjogXCI1NmIwMjE3Zi0wNjUzLTQ0ZTAtYTE3NS1iNzQ2OWMyY2I0OWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMjMxLFxuICAgICAgMzAsXG4gICAgICAxMDksXG4gICAgICAxODEsXG4gICAgICA5NCxcbiAgICAgIDE1MCxcbiAgICAgIDExNCxcbiAgICAgIDIxOCxcbiAgICAgIDI1NCxcbiAgICAgIDIxMSxcbiAgICAgIDIyOCxcbiAgICAgIDE1NyxcbiAgICAgIDU1LFxuICAgICAgMTEyLFxuICAgICAgMjU1LFxuICAgICAgMTA2LFxuICAgICAgNzIsXG4gICAgICAxNjcsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDMzLFxuICAgICAgMTE2LFxuICAgICAgMjAwLFxuICAgICAgMjIzLFxuICAgICAgNzYsXG4gICAgICAyMSxcbiAgICAgIDEzNCxcbiAgICAgIDE4LFxuICAgICAgNzAsXG4gICAgICA1NyxcbiAgICAgIDk2LFxuICAgICAgMzYsXG4gICAgICAyNTUsXG4gICAgICAyMzUsXG4gICAgICA1NCxcbiAgICAgIDkzLFxuICAgICAgMTA5LFxuICAgICAgMTQzLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFBOTlNQSFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjgwMDA5Mzk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NjgzNTQ3ODgwNjc3NjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZTFoNnNCRUlHTTViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkY0SHIwNEhWOGRkUzg1Y2YzdFlZaFJkQzRJbnlRTnZQZ0RaV013ZGh3M0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUTNOQ2VYU2IxVzlhQjhwQ1RhTUtUZXNzbGwvaHp4dmVmTVgwMVdrUXdSS3Z0OFo4dnhqWEU2bUtEdkZYUUsxRHhiU09Hb3VvYjdObnBxcWxJUHdwQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYjI3cThKN2FGaWNIOE1zNmJFS3ZtWFdUa1AyNkwvRC9kTUhsWEthU3cyUzRxc0o4dzY4M2hieS9ldEkwcnE2M1BCT3Bwbm1GVm52dnI4clRSQXVaQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODAwMDkzOToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzIwOTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUR1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFRHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJveEE2OURaMlVMT3pSOGdjR2pCdDdPRE1UVFBVYzhsZFVEdmFIUnRXeWh3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1ODczNDUwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "alex",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
