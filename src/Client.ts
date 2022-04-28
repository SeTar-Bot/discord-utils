import { Client as DjsClient, Message, TextChannel, TextChannelResolvable, User, UserResolvable } from "discord.js";
import { AutoPublish } from "./methods";

export default class Client {

    constructor(readonly client: DjsClient){}

    public autoPublish(channel: TextChannelResolvable, authorId?: UserResolvable | UserResolvable[]): Client
    {
        this.client.prependListener('newListener', (e: string) => {
            if(e == 'messageCreate')
            {
                this.client.prependListener('messageCreate', async (message: Message) => {
                    if(channel instanceof TextChannel)
                    {
                        if(message.channel.id == channel.id)
                            if(authorId)
                            {
                                if(Array.isArray(authorId))
                                {
                                    if (authorId.includes(message.author) || authorId.includes(message.author.id))
                                        await AutoPublish(message);
                                }
                                else
                                    if(authorId instanceof User)
                                    {
                                        if (message.author.id == authorId.id)
                                            await AutoPublish(message);
                                    }
                                    else
                                    {
                                        if(message.author.id == authorId)
                                            await AutoPublish(message);
                                    }
                            }
                            else
                                await AutoPublish(message);
                    }
                    else if(channel == message.channel.id)
                        if(authorId)
                        {
                            if(authorId instanceof User)
                            {
                                if (message.author.id == authorId.id)
                                    await AutoPublish(message);
                            }
                            else
                            {
                                if(message.author.id == authorId)
                                    await AutoPublish(message);
                            }
                        }
                        else
                            await AutoPublish(message);
                })
            }
        })
        return this;
    }
}