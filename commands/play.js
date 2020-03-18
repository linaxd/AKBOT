const yt = require('ytdl-core-discord');

async function play(connection, url) {
    connection.playOpusStream(await yt(url))
}

module.exports = {
    name: 'play',
    usage: '<url>',
    arg: true,
    ytdl: true,
    execute(message, args, ytdl) {
        if (message.channel.type !== 'text') return;

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('please join a voice channel first');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl(`${args[0]}`, { filter: 'audioonly', quality: 'highestaudio' });
            const dispatcher = connection.play(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        }); 
    },
};