require('./functions.js')();

module.exports = {
    name: 'mute',
    usage: '<user>',
    client: true,
    embed: true,
    description: 'mute anyone if allowed as per by the roles',
    execute(message, args, client,embed) {
        if (!args.length) {
            embOb = {
                color: '#00ff00',
                description: '**Lol who is getting muted, better be quite or face the consequences\nFormat : `-mute <username>`**',
            };
            return message.channel.send({embed: embOb});
        }

        const user = GetUserFromMention(args[0], client);

        if (!user) {
            return message.reply('send a proper mention');
        }

        if (user.bot) {
            return message.reply('U cannot mute me lmao >:)');
        }

        const reason = message.content.slice(this.name.length + 1 + user.username.length + 1);
        embOb = {
            color: '#00ff00',
            description: `Muted ${user.username} for ${reason}`,
        };
        message.channel.send({embed: embOb});
    },
};