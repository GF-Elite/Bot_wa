

const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//Owner Setting
global.owner = ['081375182098'] //Owner Number
global.ownernomer = "081375182098" //Owner Number 02
global.ownername = "Zakk." //Owner NMe
global.ytname = "YouTube: https://www.youtube.com/@_gfelite" //YouTube Owner
global.socialm = "GitHub: https://github.com/GF-Elite" //Github Owner
global.location = "🇮🇩 Indonesia" //Country

//Bot Setting
global.botname = "WhatsApp Bot"
global.ownernumber = '081375182098'
global.ownername = 'Zakk.'
global.ownerNumber = ["6283890422366@s.whatsapp.net"]
global.ownerweb = "https://gf-elite.my.id"
global.websitex = "https://instagram.com/_gfelite"
global.wagc = "https://chat.whatsapp.com/GMcv3SpmwOz9S6aQzYmUD1"
global.themeemoji = '🚩'
global.wm = "Follow Instagram : @_gfelite"
global.botscript = 'https://www.youtube.com/@gfelite' //script link
global.packname = "Sticker By"
global.author = " Bot WhatsApp"
global.creator = "6281375182098@s.whatsapp.net"
global.prefa = ['','!','.','#','&','`']
global.hituet = 0
global.apikeyai = '' //Apikey OpenAi Kalian

//media target
global.thum = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./media/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./media/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})