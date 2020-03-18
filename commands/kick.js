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
        const reason = joinTogetherWords(args, 1, args.length - 1);
        const user = getUserFromMention(args[0], client);
        if (user) {
            
        } else {
           return message.reply('give a proper mention or id of the user');
        }
    },
};