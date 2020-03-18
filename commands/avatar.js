require('./functions.js')();

module.exports = {
    usage: '(optional)<user>',
    name: 'avatar',
    client: true,
    embed: true,
    aliases: ['icon', 'pfp'],
    description: 'get avatar or avater URL',
    usage: '<user>',
    execute(message, args, client, embed) {
        if (!message.mentions.users.size) {
            const embedObj = {
                title: `**${message.author.user.tag}**`,
                image: {
                    url: `${message.author.user.displayAvatarURL({dynamic: true, format: 'png', size: 2048})}`,
                },
            }

            return message.channel.send({embed: embedObj});
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