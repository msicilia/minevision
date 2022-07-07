# Setting up a MC Server

## Download and start

You can download the official server from:
[https://www.minecraft.net/en-us/download/server](https://www.minecraft.net/en-us/download/server)

But older versions can be found elsewhere, e.g. 
[https://mcversions.net/](https://mcversions.net/)

You would need to have Java previously installed and use this command placing the JAR file inside a folder (it will decompress and create files).
```
java -Xmx1024M -Xms1024M -jar minecraft_server.1.18.jar nogui
```

Of course, change the name of the JAR file downloaded if you used another version. 

If you run into problems with the JDK version, check your Java with this command.
```
java --version
```
For example, MC version 1.18 requires Java 17.
[https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
More detailed instructions can be found at this link:
[https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server)

In the first run, it will say something like this.
```
...
Starting net.minecraft.server.Main
[17:04:54] [ServerMain/ERROR]: Failed to load properties from file: server.properties
[17:04:54] [ServerMain/WARN]: Failed to load eula.txt
[17:04:54] [ServerMain/INFO]: You need to agree to the EULA in order to run the server. Go to eula.txt for more info.
```
You only need to change a line in the `eula.txt` file, that will be:
```
#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula).
#Mon Jun 27 17:04:54 CEST 2022
eula=true
```

## Checking you can connect

The easiest way to use the server is from the same computer. 

You can use `localhost` or find out the IP of your computer (this depends on the OS you use). Default port is 25565.

Entering from other computers may require opening your firewall. 

In some cases, you can use in `Multiplayer` the option `Direct connection` and use `localhost`. 

## Essential admin tasks

### Removing restrictions to accounts

You need to allow players joining the server witouth having a Minecraft account (unless your bots will use a bought account).

You can do that by changing these two lines in the file `server.properties`

```
online-mode=false
white-list=false
```


### Making your player op

Since we are just testing, you would like to enter with your Minecraft account to the server as `op` so that you have access to all the commands. 

The easist way of doing that is including a file `ops.txt` in the folder of the server, with the usernames of the admins, one user per line. Restart the server, and then when you log in you can for example switch to creative with the command:
```
gamemode creative
```

### Preparing an area for your bot

Your bot will appear in the spawnpoint of the default world of the server. 

Here you can find a reference of commands [https://minecraft.fandom.com/wiki/Commands](https://minecraft.fandom.com/wiki/Commands). 


