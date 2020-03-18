require('./functions.js')();

module.exports = {
    arg: true,
    usage: '<user>',
    name: 'avatar',
    client: true,
    embed: true,
    aliases: ['icon', 'pfp'],
    description: 'get avatar or avater URL',
    usage: '<user>',
    execute(message, args, client, embed) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL(true)}>`);
        }

        const user = GetUserFromMention(args[0], client);
        const embedObj = {
            title: `**${user.tag}**`,
            image: {
                url: `${user.displayAvatarURL({dynamic: true, format: 'png', size: 2048})}`,
            },
        }
        message.channel.send({ embed: embedObj });

    },
};