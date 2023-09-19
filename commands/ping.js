module.exports = {
	name: "ping",
	description: "says your message latency",
	execute(message, args){
		var timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`this message had a latency of ${timeTaken}ms... how slow!`);
	},
};