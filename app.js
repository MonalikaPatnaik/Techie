const {Telegraf} = require('telegraf')
const axios=require('axios')
const bot = new Telegraf(`5835127916:AAEVJEhZOKpcikc_kXSNOKgxAq55EVF8rek`)
const web_link="https://castor23.netlify.app/#home"
bot.start((ctx) => 
ctx.reply("Hey there👋, tech-savvy students!\n\nAre you ready to put your creative minds to the test and show off your innovative ideas👀? Meet<b> Techie 😎</b>, your friendly bot guide to the upcoming <b>Castor Hackathon!</b> With Techie by your side, you'll have access to all the resources and support you need to create something truly amazing.🤯\nSo what are you waiting for? Let's go and register to convert your ideas into reality and make your mark in the tech world!👩‍💻\n\nType <b>/Menu </b>to explore what I have in store for you :))",{
    reply_markup:{inline_keyboard:[[
        {text:"Explore Website",url:web_link}]
    ]},parse_mode:"HTML"
}))     
bot.command('Menu',(ctx)=>{
    // url= "https://castor23.netlify.app/"
    // axios.get(url)
    // .then((res)=>{
    //     console.log(res.data)
    //     // ctx.reply(res.data)
    // })
    ctx.reply('hello',
    {
        reply_markup:{inline_keyboard:[[
            {text:"Hackathon details",callback_data:'about'},{text:"Register Here",url:"https://castor-2023.devfolio.co/"}],[
                {text:"Resources",url:"https://mellow-swing-850.notion.site/Castor-2023-7cd698ecaed84a92bbb7f969fe5ded9b"},{text:"Anything else",callback_data:'que'}  
            ]
        ]
        
    }})
})
bot.action('about',(ctx)=>{
    // ctx.deleteMessage()
    ctx.reply("<b>About CASTOR 2023</b> 🤖\n\nCASTOR, the latter chapter, will be a 48-hour remarkable event with a vision of upskilling students through events of different technical and entrepreneurial domains, connecting with various tech leaders and inspiring individuals, and providing a platform for a comprehensive exchange of innovation.\n\n<b>Schedule📅</b> https://castor23.netlify.app/view/schedule.html \n\n<b>Prizes 🏆</b> https://castor23.netlify.app/index.html#prizes",{reply_markup:{inline_keyboard:[[
        {text:"Go Back to menu",callback_data:'go_back'}]
    ]},parse_mode:"HTML"}
        
)})
bot.action('que',(ctx)=>{
    ctx.reply("Type your questions related to hackathon..I will try my best to answer☺️\n")
})
bot.action('go_back',(ctx)=>{
    // ctx.deleteMessage()
    ctx.reply('',
    {
        reply_markup:{inline_keyboard:[[
            {text:"Hackathon details",callback_data:'about'},{text:"Register Here",url:"https://castor-2023.devfolio.co/"}],[
                {text:"Resources",url:"https://mellow-swing-850.notion.site/Castor-2023-7cd698ecaed84a92bbb7f969fe5ded9b"},{text:"Anything else",callback_data:'que'}  
            ]
        ]
        
    }})
})
bot.launch()
