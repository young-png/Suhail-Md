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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_21_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3RnEzL1RkNm5PQ1JVKzVZczhEakd4UmgxSkdLOG9FT1paYS9VNVNYeDNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjgwMDA5MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI3MDlDQjJBMDRBRjBEODIzNTk3NDVBMENCOEVBNEM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk4NjQ5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzSFd5TFVvLVRzbWpLaTBmR2gyR0l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhN2U4YzgwLTU1ZGItNDEwNi05Y2U5LTNhN2I1ZjU2MzQ3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDIxLFxuICAgICAgMjAxLFxuICAgICAgNjMsXG4gICAgICAzOSxcbiAgICAgIDI0MCxcbiAgICAgIDE4MSxcbiAgICAgIDM4LFxuICAgICAgNCxcbiAgICAgIDE2NCxcbiAgICAgIDEsXG4gICAgICAzMixcbiAgICAgIDIzNCxcbiAgICAgIDI1NSxcbiAgICAgIDE0NCxcbiAgICAgIDE2MyxcbiAgICAgIDE4NixcbiAgICAgIDI0MSxcbiAgICAgIDIxOCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMTcsXG4gICAgICA1LFxuICAgICAgMjM5LFxuICAgICAgMzcsXG4gICAgICAyOCxcbiAgICAgIDE2NCxcbiAgICAgIDEyMixcbiAgICAgIDE0LFxuICAgICAgODUsXG4gICAgICA2NyxcbiAgICAgIDE5NyxcbiAgICAgIDM5LFxuICAgICAgMjEsXG4gICAgICAzNixcbiAgICAgIDIyMyxcbiAgICAgIDE5MyxcbiAgICAgIDY5LFxuICAgICAgMTc2LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUU1BNUVWWEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjgwMDA5Mzk6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NjgzNTQ3ODgwNjc3NjoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUzFoNnNCRVBUZnlyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkY0SHIwNEhWOGRkUzg1Y2YzdFlZaFJkQzRJbnlRTnZQZ0RaV013ZGh3M0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUo4ZmV4Rlc2cmpnb1IyOEZndHViR1kxKzBVRXAreVpLajZ5V3FhR0ZrWGxuNmowbE80WTdKVjFVSDAxU3NwQmx6aVd3b05ZOUhWNmVCelNYcWJSRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWxuWlZtSlVKTWYydlhYVFlGUGl5UW9NK3JxU0tIUDY3cWJUTDFaQk81KzNBVHRIcTIwUUoxQ2tjVjhhZkRrWWFUMnhNTUtBaHd1WUhJNlRQb1dGQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODAwMDkzOToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTg2NDg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQW5YXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBblguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmY0hDT0pINVN5eWg0ZFJScU5kcFpUdGd4SHRubGtESTAzQXliTjJJVWpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1ODczNDUxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
