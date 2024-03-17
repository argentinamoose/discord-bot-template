const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping-button")
    .setDescription("Return a button!"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("ping-button")
      .setLabel(`Click`)
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
      ephemeral: true,
    });
  },
};
