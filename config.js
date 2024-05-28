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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923121948971";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_08_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImozVWJDUUcyeHZQNEltKzM4dW8waEFXRG1oUXhxcjRLdjFxbjNVL1k2TDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjdZcTJPc05TSGVNa28xdGJoclRRd1wiLFxuICBcInBob25lSWRcIjogXCI0Y2MzYmU2ZC1lYjA2LTRmZmUtYTc5Ni01ODU4OTM2YTQ1ZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTA4LFxuICAgICAgOCxcbiAgICAgIDEzMixcbiAgICAgIDM1LFxuICAgICAgMTc3LFxuICAgICAgMTcwLFxuICAgICAgNDEsXG4gICAgICAzMCxcbiAgICAgIDYzLFxuICAgICAgMjUxLFxuICAgICAgNDQsXG4gICAgICA5NCxcbiAgICAgIDE4MyxcbiAgICAgIDY5LFxuICAgICAgMTU5LFxuICAgICAgNTIsXG4gICAgICAyMjQsXG4gICAgICAyMjcsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDYsXG4gICAgICAzNixcbiAgICAgIDI0OSxcbiAgICAgIDIyNCxcbiAgICAgIDIzLFxuICAgICAgMTg0LFxuICAgICAgMixcbiAgICAgIDE5MSxcbiAgICAgIDExOSxcbiAgICAgIDE4MSxcbiAgICAgIDEsXG4gICAgICAzOSxcbiAgICAgIDE4NyxcbiAgICAgIDIwNCxcbiAgICAgIDUwLFxuICAgICAgMTYzLFxuICAgICAgNDQsXG4gICAgICAxMTcsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkRORU05SEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEyMTk0ODk3MToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIiE9J1xcXCJcXFwiXFxcIlxcXCJcXFwiVW5rbm93biBwZXJzb25cXFwiXFxcIlxcXCJcXFwiXFxcIlxcXCInPSFcIixcbiAgICBcImxpZFwiOiBcIjY5NzU5Mjk1MDM3NTMyOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01EWTdPd0NFT1c5MXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieWZLbW1VUTBiQlZ0VzgxV2dGNFJiZnBPMmlDWWVhNk05a1NVQUVQbHducz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPZndYVytyYklBTy9UK3NzMTJMZ3orZWpzWXYrZG51bTViOC9xZkhVL3hndGNpLzF3aVNNcXRJZHc1QUY3blAzRE90bTdRb1NkN3NpUDJRTGg2WVZCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyN0ZENGhkNkREQ1QxRmhXc3lCT3FybUVDeW1rdVVSUnN3TDZkbkwySDZwemFmQWR1MDhLWHlNc2dUY0dmUWV4WHh4VmQ5SCtBN1orTFhVMkhWTzJnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMjE5NDg5NzE6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjg4NzI3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx1UFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHVQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSjBvZEpWdmdBQ2NjWjVxNEZHaGpmWURDM29VTGJnejA0VWp0SWdqVHF1WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NjUxNDQxMjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY4ODcxODI5MTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
