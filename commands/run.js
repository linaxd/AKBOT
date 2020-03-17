module.exports = {
    name: 'run',
    usage: '<message>',
    arg: true,
    aliases: ['say', 'tell'],
    execute(message, args) {
        first_word = true;
        msg = '';
        i = 0;
        while (i < args.length) {
            if (first_word)
                first_word = false;
            else
                msg = msg + ' ';
            
            msg = msg + args[i];
            ++i;
        }

        message.channel.send(msg);
    },
}