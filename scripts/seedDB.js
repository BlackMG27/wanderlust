const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/wanderlust", { useNewUrlParser: true }
);

const reviewSeed = [
    {
        displayName: "Stephanie",
        img: "https://drive.google.com/file/d/163yqYBFtTS2zrDssTa3AXcLsJwdpWDMx/view",
        program: "NUI Study Abroad",
        country: "Ireland",
        countryCode: "IE",
        tripOrg: "National University of Ireland",
        review: "My experience in Ireland was first through a study abroad semester, and later when I returned to work in Ireland. I spent most of my 20’s in Ireland, and it gave me more time to explore. Being in Ireland, I felt foreign. Everything was in English and Gaelic. Directions were confusing. It took me two hours to find public transportation. There was a group of us on the trip from the same university, but I soon left my American friends for Irish friends. It took me a while to get used to things, like heating up only the amount of water you need yourself. I learned to be more positive with my experiences. Traveling abroad challenges your identity and what you want to be. I took back with me being more respectful of resources. I feel that conservation is better in Europe than in the US. Overall studying abroad is a life-changing mind-boggling experience that opens so many doors.",
        dateStart: 01 / 22 / 2005,
        dateEnd: 04 / 05 / 2005,
        rating: 5

    },
    {
        displayName: "Leah",
        img: "https://drive.google.com/file/d/1ysdV96gxCNu-JDv9kek51QkFvBLgoaQk/view",
        program: "",
        country: "Israel",
        countryCode: "IL",
        tripOrg: "",
        review: "I went to Israel for 10 months after I graduated high school as a gap year program. I read about Israel my whole life and being there felt so good.  I was alone for the first time, away from home, and I was able to explore the country. It was a year of self-reflection to know who you are as a person. It was a time for me to learn a lot and grow. I feel like Chicago is a loud city and Israel gave me a chance to clear and collect my thoughts. Israelis are very hospitable and one of my fondest memories was visiting my rabbi’s house with one hundred people. The experience strengthened my connection to my culture, religion and my social skills. I was really timid in high school, and Israel helped me to get out of my comfort zone. If I could’ve I would’ve stayed for another year!",
        dateStart: 05 / 15 / 2008,
        dateEnd: 03 / 21 / 2008,
        rating: 5

    },
    {
        displayName: "Carlos",
        img: "https://drive.google.com/file/d/1a8la1TWylQGAo0rZ0RYkWqwK0Y-WKalI/view",
        program: "China: Health, Environment, and Traditional Chinese Medicine",
        country: "China",
        countryCode: "CN",
        tripOrg: "SIT",
        review: "I went to Kunming, China, for six weeks. While there, I studied traditional Chinese medicine and Mandarin. My group was fairly small – a total of ten people went on the trip. I didn’t know what to expect when I first arrived. I definitely felt a language barrier, which frustrated me, but it was cool to be thousands of miles away from home. I got to visit Hong Kong and different nearby rural cities with their own vibe and environment. I became more sensitive of people’s cultural backgrounds. I learned how to pick up on body language, tone of voice and hand gestures. Taking Mandarin on the trip allowed me to get an A in the class back at my school!",
        dateStart: 02 / 15 / 2015,
        dateEnd: 05 / 29 / 2015,
        rating: 5

    },
    {
        displayName: "Savanna",
        img: "https://drive.google.com/file/d/1Bde8QpJvAuC7qfUvB4RDIQ24NqaEuE_K/view",
        program: "Study Abroad Program through Central St. Martins Graphic Design Program",
        country: "Great Britain",
        countryCode: "GB",
        tripOrg: "University of Arts London",
        review: "I went to London for four months to study graphic design at the University of Arts London in central St. Martins. I’ve travelled a lot but moving to a new place with no family is probably one of the scariest things you can do as a person. I thought London was going to be this grand city and that I would know where everything was based off of my prior studies, but the street systems and driving were so vastly different. I felt utterly lost riding in the cab to my new apartment. I traveled with other students from the University of Illinois at Chicago, including my best friend which really helped the whole moving away part. We were part of one group, but we were all studying individual things and having our own experiences. This trip challenged me academically. The schooling system was very different than American school and I struggled a lot with some of my classes. But I felt I learned more of my capabilities as a human being. My favorite part of studying abroad was traveling. I would spend five day weekends in different countries learning about different cultures, which is one of my favorite things to do. I would recommend this trip. I believe we all need trips like these to fully understand who we are as people.",
        dateStart: 01 / 07 / 2015,
        dateEnd: 04 / 11 / 2015,
        rating: 4

    },
    {
        displayName: "Szymon",
        img: "https://drive.google.com/file/d/16xKU3KAgH64RGVmAtaXfSF8ZInDHFU8d/view",
        program: "DIS Summer",
        country: "Denmark",
        countryCode: "DK",
        tripOrg: "DIS",
        review: "I traveled to Copenhagen for seven weeks during the summer of 2017 with DIS Study Abroad, followed by a month of traveling on my own. While in Copenhagen, I studied industrial design and furniture design, which really furthered my industrial design skills. The DIS program included students studying architecture, graphics, furniture and industrial design. Each course had 20-30 students and all of us got to meet each other, but we were linked with our particular course. We had study tours and planned events, along with time off to meet with whomever you wanted. My experience made me very happy. I got to meet a lot of people, and made relationships. I got to know who I am as a designer while I was by myself. Learning about other cultures, styles and techniques of design, I got to reflect on what’s important to me, and looking at other people’s styles helped me to develop my own style. My time living alone made me more responsible and independent, and helped me to become a better person. I would recommend this trip.",
        dateStart: 06 / 11 / 2017,
        dateEnd: 07 / 27 / 2017,
        rating: 5

    },
    {
        displayName: "Brynna",
        img: "https://drive.google.com/file/d/1rUO12iLm-i3wjh2u9R59ayAr-RUlLeOt/view",
        program: "Tokai Cool Japan",
        country: "Japan",
        countryCode: "JP",
        tripOrg: "Tokai University",
        review: "I traveled to Tokyo for two weeks with a program called Tokai Cool Japan. The trip I went on had more of a cultural edge, and it understood that most students weren’t there to study primarily. I was the only student on the trip from the continuous US, and I became friends with students from Thailand, Malaysia, Korea, Japan and Taiwan. The greatest treasures of my trip were the friends I made. One of my new friends I still talk to every day! I learned that even though you come from different countries, you can find a lot in common and become very close to people outside your country. If I had known I could extend my trip, I would’ve! Overall it was a fantastic experience. I would definitely recommend it.",
        dateStart: 07 / 22 / 2015,
        dateEnd: 08 / 02 / 2015,
        rating: 5

    },
    {
        displayName: "Edith",
        img: "https://drive.google.com/file/d/1kCunp75enfgy_fD0bHa1Vze-5nCQ0SAR/view",
        program: "Arts & Sciences, Seoul",
        country: "South Korea",
        countryCode: "KR",
        tripOrg: "CIEE",
        review: "I went to South Korea for four months with a CIEE Program. While in Korea, I studied Korean philosophy, cultural anthropology, inter-cultural relations, and Korean 100. The program helped show me around, and they have mentoring programs where you can pair up with a Korean student which was nice. Korea is completely different from the US. Everyone I met in Korea had such a different story than my own whereas all of my friends here in the US are the same. You learn a lot from the friends you make on the trip. I would definitely recommend this trip because every day here is the same, but in Korea there is always something to do.",
        dateStart: 02 / 19 / 2015,
        dateEnd: 06 / 21 / 2015,
        rating: 5

    },
    {
        displayName: "Ogechi",
        img: "https://drive.google.com/file/d/1d6sP6v5m6vNIx7_SLpKGgcDbRQpGBDUO/view",
        program: "Italian Culture Through the Arts in Sienna ",
        country: "Italy",
        countryCode: "IT",
        tripOrg: "University of Illinois at Chicago",
        review: "I went to Italy for six weeks as part of UIC’s Italian Culture Through the Arts in Sienna program. On the program, I took Italian 101 with international students, and Italian Society Through the Arts with the other students from UIC. I was scared and excited at first. I was the first person in my family to go to Europe, but I was also going in with little knowledge about the place. After a few days, I just explored my surroundings, always taking pictures with my camera. It helped me appreciate my time there and as a bonus it made for great conversation. I could not recommend this trip enough. You are able to make new friends and experiences, be humbled on your supposed importance in the world, and you might become a storyteller, but it can’t be yours if you don’t try.",
        dateStart: 06 / 17 / 2015,
        dateEnd: 07 / 25 / 2015,
        rating: 5

    },
    {
        displayName: "Aelieen",
        img: "https://drive.google.com/file/d/0B7brPyr_2JtXVTZrRFBuY1l2VWVIeHJRN1F2ZTJ4Wm15UDdZ/view",
        program: "",
        country: "Thailand",
        countryCode: "TH",
        tripOrg: "DePaul University",
        review: "I studied abroad in Hong Kong and Thailand on a two-week program that was run by DePaul University. When I arrived, I felt a little sense of familiarity. This is due to my mixed Asian heritage. Before our class started, our professor met with us to give us tips. He advised us to be patient and polite even when things do not go as planned. As it turns out, politeness and patience goes a long way when it comes to communicating with locals, especially when there are some language barriers. The experience opened my mind to so many things. It gave me the motivation to continue exploring what the world has to offer by broadening my horizons. I would definitely recommend this trip.",
        dateStart: 06 / 21 / 2011,
        dateEnd: 07 / 05 / 2011,
        rating: 5

    },
    {
        displayName: "Michael",
        img: "",
        program: "CIMBA",
        country: "Italy",
        countryCode: "IT",
        tripOrg: "Saint Mary’s University of Minnesota ",
        review: "The trip was amazing. The CIMBA program is a heavy business course program that focuses on major level classes for business majors while providing experience from another culture. The classes related to my major while also allowing me time to travel and learn about the world and myself from a whole new perspective. Each weekend we had full class trips planned or individual trips planned in order to better understand the world from a European lens. I felt that the program was too short because I would have loved to stay longer, but I wouldn’t change my experience for anything. Weekends were heavily focused on travel and out-of-classroom learning while weekdays were heavily focused on our main studies. The balance was perfect and the living was very adequate. Meals were prepared as traditionally as possible so we would have the full experience. Every aspect of it was terrific and it taught me so much about myself and the world around me.  I'd recommend this trip in a heartbeat. It gave me a chance to grow individually while still focusing on my studies. It also provided me with other individuals, who later became lifelong friends, to travel with and to learn from so I never felt alone. We had a mutual purpose on top of our own individual purposes to be there and to grow as human beings.",
        dateStart: 01 / 14 / 2015,
        dateEnd: 04 / 07 / 2015,
        rating: 5

    },
    {
        displayName: "Nick",
        img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/1909945_503322521016_4600_n.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=e86e112797c830bac66bb86289c1cd05&oe=5D76F0CA",
        program: "Temple University Japan",
        country: "Japan",
        countryCode: "JP",
        tripOrg: "Temple University",
        review: "This was a really fun semester abroad. I loved that I got to stay in a dorm with my peers and live in Tokyo proper. The other students knew English pretty well so it made socializing and classes go quicker. This was a great time and learning experience that gave you freedom to make the most out of the trip.",
        dateStart: 08 / 20 / 2006,
        dateEnd: 12 / 10 / 2006,
        rating: 4

    },
];


const userSeed = [
    {
        username: "Edith",
        password: "testpassword22",
        email: "edith@edith.com",
        userCreated: new Date,
        review: [("5cc9e8975aa5872fe49e936b")]
    }
]


db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0)
    }).catch(err => {
        console.error(err);
        process.exit(1)
    })

// db.Review
//     .remove({})
//     .then(() => db.Review.collection.insertMany(reviewSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });
