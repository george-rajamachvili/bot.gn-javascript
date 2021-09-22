const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with user\'s input!')
		.addStringOption(option => option.setName('input').setDescription('Enter something to echo!')),
	async execute(interaction) {
		await interaction.reply(interaction.options.getString('input'));
	},
};
