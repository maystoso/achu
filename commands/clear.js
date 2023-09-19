module.exports = {
    name: "clear",
    description: "deletes a bulk of messages",
    execute(message, args){
        const value = parseInt(args[1])+1;

            if(!args[1]) return message.reply("please input a valid amount of numbers >:T");

            message.channel.bulkDelete(value);
            message.channel.send(`**deleted ${args[1]} messages**`).then(reply => {
                reply.delete({timeout: 5000})
            })
    }
}