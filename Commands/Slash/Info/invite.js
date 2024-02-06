const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'invite',
	description: "Invite HP Uptimer",
  usage: "",
  category: "",
	userPerms: [''],
	botPerms: [''],
	cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID || client.config.CLIENT.ID}&permissions=8&scope=bot%20applications.commands`;
		const embed = new EmbedBuilder()
		.setTitle('Invite me')
		.setDescription(`Invite HP Uptimer To Your Server. [Click Here](${inviteUrl})`)
		.setColor('#03fcdb')
		.setTimestamp()
    .setImage(`https://media.discordapp.net/attachments/1150034335022469150/1161610125488959549/Uptime_1200_363_px.png?ex=6538ecbb&is=652677bb&hm=3917f6e33487317ca945433370c0183dd031aa94532b6a343e08f677f20e619f&`)
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter({ text: client.user.tag })

		const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Invite')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
   interaction.reply({ embeds: [embed], components: [actionRow] })
    } catch (error){
      client.slash_err(client, interaction, error);
    }
	}
};
