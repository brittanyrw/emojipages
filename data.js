const emojiItems = [
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        emojiImgs: "👩🐇😼☕🎩♕",
        genres: ["fantasy", "childrens"],
        year: 1865
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        emojiImgs: "🐷🐰🐭🐴🐮🐔",
        genres: ["satire"],
        year: 1945
    },
    {
        title: "Eclipse",
        author: "Stephenie Meyer",
        emojiImgs: "❤️🐺🧛‍♂️🌕💑",
        genres: ["young-adult", "fantasy-history", "romance"],
        year: 2007
    },{
        title: "Charlotte's Web",
        author: "E.B. White",
        emojiImgs: "🕷️🕸️🖊️🐖👩‍👩‍👧",
        genre: ["Fiction", "Children's", "General"],
        year: 1952
},{
        title: "The Devil Wears Prada",
        author: "Lauren Weisberger",
        emojiImgs: "😈👩🏻‍🦳👠👩🏻👗👛",
        genres: ["drama", "comedy","romance"],
        year: 2003
    },{
        title: "Dune",
        author: "Frank Herbert",
        emojiImgs: "🏜🌠⚔💊💧",
        genres: ["science-fiction"],
        year: 1965
    },{
        title: "Fight Club",
        author: "Chuck Palahniuk",
        emojiImgs: "👨🚬👊💣♣🌆",
        genres: ["crime", "satire"],
        year: 1996
    },{
        title: "Frankenstein",
        author: "Mary Shelley",
        emojiImgs: "🧪➕➡️🧟⚰️",
        genres: ["gothic", "science-fiction", "horror-fiction"],
        year: 1818
    },{
        title: "Freaky Friday",
        author: "Mary Rodgers",
        emojiImgs: "🥢🥠👧➡️👩",
        genres: ["childrens","literature","comedy"],
        year: 1972
    },{
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        emojiImgs: "👧🏻🐉💉🇸🇪",
        genres: ["crime","mystery","thriller"],
        year: 2005
    },{
        title: "Hamlet",
        author: "William Shakespeare",
        emojiImgs: "🤴🇩🇰🏰⚔👻💔",
        genres: ["classic", "drama", "crime", "romance", "death"],
        year: 1602
    },{
        title: "Harry Potter and the Methods of Rationality",
        author: "Eliezer Yudkowsky",
        emojiImgs: "📚⚗✨🧙‍♂️👦",
        genres: ["fantasy", "science-fiction"],
        year: 2010
    },{
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        emojiImgs: "👍🌌💛🛸🤖",
        genres: ["science-fiction", "comedy", "surreal"],
        year: 1979      
    },{
        title: "IT",
        author: "Stephen King",
        emojiImgs: "🤡🎈👿🧒",
        genres: ["fiction", "horror", "thriller"],
        year: 1986
    },{
        title: "Les Miserables",
        author: "Victor Hugo",
        emojiImgs: "🇫🇷👮🏻‍♂️🥖🎵",
        genres: ["drama","romance"],
        year: 1862
    },{
        title: "Life of Pi",
        author: "Yann Martel",
        emojiImgs: "👳🛶🌊🐯",
        genres: ["fiction","animals"],
        year: 2001
    },{
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S.Lewis",
        emojiImgs: "🦁🧙‍♀️🚪👧🧒🏞️",
        genres: ["childrens","fantasy"],
        year: 1950
    },{
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      emojiImgs: "🧙‍💍🧝🌋",
      genres: ["fantasy", "adventure"],
      year: 1968
    },{
        title: "Matilda",
        author: "Roald Dahl",
        emojiImgs: "👩‍🏫📚👧🦎🎂✨",
        genres: ["childrens"],
        year: 1988
    },{
        title: "Nineteen Eighty-Four: A Novel",
        author: "George Orwell",
        emojiImgs: "👀👨🏻👩🏻📕💌🐁",
        genres: ["dystopian", "political-fiction", "science-fiction"],
        year: 1949
    },
    {
        title: "Twilight",
        author: "Stephenie Meyer",
        emojiImgs: "❤️🐺🧛‍♂️🌕💑",
        genres: ["young-adult", "fantasy-history", "romance"],
        year: 2005
    },{
        title: "The Strange Case of Dr Jekyll and Mr Hyde",
        author: "Robert Louis Stevenson",
        emojiImgs: "🏴󠁧󠁢󠁳󠁣󠁴󠁿👨‍⚕️🦹‍♂️󠁧󠁢󠁳󠁣󠁴󠁿🧪☯️",
        genres: ["classic","mystery","science-fiction"],
        year: 1886
    },{
        title: "Of Mice and Men",
        author: "John Steinbeck",
        emojiImgs: "🐭🐭➕👨🧔",
        genres: ["classic", "fiction"],
        year: 1937
    },{
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        emojiImgs: "🌼📗🌟🎶",
        genres: ["coming-of-age","yound-adult"],
        year: 1999
    },{
        title: "Twelve Angry Men",
        author: "Reginald Rose",
        emojiImgs:" 1⃣ 2⃣ 😡🧔",
        genres: ["drama","crime"],
        year: 1954
    },{
        title: "The Shining",
        author: "Stephen King",
        emojiImgs: "👨🔪🚪😱",
        genres: ["horror"],
        year: 1977
    },{
        title: "War and Peace",
        author: "Leo Tolstoy",
        emojiImgs: "⚔️🕊️💌🇷🇺",
        genres: ["historical-fiction"],
        year: 1869
    },{
        title: "The War of the Worlds",
        author: " H. G. Wells",
        emojiImgs: "👽👾🌎⚔️💣",
        genres: ["science-fiction","war","space","thriller"],
        year: 1898
    },{
        title: "Winnie the Pooh",
        author: "A. A. Milne",
        emojiImgs: "🧸🍯🐅🤔",
        genres: ["childrens", "classic", "fantasy"],
        year: 1926
    }
]
