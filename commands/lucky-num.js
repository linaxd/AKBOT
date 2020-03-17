function randomgen(min, max) {
    return Math.floor(Math.random() * (max - min) + min)

};

module.exports = {
    arg: false,
    name: 'lucky-num',
    description: 'gives a lucky number between 0 and 500',
    execute(message, args) {
        message.channel.send(`This your today's lucky number ${randomgen(0, 500)}`);

    },
};