const asena = require('../events'); 

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends good morning message"

const GN = "it sends good night message"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'gm', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "โ๐Goodโ โmorningโ๐ฅฐโ";

    r_text[2] ="โ๏ธ๐บ๐๐๐ ๐๐๐๐๐๐๐๐ ๐";

    r_text[3] ="๐๐ถ๐๐๐ ๐ป๐๐๐๐๐๐๐ ๐ฅฐ";

    r_text[4] ="๐๐๐ผ๐ผ๐ฑ ๐๐บ๐ผ๐ฟ๐ป๐ถ๐ป๐ด ๐ธ";

    r_text[5] ="๐ป๐๐ธ๐ธ๐ญ ๐ถ๐ธ๐ป๐ท๐ฒ๐ท๐ฐ ๐";

    r_text[6] ="๐ผ๐๐๐๐ ๐๐๐ก๐๐๐๐ ๐ถ";

    r_text[7] ="๐โผโโโ ๐โโโกโโโโ ๐ฅฐ";

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'gm', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "๐ซ๐ฎ๐ถ๐ถ๐ซ ๐ต๐ฐ๐ฎ๐ป๐ฏ ๐ฎ๐ผ๐๐โจ";

        r_text[2] ="๐ค๐๐ธ๐ธ๐ญ ๐งโโ๐ท๐ฒ๐ฐ๐ฑ๐ฝ โ๏ธโจ";

        r_text[3] ="๐โกแ แ แฑ ๐โฉษจโกฯฆฦฌ ๐";

        r_text[4] ="๐ึึึีช โญ๏ธีฒรญึีฐิต ๐";

        r_text[5] ="๐แแชแชแ ๐แแแแผแข ๐ซโจ";

        var i = Math.floor(6*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'gm', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "๐ซ๐ฎ๐ถ๐ถ๐ซ ๐ด๐ถ๐น๐ต๐ฐ๐ต๐ฎ ๐ฎ๐ผ๐๐ ๐ ๐ฌ๐ฝ๐จ๐ซ๐ฌ ๐ฌ๐ณ๐ณ๐จ๐น๐ผ๐ด โค๏ธ";

            r_text[2] ="โ๏ธ๐บ๐๐๐ ๐๐๐๐๐๐๐๐ ๐";

            r_text[3] ="๐๐ถ๐๐๐ ๐ป๐๐๐๐๐๐๐ ๐ฅฐ";

            r_text[4] ="๐๐๐ผ๐ผ๐ฑ ๐๐บ๐ผ๐ฟ๐ป๐ถ๐ป๐ด ๐ธ";

            r_text[5] ="๐ป๐๐ธ๐ธ๐ญ ๐ถ๐ธ๐ป๐ท๐ฒ๐ท๐ฐ ๐";

            r_text[6] ="๐ผ๐๐๐๐ ๐๐๐ก๐๐๐๐ ๐ถ";

            r_text[7] ="๐โผโโโ ๐โโโกโโโโ ๐ฅฐ";

            var i = Math.floor(8*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'gn', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "๐ซ๐ฎ๐ถ๐ถ๐ซ ๐ต๐ฐ๐ฎ๐ป๐ฏ ๐ฎ๐ผ๐๐โจ๐ฉ๐ ๐ฉ๐ โค๏ธ";

                r_text[2] ="๐ค๐๐ธ๐ธ๐ญ ๐งโโ๐ท๐ฒ๐ฐ๐ฑ๐ฝ โ๏ธโจ";

                r_text[3] ="๐โกแ แ แฑ ๐โฉษจโกฯฆฦฌ ๐";

                r_text[4] ="๐ึึึีช โญ๏ธีฒรญึีฐิต ๐";

                r_text[5] ="๐แแชแชแ ๐แแแแผแข ๐ซโจ";

                var i = Math.floor(6*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    

                asena.addCommand({pattern: 'gdmrng', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                    var r_text = new Array ();

                    r_text[1] = "โ๐Goodโ โmorningโ๐ฅฐโ";

                    r_text[2] ="โ๏ธ๐บ๐๐๐ ๐๐๐๐๐๐๐๐ ๐";

                    r_text[3] ="๐๐ถ๐๐๐ ๐ป๐๐๐๐๐๐๐ ๐ฅฐ";

                    r_text[4] ="๐๐๐ผ๐ผ๐ฑ ๐๐บ๐ผ๐ฟ๐ป๐ถ๐ป๐ด ๐ธ";

                    r_text[5] ="๐ป๐๐ธ๐ธ๐ญ ๐ถ๐ธ๐ป๐ท๐ฒ๐ท๐ฐ ๐";

                    r_text[6] ="๐ผ๐๐๐๐ ๐๐๐ก๐๐๐๐ ๐ถ";

                    r_text[7] ="๐โผโโโ ๐โโโกโโโโ ๐ฅฐ";

                    var i = Math.floor(8*Math.random())

                    await message.client.sendMessage(

                        message.jid,(r_text[i]), MessageType.text);

                    }));

                asena.addCommand({pattern: 'gdni8', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                        var r_text = new Array ();

                        r_text[1] = "๐๐๐ค๐ค๐ ๐๐ฃ๐๐๐๐ฉ ๐ซโจ";

                        r_text[2] ="๐ค๐๐ธ๐ธ๐ญ ๐งโโ๐ท๐ฒ๐ฐ๐ฑ๐ฝ โ๏ธโจ";

                        r_text[3] ="๐โกแ แ แฑ ๐โฉษจโกฯฆฦฌ ๐";

                        r_text[4] ="๐ึึึีช โญ๏ธีฒรญึีฐิต ๐";

                        r_text[5] ="๐แแชแชแ ๐แแแแผแข ๐ซโจ";

                        var i = Math.floor(6*Math.random())

                        await message.client.sendMessage(

                            message.jid,(r_text[i]), MessageType.text);

                        }));

}
