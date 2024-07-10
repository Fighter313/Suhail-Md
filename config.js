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


global.devs = "923308363433" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923308363433";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923308363433";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923308363433,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_21_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTczLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlN0MFhuK0dKcmVvWFpHcmZaMlJrRGFKdlZoV0NZaldaWUVoVUVQM2tBN2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzA4MzYzNDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MDI2NTQ4NUM5RjM5QTBGNTcwNEVCOTEwRDU0NkY3NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1OTk2NTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMDgzNjM0MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU3NDY3ODdGODA3MDA1QkI2NTYwNkZGQUI5RTAwRDE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU5OTY1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMwODM2MzQzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTNGQUVGRjFBNjdBQzNFNjkxN0UwM0NGNEMxOThFRTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTk5NjU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzA4MzYzNDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NkE5OUJFMkUzOTNGRUY0NzkxNkExOTEyNUIyMjZDMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1OTk2NTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV1dzOGc4SldSczJrbHFXM25oQk9XUVwiLFxuICBcInBob25lSWRcIjogXCIzNjU1M2FhMi0wZDU0LTRmOTItYjVmMy1mZTI5OWU3NmVlNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxMSxcbiAgICAgIDE5OCxcbiAgICAgIDEwMSxcbiAgICAgIDkwLFxuICAgICAgMjEzLFxuICAgICAgNjEsXG4gICAgICAxMzYsXG4gICAgICAxNzIsXG4gICAgICA3NSxcbiAgICAgIDIwOCxcbiAgICAgIDEwNyxcbiAgICAgIDI1MixcbiAgICAgIDI0NixcbiAgICAgIDE2NyxcbiAgICAgIDksXG4gICAgICAxODQsXG4gICAgICA2OSxcbiAgICAgIDYzLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDkyLFxuICAgICAgMjcsXG4gICAgICA0MSxcbiAgICAgIDE2OSxcbiAgICAgIDEzMCxcbiAgICAgIDEwOCxcbiAgICAgIDE3NixcbiAgICAgIDE5NyxcbiAgICAgIDgzLFxuICAgICAgMjAwLFxuICAgICAgNDcsXG4gICAgICA3MixcbiAgICAgIDE1MyxcbiAgICAgIDI1NSxcbiAgICAgIDgzLFxuICAgICAgMTY3LFxuICAgICAgMTQsXG4gICAgICAyMDYsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjJXWTRXRVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwODM2MzQzMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTE1MDAxNzY2MTc1OTY6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGaWdodGVyMzEzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3lLdXRNQ0VPV0l1YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwUTZWQ1pqZklIMytxcytKVU94ZkFBdzd0eDNvK25JQ05VZXp5dVVCUnpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVxeW1XVm9PN0NHZko1ZE10ZEMzQTRqVWEyTzFxcVZBcTBEejJCNnZhVG1XS2svUzROTGlQa0x5dEpja1dkMHhwQTB5K3p4d1NmakpGZXAxdWxOdkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjR0NUJiT3JGT1E1bUhlMUs1STBhM0QxWGJ2c3pTbjNJaHhqMW1qZk5xOUMzcml5a05tSm5TVHE2dVJJNWZYK2pGTnFLK3lXQ0lsL0NPTHlCL2p5cWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwODM2MzQzMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1OTk2NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBNStcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE1Ky5qc29uIjogIntcImtleURhdGFcIjpcIlNqbDh5UEluK1ZKaXc2RGxoM0ZWVXlqbGhHOEpaN0V3aFZMNnZoTFZmSVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExODg2MTI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1OTk2NTgxMjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Israr umari-md",
  ownername:process.env.OWNER_NAME|| "It's Israr umari",


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
