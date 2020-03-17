module.exports = {
    arg: false,
    name: 'ping',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('pong.');
    },
};