require('./functions.js')();

module.exports = {
    name: 'play',
    usage: '<url> <quality = highest/lowest>',
    aliases: ['p'],
    arg: true,
    ytdl: true,
    execute(message, args, ytdl, embed) {
        if (message.channel.type !== 'text') return;

        quality = 'lowestaudio';
        quality_arg = false;
        quality_given = 0;

        if (args.length > 1 && (args[args.length - 1].startsWith('highest') || args[args.length - 1].startsWith('lowest') )) {
            quality = `${args[args.length - 1]}audio`;
            quality_arg = true;
        }
        if (quality_arg)
            quality_given = 1;

        key_Word =  joinTogetherWords(args, 0, args.length - 1 - quality_given);
            
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('please join a voice channel first');
        }

        const embObj = {
            title: '**Music**',
            color: '#009911',
            description: `**Playing ${key_Word} 🎵🎵**`,
        };

        message.channel.send({ embed: embObj });

        voiceChannel.join().then(connection => {
            const stream = ytdl(`${args[0]}`, { filter: 'audioonly', quality: `${quality}` });
            const dispatcher = connection.play(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        }); 
    },
};