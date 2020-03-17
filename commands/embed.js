module.exports = {
    name: 'embed',
    embed: true,
    execute(message, args, embed) {
        message.channel.send(embed);
    },
}