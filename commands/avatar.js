require('./functions.js')();

module.exports = {
    arg: true,
    usage: '<user>',
    name: 'avatar',
    client: true,
    aliases: ['icon', 'pfp'],
    description: 'get avatar or avater URL',
    execute(message, args, client) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL(true)}>`);
        }

        const user = GetUserFromMention(args[0], client);
        return message.channel.send(`${user.username}'s avatar is ${user.displayAvatarURL({ dynamic: true })}`);

    },
};