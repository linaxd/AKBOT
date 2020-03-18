module.exports = {
    name: 'skip',
    ytdl: 'true',
    execute(message, args, ytdl) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return;

        voiceChannel.leave();
    }
};