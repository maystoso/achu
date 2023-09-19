module.exports = {
    name: "say",
    description: "achu says words",
    execute(message, args){
        if(!args[1]) return message.channel.send("write a message, silly");
            let info = []
            for(let i = 1; i < args.length; i++)
            {
                info += (args[i] + " ");
            }
            message.channel.send(info);
    }
}