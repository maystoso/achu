const Discord = require("discord.js");



module.exports =  {
  name: "role",
  description: "adds role to user",
  /**
   * @param {Discord.Message} message The message
   * @param {string} args The message sent by the user split into an array
  */
  execute: async (message, args) => {
    const [_, roleName, roleColor] = args;

    if (!roleName) return message.reply("ur mom");

    if (!roleColor) return message.reply("please specify a color!");

    if(args.length > 3) {
      roleColor = args.pop();
      args = args.shift();
      roleName = args.join(" ");
    }

    const existingRole = message.guild.roles.cache.find(role => role.name === roleName)

    if (existingRole)
      return message.reply("sorry! A role with this name already exists.");

    const newRole = await message.guild.roles.create({
      data: {
        name: roleName,
        color: roleColor || "#FFFFFF",
      },
    });

    const member = message.guild.members.cache.get(message.author.id)

    await member.roles.add(newRole);

    message.reply("the role was successfully added!")
  }
}
