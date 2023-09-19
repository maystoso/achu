module.exports = {
    name: "poll",
    description: "simple poll creation for the user",
    execute(message, args) {
        if (!args[1]) return message.channel.send("send the poll with a question, dummy");
        let info = []
        for (let i = 1; i < args.length; i++) {
            info += (args[i] + " ");
        }
        message.channel.send(info).then(async res => {
            try {
                await res.react("751537851073822750") // YES
                await res.react("751537880069046273") // NO
            } catch (err) { console.log(err) }
        })
    }
}