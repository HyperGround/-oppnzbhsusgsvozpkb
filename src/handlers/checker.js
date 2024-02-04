const set = require(`${process.cwd()}/Assets/Config/settings`)
module.exports = {
  async execute(ex) {
    if (!ex.config.TOKEN) {
      ex.logger("Enter The Bot Token".bold.red)
      process.exit(1)
    }
    if (!ex.config.MONGO_DB) {
      ex.logger("mongodb+srv://CodeXDev:CodeXDev007@codex-public-03.4fcjtag.mongodb.net/?retryWrites=true&w=majority".bold.red)
      process.exit(1)
    }
    if (!ex.config.CLIENT_ID) {
      ex.logger("Enter client id".bold.red)
      process.exit(1)
    }
    if (!set.SLASH_GLOBLE && !ex.config.SUPPORT_SERVER) {
      ex.logger("https://discord.gg/223Q8enyqx".bold.red)
      process.exit(1)
    }
  }
}