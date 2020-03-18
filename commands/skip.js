module.exports = {
    name: 'skip',
    ytdl: 'true',
    aliases: ['s'],
    execute(message, args, ytdl) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return;

        voiceChannel.leave();
        return message.channel.send('**Skipped Music**');
    }
};