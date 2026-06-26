const quotes = [
    {
        id: 1,
        profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        publishedDate: "01 January 2025"
    },
    {
        id: 2,
        profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill",
        publishedDate: "05 January 2025"
    },
    {
        id: 3,
        profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
        publishedDate: "12 January 2025"
    },
    {
        id: 4,
        profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown",
        publishedDate: "18 January 2025"
    },
    {
        id: 5,
        profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
        publishedDate: "22 January 2025"
    },
    {
        id: 6,
        profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs",
        publishedDate: "02 February 2025"
    },
    {
        id: 7,
        profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen",
        publishedDate: "09 February 2025"
    },
    {
        id: 8,
        profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino",
        publishedDate: "14 February 2025"
    },
    {
        id: 9,
        profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
        author: "Johann Wolfgang von Goethe",
        publishedDate: "20 February 2025"
    },
    {
        id: 10,
        profile: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "We generate fears while we sit. We overcome them by action.",
        author: "Dr. Henry Link",
        publishedDate: "01 March 2025"
    },
    {
        id: 11,
        profile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Whether you think you can or think you can't, you're right.",
        author: "Henry Ford",
        publishedDate: "07 March 2025"
    },
    {
        id: 12,
        profile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "The security is mostly a superstition. Life is either a daring adventure or nothing.",
        author: "Helen Keller",
        publishedDate: "15 March 2025"
    },
    {
        id: 13,
        profile: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "The true test of leadership is how well you function in a crisis.",
        author: "Brian Tracy",
        publishedDate: "22 March 2025"
    },
    {
        id: 14,
        profile: "https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        publishedDate: "02 April 2025"
    },
    {
        id: 15,
        profile: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Creativity is intelligence having fun.",
        author: "Albert Einstein",
        publishedDate: "10 April 2025"
    },
    {
        id: 16,
        profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
        author: "Don Zimmer",
        publishedDate: "17 April 2025"
    },
    {
        id: 17,
        profile: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
        publishedDate: "25 April 2025"
    },
    {
        id: 18,
        profile: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Develop an 'Attitude of Gratitude'. Say thank you to everyone you meet for everything they do for you.",
        author: "Brian Tracy",
        publishedDate: "01 May 2025"
    },
    {
        id: 19,
        profile: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar",
        publishedDate: "08 May 2025"
    },
    {
        id: 20,
        profile: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&h=150&q=80",
        quote: "Clear, written goals have a wonderful effect on your thinking. They motivate you and galvanize you into action.",
        author: "Brian Tracy",
        publishedDate: "15 May 2025"
    }
];

function generateRandomQuote() {
    let profile = document.getElementById("profile");
    let quote = document.getElementById("quote-text");
    let author = document.getElementById("author");
    let date = document.getElementById("date");
    let button = document.getElementById("generate-btn");

    // default quote
    profile.src = quotes[0].profile;
    quote.textContent = quotes[0].quote;
    author.textContent = quotes[0].author;
    date.textContent = quotes[0].publishedDate;

    button.addEventListener("click", () => {
        let randomQuote = Math.floor(Math.random() * quotes.length);
        let selectedQuote = quotes[randomQuote];

        profile.src = selectedQuote.profile;
        quote.textContent = selectedQuote.quote;
        author.textContent = selectedQuote.author;
        date.textContent = selectedQuote.publishedDate;
    })
}

generateRandomQuote()