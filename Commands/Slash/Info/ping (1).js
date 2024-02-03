const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
require('ms');
module.exports = {
  name: "stats",
  description: "UptimerX Stats",
  usage: "",
  category: "info",
  userPerms: [""],
  botPerms: [""],
  cooldown: 10,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    try {
      let days = Math.floor(client.uptime / 86400000)
      let hours = Math.floor(client.uptime / 3600000) % 24
      let minutes = Math.floor(client.uptime / 60000) % 60
      let seconds = Math.floor(client.uptime / 1000) % 60
      let webLatency = new Date() - interaction.createdAt
      let apiLatency = client.ws.ping
      let totalLatency = webLatency + apiLatency
      let emLatency = {
        Green: '🟢',
        Yellow: '🟡',
        Red: '🔴'
      }
      interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setImage(`https://media.discordapp.net/attachments/1150034335022469150/1161610112302063708/chart.png?ex=6538ecb8&is=652677b8&hm=80fac78ad1b40279fe58b9ecb5e2b800ec23a4e51662956f7b74a73e4401c7f3&`)
            .setColor(totalLatency < 200 ? client.embed.successcolor : totalLatency < 500 ? client.embed.stanbycolor : client.embed.wrongcolor)
            .setTitle(`Returns Latency And API Ping`)
            .setFields([
              {
                name: `📡 Websocket Latency`,
                value: `>>> \`\`\`yml\n${webLatency <= 200 ? emLatency.Green : webLatency <= 400 ? emLatency.Yellow : emLatency.Red} ${webLatency}ms\`\`\``,
                inline: true
              },
              {
                name: `🛰 API Latency`,
                value: `>>> \`\`\`yml\n${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red} ${apiLatency}ms\`\`\``,
                inline: true
              },
              {
                name: `⏲ Uptime`,
                value: `>>> \`\`\`m\n${days} Days : ${hours} Hrs : ${minutes} Mins : ${seconds} Secs\`\`\``,
                inline: false
              }
            ])]
      })
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};