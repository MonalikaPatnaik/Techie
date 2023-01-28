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
    ctx.reply('Click the buttons below 👇',
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
    ctx.reply("📍<b>ABOUT CASTOR 2023</b> 🤖\n\nCASTOR, the latter chapter, will be a 48-hour remarkable event with a vision of upskilling students through events of different technical and entrepreneurial domains, connecting with various tech leaders and inspiring individuals, and providing a platform for a comprehensive exchange of innovation.\n\n📍<b>SCHEDULE📅</b>\n\n<b>Runs from\n</b>Jan 28 - 29, 2023\n\n<b>Happening</b>\nOnline\nhttps://castor-2023.devfolio.co/schedule \n\n📍<b>PRIZES 🏆</b>\nhttps://castor-2023.devfolio.co/prizes\n\n📍<b>RULES</b>📄\nhttps://devfolio.co/code-of-conduct",{reply_markup:{inline_keyboard:[[
        {text:"Go Back to menu",callback_data:'go_back'}]
    ]},parse_mode:"HTML"}
        
)})
bot.action('que',(ctx)=>{
    ctx.reply("Type your questions related to hackathon..I will try my best to answer☺️\n")
})
bot.action('go_back',(ctx)=>{
    // ctx.deleteMessage()
    ctx.reply('Click the buttons below 👇 ',
    {
        reply_markup:{inline_keyboard:[[
            {text:"Hackathon details",callback_data:'about'},{text:"Register Here",url:"https://castor-2023.devfolio.co/"}],[
                {text:"Resources",callback_data:"res"},{text:"Anything else",callback_data:'que'}  
            ]
        ]
        
    }})
})
bot.action('res',(ctx)=>{
    ctx.reply("👉<b>ONLINE RESOURCES</b> 🤖\n\n🔹<b>Beginner’s guide before building a Chatbot</b> https://www.analyticsvidhya.com/blog/2021/06/beginners-guide-before-building-a-chatbot/ \n\n🔹<b>How to build  a Telegram Bot in Python</b> https://www.geeksforgeeks.org/create-a-telegram-bot-using-python/ \n\n🔹<b>How to build  a Telegram Bot in Javascript/NodeJs</b> https://www.geeksforgeeks.org/how-to-design-a-weather-bot-in-telegram-using-javascript/ \n\n👉<b>TUTORIALS</b>\n\n🔹<b>Building Telegram bot in Python</b> https://youtu.be/227uk4kDTM8\n\n🔹<b>Building Telegram bot in javascript Completet tutorial</b> https://youtube.com/playlist?list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84\n🔹<b>Creating a Chatbot with Deep learning, Python and TensorFlo</b>\n1. https://youtube.com/playlist?list=PLQVvvaa0QuDdc2k5dwtDTyT9aCja0on8j\n2. https://youtu.be/RpWeNzfSUHw\n3. https://youtu.be/wypVcNIH6D4\n\n👉<b>SAMPLE PROJECTS</b>\n\n🔹<b>Beginner-friendly Chatbots</b>\nhttps://github.com/topics/chatbot\n🔹<b>Collection of Simple Chatbot Projects</b>\nhttps://github.com/parulnith/Building-a-Simple-Chatbot-in-Python-using-NLTK\n🔹<b>AI Chatbot Projects</b>\nhttps://github.com/topics/ai-chatbot\n🔹<b>ChatterBot</b>\nhttps://github.com/topics/chatbot-application",{reply_markup:{inline_keyboard:[[
        {text:"Go Back to menu",callback_data:'go_back'}]
    ]},parse_mode:"HTML"}
        
)
})
bot.launch()
