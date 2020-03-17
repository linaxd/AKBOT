module.exports = {
    name: 'soap-adi',
    arg: true,
    embed: true,
    client: true,
    execute(message, args, client, embed) {
        const user = GetUserFromMention('548276406380003339', client);
        str = `**${args[0]}**\n`;
        
        i = 1;
        first = true;
        while (i < args.length) {
            if (first)
                first = false;
            else
                str += ' ';
            
            str += args[i];
            ++i;
        }

        const embObj = {
            color: '#00ff22',
            description: `${str}`,
        };

        message.channel.send({ embed: embObj });
    },
};