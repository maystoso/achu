module.exports = {
    name: "ban",
    description: "bans user",
    execute(message, args){
        if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("BAN_MEMBERS")){
            const target = message.mentions.users.first();
            if (target){
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.ban();
                message.channel.send(`:o ${target} is now banned!`);
            } else { 
                return message.channel.send("specify the user, silly");
            }
        } else {
            return message.channel.send("permission not granted </3");
        }
    }
}