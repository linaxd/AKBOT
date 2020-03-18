require('./functions.js')();
const MessageEmbed = require('discord.js');

function getRole(user) {
    var role = 'normal boy';
    if (user.roles === '@BEST FRIEND!!!!!!') {
        role = 'BEST FRIEND!!!!!!';
    }

    return role;

}

module.exports = {
    name: 'info',
    aliases: ['whois', 'about'],
    client: true,
    embed: true,
    arg: true,
    attachment: true,
    usage: '<user / server>',
    description: 'get info of anything',
    execute(message, args, client, embed, attach) {

        if (args[0] === 'server') {
            return message.channel.send(`Server name is ${message.guild.name}\nTotal number of memebers : ${message.guild.memberCount}`);

        }
        else if (args[0]) {
            const user = GetUserFromMention(args[0], client);
            if (!user) {
                return message.reply(`Please use a proper mentiom`);
            }

            return_string = `**${user.username}**\n`;
            return_string += `**${user.tag}**`;
            return_string += `\nUser ID: **${user.id}**`;
            return_string += `\nCreated on: **${user.createdAt}**`;
            //return_string += `\n Avatar URL: <${user.displayAvatarURL({format: 'png', dynamic: true})}>`;

            const embedObj = {
                color: '#00ff00',
                description: `${return_string}`,
                file: `<${user.displayAvatarURL({ format: 'png', dynamic: true })}>`,
                image: `attachment://${user.displayAvatarURL({dynamic: true})}`,
            };

            message.channel.send({ embed: embedObj });

        }
    },
};
