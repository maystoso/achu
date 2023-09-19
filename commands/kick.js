module.exports = {
    name: "kick",
    description: "kick a user",
    execute(message, args){
        if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("KICK_MEMBERS")){
            const target = message.mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.kick();
                message.channel.send("hehe user went bye bye");
            }
        }
    }
}