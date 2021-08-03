const Discord = require('discord.js');
const open = require('open');
const fetch = require('node-fetch');
const Canvas = require('canvas');
const client = new Discord.Client();
const url = 'https://api.no-api-key.com/api/v2/captcha';

captchacode = '';
english = false;
needReact = true;
closedTicket = true;
firstEmbedId = 0;
needVerify = new Set();
trying = new Set();
inService = new Set();
ticketChennelId = 0;

function generateProtocol() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 6; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var date_ob = new Date();
    return text + date_ob.getDate() + date_ob.getMonth() + date_ob.getFullYear();
}

client.on('guildMemberRemove', member => {
    captchacode = '';
    needVerify.delete(member.id)
    inService.delete(member.id)
    trying.delete(member.id)
    english = false;
    needReact = true;
    firstEmbedId = 0;
});

client.on('guildMemberAdd', member => {
    embed = new Discord.MessageEmbed()
        .setTitle('Selecione sua Linguagem / Select your language')
        .addField('> Português', '> Reaja com: 🇧🇷', true)
        .addField('> English', '> React with: 🇺🇸\n⠀', true)
        .setFooter('⠀⠀Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com');
    member.send(embed).then(m => {
        firstEmbedId = m.id;
        needVerify.add(member.id)
        needReact = true
    })
    if (member.guild.channels.cache.get('829070903005413467').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829070903005413467').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829070607151923200').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829070607151923200').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('828677053523820575').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('828677053523820575').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('828673628203253840').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('828673628203253840').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('828667816185823242').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('828667816185823242').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('828829532126445588').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('828829532126445588').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829070502399443085').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829070502399443085').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829175255473324093').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829175255473324093').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829177669504860180').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829177669504860180').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829177692599222293').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829177692599222293').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829176467610402836').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829176467610402836').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829070519897686016').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829070519897686016').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    if (member.guild.channels.cache.get('829177226842603521').permissionsFor(member.id).has('VIEW_CHANNEL') == true) {
        member.guild.channels.cache.get('829177226842603521').overwritePermissions([{
            id: member.id,
            deny: 'VIEW_CHANNEL',
        }])
    }
    var interval = setInterval(() => {
        if (!needVerify.has(member.id)) {
            member.roles.add('827694827080122388');
            if (english == true) {
                member.roles.add('827996197725667350');
            } else {
                member.roles.add('827996082213879870');
            }
            clearInterval(interval);
            firstEmbedId = 0
            captchacode = ''
            trys = 3
        }
    }, 1000);
});

client.on('message', m => {
    let uncheck = client.guilds.cache.get('827581619581091860').emojis.cache.find(uncheck => uncheck.name === 'uncheck');
    let check = client.guilds.cache.get('827581619581091860').emojis.cache.find(check => check.name === 'check');
    let welcome = client.guilds.cache.get('827581619581091860').emojis.cache.find(welcome => welcome.name === 'welcome');
    let alert = client.guilds.cache.get('827581619581091860').emojis.cache.find(alert => alert.name === 'alert');
    let community = client.guilds.cache.get('827581619581091860').emojis.cache.find(community => community.name === 'comunidade');
    let pepe_yessir = client.guilds.cache.get('827581619581091860').emojis.cache.find(pepe_yessir => pepe_yessir.name === 'pepe_yessir');
    let rainbow_pushpin = client.guilds.cache.get('827581619581091860').emojis.cache.find(rainbow_pushpin => rainbow_pushpin.name === 'rainbow_pushpin');
    let ticket = client.guilds.cache.get('827581619581091860').emojis.cache.find(ticket => ticket.name === 'ticket');
    setInterval(() => {
        if (m.id == firstEmbedId) {
            if (needReact == true) {
                m.react('🇧🇷')
                m.react('🇺🇸')
                needReact = false
            }
        }
    }, 1000);
    if (needVerify.has(m.author.id)) {
        if (m.channel.type == 'dm') {
            if (m.content == captchacode) {
                needVerify.delete(m.author.id)
                if (english == true) {
                    m.channel.send(`${check}**┇Checked, welcome!**`);
                } else {
                    m.channel.send(`${check}**┇Verificado, bem-vindo(a)!**`);
                }
            } else {
                if (english == true) {
                    m.channel.send(`${uncheck}**┇The code you entered is invalid, please try again.**`);
                } else {
                    m.channel.send(`${uncheck}**┇O código que você inseriu é inválido, tente novamente.**`);
                }
            }
        }
    }
    //—
    if (m.author.bot) return;
    if (m.content == '.pepe') {
        m.channel.setTopic(`Comunicados importantes a respeito da Mercury Inc. ${pepe_yessir}`)
    }
    if (m.content == '.gen-ranking') {
        if (m.channel.id == "828368541174333510") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                embed = new Discord.MessageEmbed()
                    .setDescription('\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ **Ranking - List**\n\n' +
                        '⠀⠀⠀`01st ┇ Cliente #01 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`02st ┇ Cliente #02 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`03st ┇ Cliente #03 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`04st ┇ Cliente #04 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`05st ┇ Cliente #05 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`06st ┇ Cliente #06 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`07st ┇ Cliente #07 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`08st ┇ Cliente #08 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`09st ┇ Cliente #09 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`10st ┇ Cliente #10 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`11st ┇ Cliente #11 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`12st ┇ Cliente #12 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`13st ┇ Cliente #13 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`14st ┇ Cliente #14 ┇ 00/00/2021 00:00`\n' +
                        '⠀⠀⠀`15st ┇ Cliente #15 ┇ 00/00/2021 00:00`\n')
                    .setFooter('⠀⠀⠀⠀Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com');
                m.channel.send(embed)
            }
        }
    }
    if (m.content == '.change-perms-ptbr') {
        if (m.author.id == "432242181428871171") {
            m.delete()
            m.channel.send('Permissões modificadas!').then(newM => {
                setTimeout(() => {
                    newM.delete()
                }, 1000);
            })
            m.channel.overwritePermissions([{
                    id: '827996082213879870',
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                },
                {
                    id: '827996197725667350',
                    deny: 'VIEW_CHANNEL'
                }
            ])
        }
    }
    if (m.content == '.change-perms-enus') {
        if (m.author.id == "432242181428871171") {
            m.delete()
            m.channel.send('Permissões modificadas!').then(newM => {
                setTimeout(() => {
                    newM.delete()
                }, 1000);
            })
            m.channel.overwritePermissions([{
                    id: '827996197725667350',
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                },
                {
                    id: '827996082213879870',
                    deny: 'VIEW_CHANNEL'
                }
            ])
        }
    }
    if (m.content == '.gen-terms') {
        if (m.channel.id == "827581708810977341") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> \n' +
                    '**WELCOME / BEM-VINDOS(AS)**' +
                    `\n \nKoé, beleza? Bem-vindo(a) à Mercury! ${welcome} \n \n` +
                    'A harmonia cria raios de paz. - André Luiz\n \n' +
                    `${rainbow_pushpin} Como toda comunidade e empresa prestadora de serviços, nós da Mercury temos nossas regras, diretrizes e termos. Portanto, é imperativo que você esteja familiarizado com os mesmos.` +
                    '\n \nPara visualizar a documentação, clique na reação: 📚\n \n—' +
                    `\n \nHey, what's up? Welcome to Mercury! ${welcome}\n \n` +
                    "Harmony creates rays of peace. - André Luiz\n \n" +
                    `${rainbow_pushpin} Like every community and service company, we at Mercury have our rules, guidelines and terms. Therefore, it is imperative that you are familiar with them. ` +
                    '\n \nTo view the documentation, click on the reaction: 📚' +
                    '\n \n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com** | <@&827694827080122388>').then(m => {
                    m.react('📚');
                })
            }
        }
    }
    if (m.content == '.gen-cfg-ptbr') {
        if (m.channel.id == "827992163493216266") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                embed = new Discord.MessageEmbed()
                    .setDescription('\n**Configurações**\n\n' +
                        '>>> \n Com intuito de melhorar sua experiência, dividimos os' +
                        '\ncanais úteis em categorias ativáveis. \n' +
                        '\nVocê pode escolher quais serão exibidas, de acordo co' +
                        '\nm as suas necessidades.' +
                        '\n \nEm seguida, apresentamos uma lista com as categorias\n da nossa comunidade e suas respectivas reações.\n⠀')
                    .addField('> COMUNIDADE', `> ${community}`, true)
                    .addField('> OPEN SOURCE', '> 🎁', true)
                    .addField('> OUTROS', '> 🧩', true)
                    .setFooter('⠀⠀⠀⠀Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com');
                m.channel.send(embed).then(m => {
                    m.react(`${community}`)
                    m.react(`🎁`)
                    m.react('🧩')
                })
            }
        }
    }
    if (m.content == '.gen-cfg-enus') {
        if (m.channel.id == "827997381839552533") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                embed = new Discord.MessageEmbed()
                    .setDescription('\n**Settings**\n\n' +
                        '>>> \n In an attempt to improve your experience, we have divided the' +
                        '\nuseful channels in activable categories. \n' +
                        '\nYou can choose which ones to display, according to' +
                        '\nyour needs.' +
                        '\n \nNext, we present a list with the categories\n of our community and their respective reactions.\n⠀')
                    .addField('> COMMUNITY', `> ${community}`, true)
                    .addField('> OPEN SOURCE', '> 🎁', true)
                    .addField('> OTHERS', '> 🧩', true)
                    .setFooter('⠀⠀⠀⠀⠀⠀Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com');
                m.channel.send(embed).then(m => {
                    m.react(`${community}`)
                    m.react(`🎁`)
                    m.react('🧩')
                })
            }
        }
    }
    if (m.content == '.gen-fastest-anuncio-ptbr') {
        if (m.channel.id == "827991840367050782") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> \n' +
                    `${alert}**ANÚNCIO**${alert}\n` +
                    `**EVENTO FASTEST**\n` +
                    '\n***SOBRE***' +
                    '\n`1.0`▸Inspirado na série *The Flash*, apresentamos o nosso evento de inauguração, o **FASTEST**. A ideia é simples, as compras realizadas dentro do período do evento serão rankeadas, ou seja, terá uma classificação de acordo com as datas e horários de realização da compra. As classificações estarão disponíveis em: <#828368541174333510>.' +
                    '\n\n`1.1`▸As premiações do evento são atribuídas e diretamente proporcionais às classificações. Cada classificação é representada por uma tag específica.' +
                    '\n\n***CLASSIFICAÇÕES***' +
                    '\n`1º Lugar` ▹<@&828358062557364284>' +
                    '\n`2º Lugar` ▹<@&828358790797721661>' +
                    '\n`3º Lugar` ▹<@&828358790175916072>' +
                    '\n`A partir do 4º Lugar` ▹<@&828371237377933370>' +
                    '\n\n***PREMIAÇÕES***' +
                    '\n`1º Lugar` ▹**30%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`2º Lugar` ▹**30%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`3º Lugar` ▹**30%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`4º Lugar` ▹**25%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`5º Lugar` ▹**25%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`6º Lugar` ▹**25%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`7º Lugar` ▹**25%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`8º Lugar` ▹**15%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`9º Lugar` ▹**15%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`10º Lugar` ▹**15%** de desconto em **QUALQUER** produto adquirido dentro de **2**(**DOIS**) meses corridos, a partir do fim do evento;' +
                    '\n`A partir do 4º Lugar` ▹**8%** de desconto em **QUALQUER** produto adquirido dentro de **90**(**NOVENTA**) dias corridos, a partir do fim do evento;' +
                    '\n\n**OBS¹**: O prazo de **90**(**NOVENTA**) dias começa a partir da entrega do produto comprado durante o evento. ' +
                    '\n**OBS²**: A porcentagem premiada é **ACUMULATIVA**, por exemplo: ' +
                    '\n- Igor ficou em 1ª lugar na primeira edição do FASTEST e comprou o produto #produto01 com PIX. Portanto, o desconto total dele é: 30%(20% da classificação no FASTEST #1 e 10% por conta da forma de pagamento). ' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>');
            }
        }
    }
    if (m.content == '.gen-fastest-anuncio-enus') {
        if (m.channel.id == "827997309534208030") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> \n' +
                    `${alert}**ANNOUNCEMENT**${alert}\n` +
                    `**FASTEST EVENT**\n` +
                    '\n***ABOUT***' +
                    '\n`1.0`▸Inspired by The Flash series, we present our inaugural event, FASTEST. The idea is simple, the purchases made within the period of the event will be ranked, that is, it will be classified according to the data and times of the purchase. The ranks will be available at:: <#828368541174333510>.' +
                    '\n\n`1.1`▸The awards of the event are attributed and directly proportional to the classifications. Each classification is represented by a specific tag.' +
                    '\n\n***CLASSIFICATIONS***' +
                    '\n`1º place` ▹<@&828358062557364284>' +
                    '\n`2º place` ▹<@&828358790797721661>' +
                    '\n`3º place` ▹<@&828358790175916072>' +
                    '\n`From 4th place` ▹<@&828371237377933370>' +
                    '\n\n***AWARDS***' +
                    '\n`1º place` ▹**20%** discount on **ANY** product purchased within **90** (**NINETY**) days, from the end of the event;' +
                    '\n`2º place` ▹**15%** discount on **ANY** product purchased within **90** (**NINETY**) days, from the end of the event;' +
                    '\n`3º place` ▹**10%** discount on **ANY** product purchased within **90** (**NINETY**) days, from the end of the event;' +
                    '\n`From 4th place` ▹**8%** discount on **ANY** product purchased within **90** (**NINETY**) days, from the end of the event;' +
                    '\n\n**NOTE¹**: The term of **90** (**NINETY**) days starts from the delivery of the product purchased during the event.' +
                    '\n**NOTE²**: The percentage awarded is **CUMULATIVE**, for example: ' +
                    '\n- Igor took 1st place in the first edition of FASTEST and bought the product # produto01 with PIX. Therefore, his total discount is: 30% (20% of the classification in FASTEST #1 and 10% due to the payment method). ' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>');
            }
        }
    }
    if (m.content == '.gen-booster-ptbr') {
        if (m.channel.id == "828677053523820575") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> **O que é Nitro Boost?**' +
                    `\n${rainbow_pushpin} Os boosts são impulsos que os usuários podem dar em quaisquer servidores que desejarem. Esses impulsos desbloqueiam vantagens exclusivas, conforme listadas abaixo.` +
                    '\n\n**Vantagens:**' +
                    '\n▸ Prioridade na entrega de produtos;' +
                    '\n▸ Atendimento prioritário em nossa comunidade;' +
                    '\n▸ Até 10% de descontos em todos os nossos serviços;' +
                    '\n▸ Símbolo exclusivo e evolutivo no seu perfil do discord;' +
                    '\n▸ Acesso a scripts exclusivos para os boosters desenvolvidos pela equipe Mercury;' +
                    '\n \n**OBS**: Para tirar dúvidas a respeito das vantagens acima, abra um ticket em: <#828667760347185152>' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>');
            }
        }
    }
    if (m.content == '.gen-booster-enus') {
        if (m.channel.id == "828829532126445588") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> **What is Nitro Boost?**' +
                    `\n${rainbow_pushpin} Boosts are impulses that users can give on any servers they want. These impulses unlock exclusive benefits, as listed below.` +
                    '\n\n**Benefits:**' +
                    '\n▸ Priority in the delivery of products;' +
                    '\n▸ Priority on ticket system;' +
                    '\n▸ Up to 10% discounts on all our services;' +
                    '\n▸ Exclusive and evolutionary symbol in your discord profile;' +
                    '\n▸ Access to exclusive scripts for the boosters developed by the Mercury team;' +
                    '\n \n**NOTE**: For questions regarding the above benefits, open a ticket at: <#828667760347185152>' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>');
            }
        }
    }
    if (m.content == '.gen-ticketsystem-ptbr') {
        if (m.channel.id == "828667760347185152") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> **Ticket System**' +
                    `\n \n${rainbow_pushpin} Olá, tudo bem? Este é o nosso sistema de tickets. Ele tem como principal função: facilitar a comunicação entre os membros e a Equipe Mercury. Porém, para que funcione satisfatoriamente, é necessário seguir e estar familiarizado com regras de conduta apresentadas ao decorrer do ticket. Portanto, leia com atenção todas as observações e avisos ao iniciar um atendimento.` +
                    '\n\n• **Por que eu devo abrir um ticket?**\nEsta ferramenta tem intuito de tirar dúvidas gerais, realizar a compra de um serviço e/ou solicitar suporte especializado.' +
                    '\n\n• **Como eu posso abrir um ticket?**\nPara abrir um ticket basta clicar na reação: ' + `${ticket}` + '. Durante o horário de atedimento nossa equipe irá entrar em contato.' +
                    '\n \n• **Horário de atendimento**\nSegunda à Sexta-feira, das 09:00 às 21:00, Sábado das 10:00 às 15:00, exceto feriados.' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>').then(ticketm => {
                    ticketm.react(`${ticket}`)
                })
            }
        }
    }
    if (m.content == '.gen-ticketsystem-enus') {
        if (m.channel.id == "828667722908958761") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> **Ticket System**' +
                    `\n \n${rainbow_pushpin} Hello how are you? This is our ticket system. Its main function is to facilitate communication between members and the Mercury Team. However, for it to work satisfactorily, it is necessary to follow and be familiar with rules of conduct presented during the ticket. Therefore, carefully read all notes and warnings when starting an appointment.` +
                    '\n\n• **Why should I open a ticket?**\nThis tool is intended to answer general questions, purchase a service and / or request specialized support.' +
                    '\n\n• **How can I open a ticket?**\nTo open a ticket just click on the reaction: ' + `${ticket}` + '. During the opening hours our team will contact you.' +
                    '\n \n• **Opening hours**\nMonday to Friday, from 9 am to 9 pm, Saturday from 10 am to 3 pm, except holidays.' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>').then(ticketm => {
                    ticketm.react(`${ticket}`)
                })
            }
        }
    }
    if (m.content == '.gen-utils-ptbr') {
        if (m.channel.id == "829070607151923200") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> **Utilidades**' +
                    `\n${rainbow_pushpin} Abaixo você irá encontrar uma lista selecionada a dedo pela nossa equipe, onde estão disponíveis Animações, Veículos, Blips, Markers e outros.` +
                    '\n\n• **Wiki completo**: <https://wiki.rage.mp/index.php?title=Main_Page> `LINK SEGURO`' +
                    '\n• **Veículos nativos**: <https://wiki.rage.mp/index.php?title=Vehicles> `LINK SEGURO`' +
                    '\n• **Animações**: <https://wiki.rage.mp/index.php?title=Animations> `LINK SEGURO`' +
                    '\n• **Markers**: <https://wiki.rage.mp/index.php?title=Markers> `LINK SEGURO`' +
                    '\n• **Blips**: <https://wiki.rage.mp/index.php?title=Blips> `LINK SEGURO`' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>')
            }
        }
    }
    if (m.content == '.gen-utils-enus') {
        if (m.channel.id == "829070903005413467") {
            if (m.author.id == "432242181428871171") {
                m.delete()
                m.channel.send('>>> **Utilities**' +
                    `\n${rainbow_pushpin} Below you will find a list selected by our team, where Animations, Vehicles, Blips, Markers and others are available.` +
                    '\n\n• **Complete Wiki**: <https://wiki.rage.mp/index.php?title=Main_Page> `SECURE LINK`' +
                    '\n• **Native Vehicles**: <https://wiki.rage.mp/index.php?title=Vehicles> `SECURE LINK`' +
                    '\n• **Animations**: <https://wiki.rage.mp/index.php?title=Animations> `SECURE LINK`' +
                    '\n• **Markers**: <https://wiki.rage.mp/index.php?title=Markers> `SECURE LINK`' +
                    '\n• **Blips**: <https://wiki.rage.mp/index.php?title=Blips> `SECURE LINK`' +
                    '\n\n**Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com |** <@&827694827080122388>')
            }
        }
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) return;
    if (reaction.message.channel.id == "827581708810977341") {
        if (reaction.emoji.name == '📚') {
            reaction.users.remove(user.id);
            open('https://www.google.com/');
        } else {
            reaction.users.remove(user.id);
        }
    }
    if (reaction.message.channel.id == "828667760347185152") {
        if (reaction.emoji.id != `828991452150235236`) {
            reaction.users.remove(user.id);
        }
    }
    if (reaction.message.channel.id == "828667722908958761") {
        if (reaction.emoji.id != `828991452150235236`) {
            reaction.users.remove(user.id);
        }
    }
    //enus
    if (reaction.message.channel.id == "827997381839552533") {
        if (reaction.emoji.id == '828435459457417246') {
            reaction.users.remove(user.id);
            if (reaction.message.guild.channels.cache.get('829177226842603521').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('829177226842603521').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
                reaction.message.guild.channels.cache.get('829070519897686016').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
                reaction.message.guild.channels.cache.get('829176467610402836').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
                reaction.message.guild.channels.cache.get('829177692599222293').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('829177226842603521').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
                reaction.message.guild.channels.cache.get('829070519897686016').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
                reaction.message.guild.channels.cache.get('829176467610402836').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
                reaction.message.guild.channels.cache.get('829177692599222293').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
        }
        if (reaction.emoji.name == '🎁') {
            reaction.users.remove(user.id);
            if (reaction.message.guild.channels.cache.get('828673628203253840').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('828673628203253840').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('828673628203253840').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
        }
        if (reaction.emoji.name == '🧩') {
            reaction.users.remove(user.id);
            //booster
            if (reaction.message.guild.channels.cache.get('828829532126445588').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('828829532126445588').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('828829532126445588').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
            //utilidades
            if (reaction.message.guild.channels.cache.get('829070903005413467').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('829070903005413467').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('829070903005413467').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
        }
    }
    //ptbr
    if (reaction.message.channel.id == "827992163493216266") {
        if (reaction.emoji.id == '828435459457417246') {
            reaction.users.remove(user.id);
            if (reaction.message.guild.channels.cache.get('828667816185823242').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('828667816185823242').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
                reaction.message.guild.channels.cache.get('829070502399443085').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
                reaction.message.guild.channels.cache.get('829175255473324093').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
                reaction.message.guild.channels.cache.get('829177669504860180').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('828667816185823242').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
                reaction.message.guild.channels.cache.get('829070502399443085').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
                reaction.message.guild.channels.cache.get('829175255473324093').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
                reaction.message.guild.channels.cache.get('829177669504860180').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
        }
        if (reaction.emoji.name == '🎁') {
            reaction.users.remove(user.id);
            if (reaction.message.guild.channels.cache.get('828673628203253840').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('828673628203253840').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('828673628203253840').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
        }
        if (reaction.emoji.name == '🧩') {
            reaction.users.remove(user.id);
            if (reaction.message.guild.channels.cache.get('828677053523820575').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('828677053523820575').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('828677053523820575').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
            //utilidades
            if (reaction.message.guild.channels.cache.get('829070607151923200').permissionsFor(user.id).has('VIEW_CHANNEL') == true) {
                reaction.message.guild.channels.cache.get('829070607151923200').overwritePermissions([{
                    id: user.id,
                    deny: 'VIEW_CHANNEL',
                }])
            } else {
                reaction.message.guild.channels.cache.get('829070607151923200').overwritePermissions([{
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CREATE_INSTANT_INVITE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    deny: ['MANAGE_CHANNELS', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                }])
            }
        }
    }
    if (reaction.message.channel.type == 'dm') {
        if (reaction.emoji.name == '🇺🇸') {
            reaction.message.delete()
            reaction.message.channel.send('> Language selected: **ENGLISH**.').then(m => {
                english = true
                setTimeout(() => {
                    m.delete()
                    fetch(url).then(res => res.json())
                        .then(async json => {
                            embed = new Discord.MessageEmbed()
                                .setDescription('**• Verify process**\n' +
                                    '- To join our discord, you must be successful in captcha.\n \n' +
                                    'Send the code illustrated below\n \n' +
                                    '**NOTE¹**: The code must be entered in **LOWERCASE**;')
                                .setImage(json.captcha)
                                .setFooter('All rights reserved © Mercury Inc. 2021', 'https://cdn.discordapp.com/attachments/745004634560790719/827734716123316274/Screenshot_1.png');
                            const msg = reaction.message.channel.send(embed);
                            embedid = (await msg).id;
                            captchacode = json.captcha_text
                            trying.add(user.id)
                        });
                }, 2000);
            })
        }
        if (reaction.emoji.name == '🇧🇷') {
            reaction.message.delete()
            reaction.message.channel.send('> Linguagem selecionada: **PORTUGUÊS DO BRASIL**.').then(m => {
                setTimeout(() => {
                    m.delete();
                    fetch(url).then(res => res.json())
                        .then(async json => {
                            embed = new Discord.MessageEmbed()
                                .setDescription('**• Processo de verificação**\n' +
                                    '- Para entrar em nosso discord, é necessário que você obtenha êxito no captcha.\n \n' +
                                    'Envie o código ilustrado abaixo\n \n' +
                                    '**OBS**: O código deve ser digitado com letras **MINÚSCULAS**;')
                                .setImage(json.captcha)
                                .setFooter('⠀⠀⠀⠀⠀⠀⠀Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com');
                            const msg = reaction.message.channel.send(embed);
                            embedid = (await msg).id;
                            captchacode = json.captcha_text
                            trying.add(user.id)
                        });
                }, 2000);
            })
        }
    }
    if (reaction.message.channel.id == "828667760347185152") {
        if (reaction.emoji.id == '828991452150235236') {
            reaction.users.remove(user.id);
            if (!inService.has(user.id)) {
                var protocol = generateProtocol();
                ticketcategory = client.guilds.cache.get('827581619581091860').channels.cache.find(c => c.name == 'TICKET SYSTEM' && c.type == 'category');
                client.guilds.cache.get('827581619581091860').channels.create("ticket-" + protocol, { type: 'text' }).then(ct => {
                    ct.overwritePermissions([{
                        id: '828351351461249044',
                        allow: 'VIEW_CHANNEL',
                    }, {
                        id: '827996082213879870',
                        deny: 'VIEW_CHANNEL',
                    }, {
                        id: '827996197725667350',
                        deny: 'VIEW_CHANNEL',
                    }])
                    setTimeout(() => {
                        ct.overwritePermissions([{
                                id: '827996082213879870',
                                deny: 'VIEW_CHANNEL',
                            },
                            {
                                id: '827996197725667350',
                                deny: 'VIEW_CHANNEL',
                            }, {
                                id: user.id,
                                allow: 'VIEW_CHANNEL',
                            },
                        ])
                    }, 500);
                    ct.setParent(ticketcategory);
                    ticketChennelId = ct.id;
                    var date_ob = new Date();
                    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                    let day = ("0" + date_ob.getDate()).slice(-2);
                    formatedDate = day + '/' + month + '/' + date_ob.getFullYear() + ' às ' + date_ob.getHours() + ':' + date_ob.getMinutes() + ':' + date_ob.getSeconds() + '.'
                    ct.setTopic('<@' + user.id + '> ┇ Protocolo: ' + protocol + ' ┇ Iniciado em: ' + formatedDate);
                    embed = new Discord.MessageEmbed()
                        .setColor('#36393f')
                        .setDescription('**Ticket System**' +
                            '\n\n >>> Olá <@' + user.id + '>, logo nossa equipe irá entrar em contato dentro de horário do atendimento.' +
                            '\n\n• **Horário de atendimento**\nSegunda à Sexta-feira, das 09:00 às 21:00, Sábado das 10:00 às 15:00, exceto feriados.')
                        .setImage('https://cdn.discordapp.com/attachments/745004634560790719/831703319126212618/ticket-protocol.png')
                        .setFooter('Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com', client.user.avatarURL);
                    ct.send(embed)
                    inService.add(user.id)
                })
            }
        }
    }
    //enus
    if (reaction.message.channel.id == "828667722908958761") {
        if (reaction.emoji.id == '828991452150235236') {
            reaction.users.remove(user.id);
            if (!inService.has(user.id)) {
                var protocol = generateProtocol();
                ticketcategory = client.guilds.cache.get('827581619581091860').channels.cache.find(c => c.name == 'TICKET SYSTEM' && c.type == 'category');
                client.guilds.cache.get('827581619581091860').channels.create("ticket-" + protocol, { type: 'text' }).then(ct => {
                    ct.overwritePermissions([{
                        id: '828351351461249044',
                        allow: 'VIEW_CHANNEL',
                    }, {
                        id: '827996082213879870',
                        deny: 'VIEW_CHANNEL',
                    }, {
                        id: '827996197725667350',
                        deny: 'VIEW_CHANNEL',
                    }])
                    setTimeout(() => {
                        ct.overwritePermissions([{
                                id: '827996082213879870',
                                deny: 'VIEW_CHANNEL',
                            },
                            {
                                id: '827996197725667350',
                                deny: 'VIEW_CHANNEL',
                            }, {
                                id: user.id,
                                allow: 'VIEW_CHANNEL',
                            },
                        ])
                    }, 500);
                    ct.setParent(ticketcategory);
                    ticketChennelId = ct.id;
                    var date_ob = new Date();
                    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                    let day = ("0" + date_ob.getDate()).slice(-2);
                    formatedDate = day + '/' + month + '/' + date_ob.getFullYear() + ' at ' + date_ob.getHours() + ':' + date_ob.getMinutes() + ':' + date_ob.getSeconds() + '.'
                    ct.setTopic('<@' + user.id + '> ┇ Protocol: ' + protocol + ' ┇ Started at: ' + formatedDate);
                    embed = new Discord.MessageEmbed()
                        .setColor('#36393f')
                        .setDescription('**Ticket System**' +
                            '\n\n >>> Hey <@' + user.id + '>, soon our team will contact you within working hours.' +
                            '\n\n• **Opening hours**\nMonday to Friday, from 9 am to 9 pm, Saturday from 10 am to 3 pm, except holidays.')
                        .setImage('https://cdn.discordapp.com/attachments/745004634560790719/831703319126212618/ticket-protocol.png')
                        .setFooter('Mercury Inc. © Since 2021 | mercuryinc2021@gmail.com', 'https://cdn.discordapp.com/attachments/745004634560790719/827734716123316274/Screenshot_1.png');
                    ct.send(embed)
                    inService.add(user.id)
                })
            }
        }
    }
})

client.login('ODI3Njg0OTUyOTYzMTUzOTkw.YGenrg.mgLceWosCDLiyZQH9eRPWxnbKoU');