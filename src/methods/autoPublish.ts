import { Message } from "discord.js";

export default async function(msg: Message): Promise<ReturnType<Message["crosspost"]> | undefined> {
    if(!msg.crosspostable) return;

    return await msg.crosspost();
}