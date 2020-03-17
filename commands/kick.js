require('./functions.js')();

module.exports = {
    name: 'kick',
    arg: true,
    usage: '<username>',
    description: 'kick a user from server',
    guildOnly: true,
    embed: true,
    client: true,
    execute(message, args, client) {
        const reason = message.content.slice(1 + this.name.length + user.id.length + 6);
        const user = getUserFromMention(args[0], client);
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick(`for ${reason}`)
                    .then(() => {
                        return `Kicked ${user.username} for ${reason}`;
                    })
                    .catch(err => {
                        message.reply('Unable to to kick the member');
                        console.error(err);
                    });
            } else {
                message.reply('The user isn\'t in this server');
            }
        }
    },
};