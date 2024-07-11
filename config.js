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
global.caption = process.env.CAPTION || global.caption || "Powerd by israr umari  md israr umari²²¹-md" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_24_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUmZWNy9JNUU2QStnNjFMckhrTXVSOFc4VVZ4aHQwelRPb2EvcE5vQmVvTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMDgzNjM0MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUxQzA0OEZBMzFDRDBBQUUwREIzRjkxODREMjREOEI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDY4OTg2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMwODM2MzQzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzA3QzlBOERGOTJEMUZFNzdCNUU1MTRGNDY0NUVFNzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjg5ODY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzA4MzYzNDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBOUI3MzA2NDlFNjNEREVFNzQ0Q0Q1NDI1Q0YxNTAwNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2ODk4NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0N0dkt6ZzhTWGUxanp0NVBqajB1QVwiLFxuICBcInBob25lSWRcIjogXCIyMDg0NDMzOC1kNDExLTQ4MmMtOWNlZi05MmZjNmUxMDc1OTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA3MixcbiAgICAgIDE5NyxcbiAgICAgIDEzMyxcbiAgICAgIDE0NixcbiAgICAgIDI0NSxcbiAgICAgIDU3LFxuICAgICAgMTgsXG4gICAgICA5OCxcbiAgICAgIDIxOSxcbiAgICAgIDIwMixcbiAgICAgIDY4LFxuICAgICAgMjAwLFxuICAgICAgMTg1LFxuICAgICAgMjEzLFxuICAgICAgMTk1LFxuICAgICAgMjQ1LFxuICAgICAgMTk1LFxuICAgICAgNDAsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICA4MCxcbiAgICAgIDIyMyxcbiAgICAgIDEyLFxuICAgICAgMzUsXG4gICAgICAxMDIsXG4gICAgICAyMTUsXG4gICAgICAxMzUsXG4gICAgICAzLFxuICAgICAgOTgsXG4gICAgICAxNTAsXG4gICAgICAxMTYsXG4gICAgICAxMjgsXG4gICAgICAyMzQsXG4gICAgICAxMDgsXG4gICAgICAxNDgsXG4gICAgICAxNixcbiAgICAgIDI0MSxcbiAgICAgIDQ4LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1aODkyWVFWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMDgzNjM0MzM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxNTAwMTc2NjE3NTk2OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmlnaHRlcjMxM1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s2S3V0TUNFTUxKdnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicFE2VkNaamZJSDMrcXMrSlVPeGZBQXc3dHgzbytuSUNOVWV6eXVVQlJ6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2VWVTdng3b2lkNjB1MFJ0QVlndUt2L0RUMms1MndwSHVDemJ4OEEwWVVDWE10V0J5YkFmM05hSW9Ka2FObmpXYjVTdjBxNDgvR2NEdDh3S2FsWkxBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwNHU2bE01TGJwQ2JjWnJOemNxb3BKR1o4c1RQdzMwa1RGRUYwZ1Ntd01XaHhpTzY1enF5bDE1VjF2WEFXS1Z4RVFoOW1qb0ZaeHRBU0YrMzVhbzlCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMDgzNjM0MzM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjg5ODYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTZDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBNkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4Sm9iQzJkV3ZuWEpsVnhZSEd4b04vTG1tTDV5dHRBaEc4Z3hDdjVQVmFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMTg4NjEyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjg5ODY0NjY2XCJ9Igp9"  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "ISRAR UMARI"  ).toUpperCase(),



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
