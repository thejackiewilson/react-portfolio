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
    position: "Tech-Saavy MBA",
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
            text: "MBA Graduate - Northwood University | Leading Innovation For StockiePY"
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
    bio: "As an MBA scholar with a passion for project management and strong business acumen, I bring expertise in computer skills including proficiency in Excel, PowerPoint, and various computer languages such as Python + JavaScript, alongside my love for data analysis to the professional arena. Eager to apply knowledge and skills to drive success in a fast-paced and challenging environment. My background in business and my ability to understand the big picture helps me make well-informed decisions and implement successful strategies. Open to new opportunities in various aspects of business & technology. Excited to see how we can work together! ",
    skills:
        {
            proficientWith: ['JavaScript', 'Python', 'MS PowerBI', 'MS Excel', 'React', 'Git', 'Github', 'Bootstrap', 'HTML5', 'CSS3', 'Figma'],
            exposedTo: ['NodeJS', 'Python', 'MS Office MS Excel', 'ChatGPT', 'GPT-4']
        }
    ,
    hobbies: [
        {
            label: 'finance',
            emoji: '🏦'
        },
        {
            label: 'automotive',
            emoji: '🚘'
        },
        {
            label: 'collecting sports cards',
            emoji: '🏆'
        },
        {
            label: 'technology',
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
