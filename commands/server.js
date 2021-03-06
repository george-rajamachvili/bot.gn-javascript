const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	async execute(interaction) {

		await interaction.reply('Server name: ' + interaction.guild.name + '\nNumber of Members Online: ' + interaction.guild.memberCount);
	},
};