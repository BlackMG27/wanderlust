const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wanderlust", { useNewUrlParser: true });

const reviewSeed = [
    {
        displayName: "Stephanie",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlva-21ddfaf4-e93f-4770-9e06-48351bef1daf.jpg?token=eyJ0eXAiOi" +
            "JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxN" +
            "WVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsI" +
            "m9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMWVmN2MwLWMxZTUtNGM1Ni1iMTljLTUxMmU2YTVmNGIzN1wvZ" +
            "GQ2ZGx2YS0yMWRkZmFmNC1lOTNmLTQ3NzAtOWUwNi00ODM1MWJlZjFkYWYuanBnIn1dXSwiYXVkIjpbI" +
            "nVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2N2tz5YgXGRwQwSSmOzAB6i9MVXk04WwekbaW-ESr" +
            "Dg",
        program: "NUI Study Abroad",
        country: "Ireland",
        countryCode: "IE",
        tripOrg: "National University of Ireland",
        review: "My experience in Ireland was first through a study abroad semester, and later wh" +
            "en I returned to work in Ireland. I spent most of my 20’s in Ireland, and it gav" +
            "e me more time to explore. Being in Ireland, I felt foreign. Everything was in E" +
            "nglish and Gaelic. Directions were confusing. It took me two hours to find publi" +
            "c transportation. There was a group of us on the trip from the same university, " +
            "but I soon left my American friends for Irish friends. It took me a while to get" +
            " used to things, like heating up only the amount of water you need yourself. I l" +
            "earned to be more positive with my experiences. Traveling abroad challenges your" +
            " identity and what you want to be. I took back with me being more respectful of " +
            "resources. I feel that conservation is better in Europe than in the US. Overall " +
            "studying abroad is a life-changing mind-boggling experience that opens so many d" +
            "oors.",
        dateStart: "2005/01/22 00:00",
        dateEnd: "2005/04/05 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Leah",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlvm-cb6aa42d-5484-400a-936c-3f51ea28b841.jpg?token=eyJ0eXAiOi" +
            "JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxN" +
            "WVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsI" +
            "m9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMWVmN2MwLWMxZTUtNGM1Ni1iMTljLTUxMmU2YTVmNGIzN1wvZ" +
            "GQ2ZGx2bS1jYjZhYTQyZC01NDg0LTQwMGEtOTM2Yy0zZjUxZWEyOGI4NDEuanBnIn1dXSwiYXVkIjpbI" +
            "nVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p032qtiwa-DBs0B0XkqP8YAdugsMxJDGUJGyPx8Pt" +
            "aY",
        program: "",
        country: "Israel",
        countryCode: "IL",
        tripOrg: "",
        review: "I went to Israel for 10 months after I graduated high school as a gap year progr" +
            "am. I read about Israel my whole life and being there felt so good.  I was alone" +
            " for the first time, away from home, and I was able to explore the country. It w" +
            "as a year of self-reflection to know who you are as a person. It was a time for " +
            "me to learn a lot and grow. I feel like Chicago is a loud city and Israel gave m" +
            "e a chance to clear and collect my thoughts. Israelis are very hospitable and on" +
            "e of my fondest memories was visiting my rabbi’s house with one hundred people. " +
            "The experience strengthened my connection to my culture, religion and my social " +
            "skills. I was really timid in high school, and Israel helped me to get out of my" +
            " comfort zone. If I could’ve I would’ve stayed for another year!",
        dateStart: "2008/05/15 00:00",
        dateEnd: "2009/03/21 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Carlos",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlwf-61e971f9-07d3-495a-955b-f345356a464f.jpg/v1/fill/w_1192,h" +
            "_670,q_70,strp/stone_forest_2_by_strontium_chloride_dd6dlwf-pre.jpg?token=eyJ0eX" +
            "AiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZ" +
            "DQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlM" +
            "CIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNTExZWY3YzAtYzFlNS00YzU2L" +
            "WIxOWMtNTEyZTZhNWY0YjM3XC9kZDZkbHdmLTYxZTk3MWY5LTA3ZDMtNDk1YS05NTViLWYzNDUzNTZhN" +
            "DY0Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyY" +
            "XRpb25zIl19.mgX0KC_vgXsuzrVZxLADj0ChxGPj2VmmQdERqbX8P44",
        program: "China: Health, Environment, and Traditional Chinese Medicine",
        country: "China",
        countryCode: "CN",
        tripOrg: "SIT",
        review: "I went to Kunming, China, for six weeks. While there, I studied traditional Chin" +
            "ese medicine and Mandarin. My group was fairly small – a total of ten people wen" +
            "t on the trip. I didn’t know what to expect when I first arrived. I definitely f" +
            "elt a language barrier, which frustrated me, but it was cool to be thousands of " +
            "miles away from home. I got to visit Hong Kong and different nearby rural cities" +
            " with their own vibe and environment. I became more sensitive of people’s cultur" +
            "al backgrounds. I learned how to pick up on body language, tone of voice and han" +
            "d gestures. Taking Mandarin on the trip allowed me to get an A in the class back" +
            " at my school!",
        dateStart: "2015/02/15 00:00",
        dateEnd: "2015/05/29 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Savanna",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlw3-bc542f11-6186-4b4a-8530-8c542caaecbe.jpg?token=eyJ0eXAiOi" +
            "JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxN" +
            "WVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsI" +
            "m9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMWVmN2MwLWMxZTUtNGM1Ni1iMTljLTUxMmU2YTVmNGIzN1wvZ" +
            "GQ2ZGx3My1iYzU0MmYxMS02MTg2LTRiNGEtODUzMC04YzU0MmNhYWVjYmUuanBnIn1dXSwiYXVkIjpbI" +
            "nVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UcGemwpFoYnX09058FT6Fu3x5iRAygPugr9iKoT8g" +
            "jo",
        program: "Study Abroad Program through Central St. Martins Graphic Design Program",
        country: "Great Britain",
        countryCode: "GB",
        tripOrg: "University of Arts London",
        review: "I went to London for four months to study graphic design at the University of Ar" +
            "ts London in central St. Martins. I’ve travelled a lot but moving to a new place" +
            " with no family is probably one of the scariest things you can do as a person. I" +
            " thought London was going to be this grand city and that I would know where ever" +
            "ything was based off of my prior studies, but the street systems and driving wer" +
            "e so vastly different. I felt utterly lost riding in the cab to my new apartment" +
            ". I traveled with other students from the University of Illinois at Chicago, inc" +
            "luding my best friend which really helped the whole moving away part. We were pa" +
            "rt of one group, but we were all studying individual things and having our own e" +
            "xperiences. This trip challenged me academically. The schooling system was very " +
            "different than American school and I struggled a lot with some of my classes. Bu" +
            "t I felt I learned more of my capabilities as a human being. My favorite part of" +
            " studying abroad was traveling. I would spend five day weekends in different cou" +
            "ntries learning about different cultures, which is one of my favorite things to " +
            "do. I would recommend this trip. I believe we all need trips like these to fully" +
            " understand who we are as people.",
        dateStart: "2015/01/07 00:00",
        dateEnd: "2015/04/11 00:00",
        rating: 4,
        isArchived: false

    }, {
        displayName: "Szymon",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlws-b5766d85-d136-4f70-87f7-107a45cb299f.jpg/v1/fill/w_1057,h" +
            "_756,q_70,strp/syzmon_profile_by_strontium_chloride_dd6dlws-pre.jpg?token=eyJ0eX" +
            "AiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZ" +
            "DQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlM" +
            "CIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTE1IiwicGF0aCI6IlwvZlwvNTExZWY3YzAtYzFlNS00YzU2L" +
            "WIxOWMtNTEyZTZhNWY0YjM3XC9kZDZkbHdzLWI1NzY2ZDg1LWQxMzYtNGY3MC04N2Y3LTEwN2E0NWNiM" +
            "jk5Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyY" +
            "XRpb25zIl19.iapVGlR3LlnszqoT_nCxHGXuixUDzODUlqDzaKIBzhc",
        program: "DIS Summer",
        country: "Denmark",
        countryCode: "DK",
        tripOrg: "DIS",
        review: "I traveled to Copenhagen for seven weeks during the summer of 2017 with DIS Stud" +
            "y Abroad, followed by a month of traveling on my own. While in Copenhagen, I stu" +
            "died industrial design and furniture design, which really furthered my industria" +
            "l design skills. The DIS program included students studying architecture, graphi" +
            "cs, furniture and industrial design. Each course had 20-30 students and all of u" +
            "s got to meet each other, but we were linked with our particular course. We had " +
            "study tours and planned events, along with time off to meet with whomever you wa" +
            "nted. My experience made me very happy. I got to meet a lot of people, and made " +
            "relationships. I got to know who I am as a designer while I was by myself. Learn" +
            "ing about other cultures, styles and techniques of design, I got to reflect on w" +
            "hat’s important to me, and looking at other people’s styles helped me to develop" +
            " my own style. My time living alone made me more responsible and independent, an" +
            "d helped me to become a better person. I would recommend this trip.",
        dateStart: "2017/06/11 00:00",
        dateEnd: "2017/07/27 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Brynna",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlur-5f99354c-1e6f-4a8b-aa04-6c852e45fd1e.jpg?token=eyJ0eXAiOi" +
            "JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxN" +
            "WVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsI" +
            "m9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMWVmN2MwLWMxZTUtNGM1Ni1iMTljLTUxMmU2YTVmNGIzN1wvZ" +
            "GQ2ZGx1ci01Zjk5MzU0Yy0xZTZmLTRhOGItYWEwNC02Yzg1MmU0NWZkMWUuanBnIn1dXSwiYXVkIjpbI" +
            "nVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-IMzoump-rc90QcibBXZjU3ZMtahymjP92dZaBNVk" +
            "g0",
        program: "Tokai Cool Japan",
        country: "Japan",
        countryCode: "JP",
        tripOrg: "Tokai University",
        review: "I traveled to Tokyo for two weeks with a program called Tokai Cool Japan. The tr" +
            "ip I went on had more of a cultural edge, and it understood that most students w" +
            "eren’t there to study primarily. I was the only student on the trip from the con" +
            "tinuous US, and I became friends with students from Thailand, Malaysia, Korea, J" +
            "apan and Taiwan. The greatest treasures of my trip were the friends I made. One " +
            "of my new friends I still talk to every day! I learned that even though you come" +
            " from different countries, you can find a lot in common and become very close to" +
            " people outside your country. If I had known I could extend my trip, I would’ve!" +
            " Overall it was a fantastic experience. I would definitely recommend it.",
        dateStart: "2015/07/22 00:00",
        dateEnd: "2015/08/02 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Edith",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dluz-483331f5-b0ac-4c7d-bded-61e430220803.jpg?token=eyJ0eXAiOi" +
            "JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxN" +
            "WVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsI" +
            "m9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMWVmN2MwLWMxZTUtNGM1Ni1iMTljLTUxMmU2YTVmNGIzN1wvZ" +
            "GQ2ZGx1ei00ODMzMzFmNS1iMGFjLTRjN2QtYmRlZC02MWU0MzAyMjA4MDMuanBnIn1dXSwiYXVkIjpbI" +
            "nVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JUuP4Y1EJ7uUzRafaYZ44eKc-ezTE83Toq_GJYWmy" +
            "GU",
        program: "Arts & Sciences, Seoul",
        country: "South Korea",
        countryCode: "KR",
        tripOrg: "CIEE",
        review: "I went to South Korea for four months with a CIEE Program. While in Korea, I stu" +
            "died Korean philosophy, cultural anthropology, inter-cultural relations, and Kor" +
            "ean 100. The program helped show me around, and they have mentoring programs whe" +
            "re you can pair up with a Korean student which was nice. Korea is completely dif" +
            "ferent from the US. Everyone I met in Korea had such a different story than my o" +
            "wn whereas all of my friends here in the US are the same. You learn a lot from t" +
            "he friends you make on the trip. I would definitely recommend this trip because " +
            "every day here is the same, but in Korea there is always something to do.",
        dateStart: "2015/02/19 00:00",
        dateEnd: "2015/06/21 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Ogechi",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlvw-d57c9dba-62a8-46b4-bf96-a3eeed7ea73a.jpg/v1/fill/w_1192,h" +
            "_670,q_70,strp/ogechi_italy_by_strontium_chloride_dd6dlvw-pre.jpg?token=eyJ0eXAi" +
            "OiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQ" +
            "xNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCI" +
            "sIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzUxMWVmN2MwLWMxZTUtNGM1Ni1" +
            "iMTljLTUxMmU2YTVmNGIzN1wvZGQ2ZGx2dy1kNTdjOWRiYS02MmE4LTQ2YjQtYmY5Ni1hM2VlZWQ3ZWE" +
            "3M2EuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF" +
            "0aW9ucyJdfQ.n1lbapq2bPaw99_nKABttyG1Od1qwrUHUUgvjacL8VM",
        program: "Italian Culture Through the Arts in Sienna ",
        country: "Italy",
        countryCode: "IT",
        tripOrg: "University of Illinois at Chicago",
        review: "I went to Italy for six weeks as part of UIC’s Italian Culture Through the Arts " +
            "in Sienna program. On the program, I took Italian 101 with international student" +
            "s, and Italian Society Through the Arts with the other students from UIC. I was " +
            "scared and excited at first. I was the first person in my family to go to Europe" +
            ", but I was also going in with little knowledge about the place. After a few day" +
            "s, I just explored my surroundings, always taking pictures with my camera. It he" +
            "lped me appreciate my time there and as a bonus it made for great conversation. " +
            "I could not recommend this trip enough. You are able to make new friends and exp" +
            "eriences, be humbled on your supposed importance in the world, and you might bec" +
            "ome a storyteller, but it can’t be yours if you don’t try.",
        dateStart: "2015/06/17 00:00",
        dateEnd: "2015/07/25 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Aelieen",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/511ef7c0-c1e5-4c56-b19" +
            "c-512e6a5f4b37/dd6dlx0-80668d62-bcbc-458c-8a4c-44f6ab8816cf.jpg?token=eyJ0eXAiOi" +
            "JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxN" +
            "WVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsI" +
            "m9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMWVmN2MwLWMxZTUtNGM1Ni1iMTljLTUxMmU2YTVmNGIzN1wvZ" +
            "GQ2ZGx4MC04MDY2OGQ2Mi1iY2JjLTQ1OGMtOGE0Yy00NGY2YWI4ODE2Y2YuanBnIn1dXSwiYXVkIjpbI" +
            "nVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xitVDfdh63fu3Clchl3B889bj7G5j2NyzVU7pUVZh" +
            "bY",
        program: "",
        country: "Thailand",
        countryCode: "TH",
        tripOrg: "DePaul University",
        review: "I studied abroad in Hong Kong and Thailand on a two-week program that was run by" +
            " DePaul University. When I arrived, I felt a little sense of familiarity. This i" +
            "s due to my mixed Asian heritage. Before our class started, our professor met wi" +
            "th us to give us tips. He advised us to be patient and polite even when things d" +
            "o not go as planned. As it turns out, politeness and patience goes a long way wh" +
            "en it comes to communicating with locals, especially when there are some languag" +
            "e barriers. The experience opened my mind to so many things. It gave me the moti" +
            "vation to continue exploring what the world has to offer by broadening my horizo" +
            "ns. I would definitely recommend this trip.",
        dateStart: "2011/06/21 00:00",
        dateEnd: "2011/07/05 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Michael",
        img: "",
        program: "CIMBA",
        country: "Italy",
        countryCode: "IT",
        tripOrg: "Saint Mary’s University of Minnesota ",
        review: "The trip was amazing. The CIMBA program is a heavy business course program that " +
            "focuses on major level classes for business majors while providing experience fr" +
            "om another culture. The classes related to my major while also allowing me time " +
            "to travel and learn about the world and myself from a whole new perspective. Eac" +
            "h weekend we had full class trips planned or individual trips planned in order t" +
            "o better understand the world from a European lens. I felt that the program was " +
            "too short because I would have loved to stay longer, but I wouldn’t change my ex" +
            "perience for anything. Weekends were heavily focused on travel and out-of-classr" +
            "oom learning while weekdays were heavily focused on our main studies. The balanc" +
            "e was perfect and the living was very adequate. Meals were prepared as tradition" +
            "ally as possible so we would have the full experience. Every aspect of it was te" +
            "rrific and it taught me so much about myself and the world around me.  I'd recom" +
            "mend this trip in a heartbeat. It gave me a chance to grow individually while st" +
            "ill focusing on my studies. It also provided me with other individuals, who late" +
            "r became lifelong friends, to travel with and to learn from so I never felt alon" +
            "e. We had a mutual purpose on top of our own individual purposes to be there and" +
            " to grow as human beings.",
        dateStart: "2015/01/14 00:00",
        dateEnd: "2015/04/17 00:00",
        rating: 5,
        isArchived: false

    }, {
        displayName: "Nick",
        img: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/1909945_503322521016_4600_n.jpg?_n" +
            "c_cat=104&_nc_ht=scontent-ort2-1.xx&oh=e86e112797c830bac66bb86289c1cd05&oe=5D76F" +
            "0CA",
        program: "Temple University Japan",
        country: "Japan",
        countryCode: "JP",
        tripOrg: "Temple University",
        review: "This was a really fun semester abroad. I loved that I got to stay in a dorm with" +
            " my peers and live in Tokyo proper. The other students knew English pretty well " +
            "so it made socializing and classes go quicker. This was a great time and learnin" +
            "g experience that gave you freedom to make the most out of the trip.",
        dateStart: "2006/08/20 00:00",
        dateEnd: "2006/12/10 00:00",
        rating: 4,
        isArchived: false

    }
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

// db     .User     .remove({})     .then(() =>
// db.User.collection.insertMany(userSeed))     .then(data => {
// console.log(data.result.n + " records inserted!");         process.exit(0) })
//     .catch(err => {         console.error(err);         process.exit(1) })

db
    .Review
    .remove({})
    .then(() => db.Review.collection.insertMany(reviewSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });