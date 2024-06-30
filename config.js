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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_22_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNixcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhWV2xBcm9oM1l0RitCN2RUd000VGF0aVhUaHhmVDhuSkw5a3RteFFYTnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFFZzdpcnJyUlJDaHF0Skk4RmJzTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2QzZWQ0YTAtNTM2Ni00OTVmLWE2ZjYtZjJjMWY5YjI4ZThkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDE2NyxcbiAgICAgIDIwOSxcbiAgICAgIDYxLFxuICAgICAgNzMsXG4gICAgICAxNzYsXG4gICAgICAxMDAsXG4gICAgICAxNDcsXG4gICAgICAxMTAsXG4gICAgICAxNjksXG4gICAgICAyMjcsXG4gICAgICAxOTcsXG4gICAgICAxNjMsXG4gICAgICAxMyxcbiAgICAgIDIsXG4gICAgICA4NSxcbiAgICAgIDMzLFxuICAgICAgMjQ2LFxuICAgICAgOTksXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAxNjksXG4gICAgICAxMjEsXG4gICAgICAxNzQsXG4gICAgICAxOTYsXG4gICAgICA4OCxcbiAgICAgIDE4MSxcbiAgICAgIDEyMyxcbiAgICAgIDE5OCxcbiAgICAgIDIxLFxuICAgICAgMTEzLFxuICAgICAgMTcwLFxuICAgICAgMTU4LFxuICAgICAgMjU1LFxuICAgICAgMTMsXG4gICAgICAyMzksXG4gICAgICA0NixcbiAgICAgIDEwNCxcbiAgICAgIDEzNSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCUUNSMlRFUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2ODAwMDkzOTo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU2ODM1NDc4ODA2Nzc2Ojc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHMWg2c0JFUGpnaHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRjRIcjA0SFY4ZGRTODVjZjN0WVloUmRDNElueVFOdlBnRFpXTXdkaHczRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCNWpxV3k1VUN3bzQ4dzBDT1o5TUo4VTlkc0UvNW5zckZtRUtRaDc3R1h6OVN3Q1dFMmRhV0lLeStPZ05PZ0lPZDQzelJ1Tk91ZEFWWFJ2eTgzaHBDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJySUxJUTJBUnNOTXJKUmh1Z3c5d09hK2xUV0p0RkpwUVQrZHdKTi9CcStCeEFKb2hLYTJkWFBNZDMzM2JUR2pJNjZ0cmpTd21mbUw5L1IzNU1MQ01oQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY4MDAwOTM5Ojc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NzUzNTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPK05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8rTi5qc29uIjogIntcImtleURhdGFcIjpcImM3QzRqOUc3ejNOYU5jYkFsTzVTamZPdTd3cmJ0WjRQU3I4aENBN29KZnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU4NzM0NDc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
