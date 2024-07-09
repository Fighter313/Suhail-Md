const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="patthan381@gmail.com"
global.location="Gulistan,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923048179419";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923048179418,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_06_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgNzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRYY3JoZEpBVENCTVV2b3IrcXBUNzNXSGdBWXA2Rklacll6SVBiTWg5ajQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDQ4MTc5NDE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOTIwMDY2RUNFMTM1NkIxRTc5MDdEMEFCQTYzQjNGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MjMxNThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicC1FSUl4MC1RVTZmZ3Y2SUplVzlOUVwiLFxuICBcInBob25lSWRcIjogXCI1ZWViMjQ3Yi1mOTJlLTQwMGEtYTMyZi1jN2I2ODVkMWQ3MTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAxMjksXG4gICAgICAxMjMsXG4gICAgICAzLFxuICAgICAgMjA4LFxuICAgICAgMTc3LFxuICAgICAgMjM4LFxuICAgICAgNDcsXG4gICAgICA1OCxcbiAgICAgIDEzMCxcbiAgICAgIDM0LFxuICAgICAgNzgsXG4gICAgICAyMTMsXG4gICAgICAzMyxcbiAgICAgIDExMyxcbiAgICAgIDE5MyxcbiAgICAgIDE2NyxcbiAgICAgIDI0LFxuICAgICAgMTY2LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMTE3LFxuICAgICAgMjcsXG4gICAgICAyMjcsXG4gICAgICAyMDIsXG4gICAgICA1MixcbiAgICAgIDE2NixcbiAgICAgIDUwLFxuICAgICAgMjAxLFxuICAgICAgMTE0LFxuICAgICAgMjIwLFxuICAgICAgMTI1LFxuICAgICAgMjQ5LFxuICAgICAgMTcyLFxuICAgICAgMjAwLFxuICAgICAgOTAsXG4gICAgICA2MixcbiAgICAgIDE3MixcbiAgICAgIDE3OCxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjgzUURRNlZHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDgxNzk0MTg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzE2MTY0NDYyNTk5OToxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJU1JBUiBVTUFSSVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEb3JXRVFqYk8wdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMWxUZEVYdW8rY1p2bVJlNWFUemUwL2dFNVg0bVlKc3VnOEhUNlZGMDgwQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3Z0hBcncyTHNuKzRQTmc0cEFMVEF4MmRUL1JxNVpWaTF4MEpIQnptOU02Y2drLzNWL25EVHBYMFhKRjNRUzJOdHpRcXYxMFFPZGxxdlo2aWQ5anFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsV01iVDhPeW8vNVhMbFEzc0lmb0hLZmhUOFUySGp4NXpnRTJQS3lndWFJTEJNSEt3aWtOYkNDalBtQURGa3FnT1RkQVRndXpxQkdwcDYrUG1jQjRDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDgxNzk0MTg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTIzMTUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUI5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNQjkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvT09uclRMK3l1Yi9EeUJwTE93NVkyRlZCanFGam5odlo1dnZKTU9zM25rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDE3NDM2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTIzMTU1Mjk5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Israr umari",


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
