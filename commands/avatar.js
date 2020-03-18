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
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL(true)}>`);
        }
        user;
        if (!args.length) {
            user = GetUserFromMention(args[0], client);
        } else {
            user = message.author;
        }

        const embedObj = {
            title: `**${user.tag}**`,
            image: {
                url: `${user.displayAvatarURL({dynamic: true, format: 'png', size: 2048})}`,
            },
        }
        message.channel.send({ embed: embedObj });

    },
};