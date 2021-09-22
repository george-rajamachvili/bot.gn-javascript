// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const { token } = require('./config.json');

// Music queue
const songQueue = new Map();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Create a new commands Collection object
client.commands = new Collection();

// Populates the Commands Collection with the commands (.js) from the commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// Once the client is ready, print 'Ready!' to the console
client.once('ready', () => {
	console.log('Ready!');
});

// Async command listening and execution
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		// Execute the command
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(token);