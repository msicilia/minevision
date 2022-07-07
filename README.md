# Integrating DL models with Mineflayer

## Setup

First you have to [setup your MC server and mineflayer](SETUP.md).

After finishing that part you will have a working bot in a MC server that just says hi and stays quiet.

## Taking screenshots and reacting to them

Now the tricky part. To do vision tasks, we need  [to capture what the bot sees](VISION.md) and then use a ML model yet trained. This requires setting up a server to do the inference in Python and integrate it with some `mineflayer` plugins that allow for taking screenshots. 

## More things to do...

There are many avenues to continue developing your bot with vision capabilities. You can start with making your bot move around randomly, or use `mineflayer` plugins that can be use to make your bot target objectives using classicasl (non ML) techniques. 

And now that you know how to integrate ML models into `mineflayer`, you could for example integrate a language model that detects bullying in the chat, many of these models can be found here like this one:
https://huggingface.co/JonatanGk/roberta-base-bne-finetuned-cyberbullying-spanish 