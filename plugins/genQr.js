const {addCommand} = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

addCommand({pattern: 'gqr ?(.*)', fromMe: true, desc: "Text to qr." }, (async (m, match) => {

    if (match[1] === '') return await m.sendMessage("Enter a text \n\nExample .gqr hi");

    var sn = await axios.get(`https://early-pie-production.up.railway.app/genqr?text=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await m.sendMessage(Buffer.from(sn.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.ALL})
}));
}

if (Config.WORKTYPE == 'public') {

addCommand({pattern: 'gqr ?(.*)', fromMe: true, desc: "Text to qr." }, (async (m, match) => {

    if (match[1] === '') return await m.sendMessage("Enter a text \n\nExample .gqr hi");

    var sn = await axios.get(`https://early-pie-production.up.railway.app/genqr?text=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await m.sendMessage(Buffer.from(sn.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.ALL})
}));
}
