const {Telegraf} = require('telegraf')
const axios=require('axios')
const bot = new Telegraf(`5835127916:AAEVJEhZOKpcikc_kXSNOKgxAq55EVF8rek`)
const web_link="https://castor23.netlify.app/#home"
bot.start((ctx) => 
ctx.reply("Hey thereπ, tech-savvy students!\n\nAre you ready to put your creative minds to the test and show off your innovative ideasπ? Meet<b> Techie π</b>, your friendly bot guide to the upcoming <b>Castor Hackathon!</b> With Techie by your side, you'll have access to all the resources and support you need to create something truly amazing.π€―\nSo what are you waiting for? Let's go and register to convert your ideas into reality and make your mark in the tech world!π©βπ»\n\nType <b>/Menu </b>to explore what I have in store for you :))",{
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
    ctx.reply('Click the buttons below π',
    {
        reply_markup:{inline_keyboard:[[
            {text:"Hackathon details",callback_data:'about'},{text:"Register Here",url:"https://castor-2023.devfolio.co/"}],[
                {text:"Resources",callback_data:"res"},{text:"Anything else",callback_data:'que'}  
            ]
        ]
        
    }})
})
bot.action('about',(ctx)=>{
    // ctx.deleteMessage()
    ctx.reply("π<b>ABOUT CASTOR 2023</b> π€\n\nCASTOR, the latter chapter, will be a 48-hour remarkable event with a vision of upskilling students through events of different technical and entrepreneurial domains, connecting with various tech leaders and inspiring individuals, and providing a platform for a comprehensive exchange of innovation.\n\nπ<b>SCHEDULEπ</b>\n\n<b>Runs from\n</b>Jan 28 - 29, 2023\n\n<b>Happening</b>\nOnline\nhttps://castor-2023.devfolio.co/schedule \n\nπ<b>PRIZES π</b>\nhttps://castor-2023.devfolio.co/prizes\n\nπ<b>RULES</b>π\nhttps://devfolio.co/code-of-conduct",{reply_markup:{inline_keyboard:[[
        {text:"Go Back to menu",callback_data:'go_back'}]
    ]},parse_mode:"HTML"}
        
)})
bot.action('que',(ctx)=>{
  ctx.reply(`Hi! Monalika, how can I help you?`)
})
bot.action('go_back',(ctx)=>{
    // ctx.deleteMessage()
    ctx.reply('Click the buttons below π ',
    {
        reply_markup:{inline_keyboard:[[
            {text:"Hackathon details",callback_data:'about'},{text:"Register Here",url:"https://castor-2023.devfolio.co/"}],[
                {text:"Resources",callback_data:"res"},{text:"Anything else",callback_data:'que'}  
            ]
        ]
        
    }})
})
bot.action('res',(ctx)=>{
    ctx.reply("π<b>ONLINE RESOURCES</b> π€\n\nπΉ<b>Beginnerβs guide before building a Chatbot</b> https://www.analyticsvidhya.com/blog/2021/06/beginners-guide-before-building-a-chatbot/ \n\nπΉ<b>How to build  a Telegram Bot in Python</b> https://www.geeksforgeeks.org/create-a-telegram-bot-using-python/ \n\nπΉ<b>How to build  a Telegram Bot in Javascript/NodeJs</b> https://www.geeksforgeeks.org/how-to-design-a-weather-bot-in-telegram-using-javascript/ \n\nπ<b>TUTORIALS</b>\n\nπΉ<b>Building Telegram bot in Python</b> https://youtu.be/227uk4kDTM8\n\nπΉ<b>Building Telegram bot in javascript Completet tutorial</b> https://youtube.com/playlist?list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84\nπΉ<b>Creating a Chatbot with Deep learning, Python and TensorFlo</b>\n1. https://youtube.com/playlist?list=PLQVvvaa0QuDdc2k5dwtDTyT9aCja0on8j\n2. https://youtu.be/RpWeNzfSUHw\n3. https://youtu.be/wypVcNIH6D4\n\nπ<b>SAMPLE PROJECTS</b>\n\nπΉ<b>Beginner-friendly Chatbots</b>\nhttps://github.com/topics/chatbot\nπΉ<b>Collection of Simple Chatbot Projects</b>\nhttps://github.com/parulnith/Building-a-Simple-Chatbot-in-Python-using-NLTK\nπΉ<b>AI Chatbot Projects</b>\nhttps://github.com/topics/ai-chatbot\nπΉ<b>ChatterBot</b>\nhttps://github.com/topics/chatbot-application",{reply_markup:{inline_keyboard:[[
        {text:"Go Back to menu",callback_data:'go_back'}]
    ]},parse_mode:"HTML"}
        
)
})
bot.on('message',(ctx)=>{
  ctx.reply(`Hi! ${ctx.message.from.first_name},\nKindly head over to the FAQ section of the website or Contact us at--`,{
    reply_markup:{inline_keyboard:[[
        {text:"Instagram",url:"https://www.instagram.com/celestialbiscuit/"}],[{text:"Linkedin",url:"https://www.linkedin.com/company/celestial-biscuit-igdtuw/"}],[{text:"Twitter",url:"https://twitter.com/cbigdtuw?lang=en"}],[{text:"Mail Us βοΈ",url:"celestialbiscuit0.0@gmail.com"}],[{text:"Go Back to menu",callback_data:'go_back'}]
    ]}
})
});
bot.launch()
