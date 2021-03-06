const Discord = require('discord.js');
const fs = require('fs');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const embed = new Discord.MessageEmbed();

const prefix = '-';

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.arg && !args.length) {
        let reply = `You din\'t provide any arguments, ${message.author}`;
        if (command.usage)
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;

        return message.channel.send(reply);
    }

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs');
    }

    try {
        if (command.client)
            command.execute(message, args, client);
        else if (command.embed)
            command.execute(message, args, embed);
        else if (command.embed && command.client)
            command.execute(message, args, client, embed);
        else if (command.ytdl)
            command.execute(message, args, ytdl, embed);
        else
            command.execute(message, args);

    } catch (err) {
        console.error(err);
        message.reply('there was an error trying to execute that command');

    }

});

client.once('ready', () => {
    console.log('Ready!');
    message.channel.send('Hello amigots');
    
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
 });

client.login(process.env.BOT_TOKEN);
