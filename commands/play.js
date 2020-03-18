require('./functions.js')();

module.exports = {
    name: 'play',
    usage: '<url>',
    arg: true,
    ytdl: true,
    execute(message, args, ytdl, embed) {
        if (message.channel.type !== 'text') return;

        key_Word = joinTogetherWords(args, 0);

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
            const stream = ytdl(`${args[0]}`, { filter: 'audioonly', quality: 'highestaudio' });
            const dispatcher = connection.play(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        }); 
    },
};