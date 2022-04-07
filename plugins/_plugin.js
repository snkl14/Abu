/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const Heroku = require('heroku-client');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const Db = require('./sql/plugin');

const Language = require('../language');
const Lang = Language.getString('_plugin');
const NLang = Language.getString('updater');

let msg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Olarak Onaylanmıştır!* ✅' : '*This Plugin is Officially Approved!* ✅'
let unmsg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Değildir!* ❌' : '*This Plugin isn\'t Officially Approved!* ❌'

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
var LANG = {
            unaffinfo: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Yüklenen Pluginin Tehlike Derecesi:* _%' : '*Danger Level of Installed Plugin:* _%',
            harmful: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Zararlı Olduğundan Yüklenemez!*' : '*This Plugin Cannot Be Installed As It Is Harmful!*',
            duplicate: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Aynı Plugini 2 Defa Yüklemeyezsiniz!*' : '*You Cannot Install the Same Plugin 2 Times!*',
            limit: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Güvenlik Sınırını Aşıyor!*\n*Zararlılık Yüzdesi:* _%' : '*This Plugin Exceeds Security Limit!*\n*Percentage of Harm:* _%',
            imside: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Varolan Pluginleri Tekrar Yükleyemezsin!*' : '*You Cant Reinstall Existing Plugins!*'
};
Asena.addCommand({pattern: 'plugin ?(.*)', fromMe: true, desc: Lang.INSTALL_DESC, warn: Lang.WARN, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_URL, MessageType.text);
    try {
        var url = new URL(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid, Lang.INVALID_URL, MessageType.text);
    }
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }
    var response = await got(url);
    if (response.statusCode == 200) {
        var plugin_name = response.body.match(/addCommand\({.*pattern: ["'](.*)["'].*}/);
        if (plugin_name.length >= 1) {
            plugin_name = "__" + plugin_name[1];
        } else {
            plugin_name = "__" + Math.random().toString(36).substring(8);
        }

        fs.writeFileSync('./plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('/root/WhatsAsenaDuplicated/plugins/' + plugin_name + '.js')
            return await message.client.sendMessage(message.jid, Lang.INVALID_PLUGIN + ' ```' + e + '```', MessageType.text);
        }
//recoded by shefin
        await Db.installPlugin(url, plugin_name);
        await message.client.sendMessage(message.jid, Lang.INSTALLED);
    }
}));

Asena.addCommand({pattern: 'plugin list$', fromMe: true, dontAddCommandList: true, desc: Lang.PLUGIN_DESC}, (async (message, match) => {
    var mesaj = Lang.INSTALLED_FROM_REMOTE;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return await message.sendMessage(Lang.NO_PLUGIN);
    } else {
        plugins.map(
            (plugin) => {
                let vf = plugin.dataValues.url.includes('shefinkl14') ? msg : unmsg
                mesaj += '```' + plugin.dataValues.name + '```: ' + plugin.dataValues.url + '\n' + vf + '\n\n';
            }
        );
        return await message.client.sendMessage(message.jid, mesaj, MessageType.text);
    }
}));

Asena.addCommand({pattern: 'remove(?: |$)(.*)', fromMe: true, dontAddCommandList: true, desc: Lang.REMOVE_DESC}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_PLUGIN, MessageType.text);
    if (!match[1].startsWith('__')) match[1] = '__' + match[1];
    try {
        var plugin = await Db.PluginDB.findAll({ where: {name: match[1]} });
        if (plugin.length < 1) {
            return await message.sendMessage(message.jid, Lang.NOT_FOUND_PLUGIN, MessageType.text);
        } else {
            await plugin[0].destroy();
            delete require.cache[require.resolve('./' + match[1] + '.js')]
            fs.unlinkSync('./plugins/' + match[1] + '.js');
            await message.client.sendMessage(message.jid, Lang.DELETED, MessageType.text);
            await message.sendMessage(NLang.AFTER_UPDATE);
            console.log(baseURI);
            await heroku.delete(baseURI + '/dynos').catch(async (error) => {
                await message.sendMessage(error.message);
            });
        }
    } catch (errormsg) { return await message.sendMessage(message.jid, Lang.NOT_FOUND_PLUGIN, MessageType.text) }
}));
