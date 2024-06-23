const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_36_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnp2QWZ2aVd3OE5FMnZvRmppU1pMbWtEdTJMVWo4bk9XcnZNeFpFZ2FUYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY4MDAwOTM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENDYyQzdENEJEQTUyREE3NDdGRkI5NEQ5Njc3ODcyQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxNzg1OTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOU9NREtoa0dURUtNRXctTWFiZFFzUVwiLFxuICBcInBob25lSWRcIjogXCIxMWVkMGU5ZC1jOTNhLTQxNjgtYWI3YS01ZWZhZDYwOGU4NTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxOCxcbiAgICAgIDE3NixcbiAgICAgIDY0LFxuICAgICAgMTEsXG4gICAgICAzMCxcbiAgICAgIDIxLFxuICAgICAgNTAsXG4gICAgICAxMjksXG4gICAgICAyMzMsXG4gICAgICA1NSxcbiAgICAgIDgwLFxuICAgICAgMTEsXG4gICAgICAyMzcsXG4gICAgICAyMTUsXG4gICAgICAxOTIsXG4gICAgICAxMzIsXG4gICAgICAyMDgsXG4gICAgICAxMCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDEwNSxcbiAgICAgIDIxLFxuICAgICAgMTYzLFxuICAgICAgMTgwLFxuICAgICAgMTU3LFxuICAgICAgMjA0LFxuICAgICAgMTg5LFxuICAgICAgMjE3LFxuICAgICAgODksXG4gICAgICAxNDQsXG4gICAgICAxNjksXG4gICAgICAzMSxcbiAgICAgIDIwNixcbiAgICAgIDE4NCxcbiAgICAgIDIzMCxcbiAgICAgIDEyNCxcbiAgICAgIDE3MCxcbiAgICAgIDM5LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5FM0pMMVlGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4MDAwOTM5OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTY4MzU0Nzg4MDY3NzY6NjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW0xaDZzQkVOYXE0ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGNEhyMDRIVjhkZFM4NWNmM3RZWWhSZEM0SW55UU52UGdEWldNd2RodzNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVFaGYrdXhPaGo1eEJMNjBiOE1wWlRVbzdsT1RWVHVnS1hHTHJmS0x3SEpRSjZCYnBNeFd6L2lCTURMMys1Z1ZBNk9GTnFpamVIS24wN3ErK1BtWENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZVS0Y5RGQwaStINVNuRzlRZ25Jc0g1enVpbVIxKzB4Q01jSzdGMHRQT202THV0UGk5cWtoeERMdHRqQ2JSSW5ZMWRrSVlTOVVDeTAydmhkSjh4aWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjgwMDA5Mzk6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTE3ODU4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE1d1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTV3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidE5XL2ljVlppbXNtTGV6eW15Tmtjb3AwQy9xcnh6U1FvSFNyVTBlZk9YND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNTg3MzQ0NjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
