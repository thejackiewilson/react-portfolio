import self from "../img/imageimageself-removebg-preview.png"
import toolsie from "../img/toolsie.png"
import StockiePYY from "../img/StockiePYY.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(67, 228, 53)", "rgb(229, 176, 71)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jackie",
    lastName: "Wilson",
    initials: "JW", // the example uses first and last, but feel free to use three or more if you like.
    position: "a tech-savvy MBA",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👨‍🎓',
            text: 'Fueled by learning'
        },
        {
            emoji: '🌎',
            text: 'Michigan, United States'
        },
        {
            emoji: "💼",
            text: "MBA Graduate - Northwood University"
        },
        {
            emoji: "📧",
            text: "thejackiewilson@outlook.com"
        }
    ],
    socials: [

        {
            link: "https://www.github.com/thejackiewilson/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/jackiewwilson/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/JackieWilson00",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "As an MBA graduate with experience in project management, I seamlessly merge a diverse business acumen with a passion for data-driven decisions, underpinned by a command over technologies such as Python, Excel, PowerPoint, and JavaScript. Presently, I’m thriving in my role as a Part Sales Manager (PSM) at AutoZone, further enhancing my proficiency in aftermarket business dynamics, aftermarket hard parts, developing robust associates, and connecting with customers on their automotive issues. While my technological prowess and business insights form the crux of my professional identity & experience, I remain staunchly dedicated to continuous personal evolution and fervent lifelong learning. In my pursuit of excellence, I aim not just for the success of the companies I associate with but also for my relentless growth as a multifaceted professional. I’m actively exploring avenues where my unique blend of business and technical acumen can serve as a catalyst for growth. If you envision a synergistic partnership, I’d be delighted to connect and deliberate on potential collaborative opportunities.",
    skills:
        {
            proficientWith: ['MS PowerBI', 'MS Excel', 'MS SharePoint', 'MS Access', 'MS PowerPoint', 'MiniTab', 'Linux (Arch, Kali, Mint)', 'JavaScript', 'Python', 'Git', 'Github', 'Bootstrap', 'HTML5', 'CSS3', 'Figma'],
            exposedTo: ['NodeJS', 'C++', 'C#', 'HTMX', 'PugScript', 'SCSS', 'SalesForce', 'WebGPT', 'GPT-3', 'GPT-3.5', 'GPT-4']
        }
    ,
    hobbies: [
        {
            label: 'stocks, options, bonds',
            emoji: '🏦'
        },
        {
            label: 'automotive trends research',
            emoji: '🚘'
        },
        {
            label: 'collecting sports cards - NBA, NFL, NHL, MLB',
            emoji: '🏆'
        },
        {
            label: 'technology trend discussions',
            emoji: '📱'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Toolsie Curations",
            live: "https://toolsie.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/thejackiewilson/aipage-vite", // this should be a link to the **repository** of the project, where the code is hosted.
            image: toolsie
        },
        {
            title: "Stockie PY",
            live: "https://jackiewilson.pythonanywhere.com/",
            source: "https://github.com/thejackiewilson/Stockie-PY",
            image: StockiePYY
        },
    ]
}
