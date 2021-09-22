const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays music when provided with an appropriate link!')
		.addStringOption(option => option.setName('link').setDescription('Link for what you want to play')),
	async execute(interaction) {
		await interaction.reply(interaction.options.getString('link'));
	},
};
