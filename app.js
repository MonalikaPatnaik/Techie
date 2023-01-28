const {Telegraf} = require('telegraf')
const axios=require('axios')
const bot = new Telegraf(`5835127916:AAEVJEhZOKpcikc_kXSNOKgxAq55EVF8rek`)
const web_link="https://castor23.netlify.app/#home"
bot.start((ctx) => 
ctx.reply("Hey there, tech-savvy students!\n Are you ready to put your creative minds to the test and show off your innovative ideas? Meet<b> Techie</b>, your friendly bot guide to the upcoming <b>Castor Hackathon!</b> With Techie by your side, you'll have access to all the resources and support you need to create something truly amazing.\n So what are you waiting for? Let's go and register to convert your ideas into reality and make your mark in the tech world!\n Type /Menu to explore what I have in store for you :))",{parse_mode:"HTML"},{
    reply_markup:{inline_keyboard:[[
        {text:"Explore Website",url:web_link}]
    ]}
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
            {text:"Hackathon details",callback_data:'about'},{text:"Register Here",url:web_link}],[
                {text:"Resources",url:"https://mellow-swing-850.notion.site/Castor-2023-7cd698ecaed84a92bbb7f969fe5ded9b"},{text:"",url:web_link}  
            ]
        ]
        
    }})
})
bot.action('about',(ctx)=>{
    ctx.reply("<b>About CASTOR 2023</b> 🤖\n\nCASTOR, the latter chapter, will be a 48-hour remarkable event with a vision of upskilling students through events of different technical and entrepreneurial domains, connecting with various tech leaders and inspiring individuals, and providing a platform for a comprehensive exchange of innovation.\n\n<b>Schedule📅</b>\n\n<b>Prizes 🏆</b>https://castor23.netlify.app/index.html#prizes",{parse_mode:"HTML"}
)})
bot.launch()
