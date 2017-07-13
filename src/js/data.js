const mcuData = [
    {
        "type": "Film",
        "name": "Iron Man",
        "releaseDate": [2008, 4, 2],
        "watchOrder": 10
    },
    {
        "type": "Film",
        "name": "The Incredible Hulk",
        "releaseDate": [2008, 5, 13],
        "watchOrder": 20
    },
    {
        "type": "Short Film",
        "name": "The Consultant",
        "releaseDate": [2011, 8, 13],
        "watchOrder": 30
    },
    {
        "type": "Film",
        "name": "Iron Man 2",
        "releaseDate": [2010, 4, 7],
        "watchOrder": 40
    },
    {
        "type": "Short Film",
        "name": "A Funny Thing Happened on the Way to Thor's Hammer",
        "releaseDate": [2011, 9, 25],
        "watchOrder": 50
    },
    {
        "type": "Film",
        "name": "Thor",
        "releaseDate": [2011, 4, 6],
        "watchOrder": 60
    },
    {
        "type": "Film",
        "name": "Captain America: The First Avenger",
        "releaseDate": [2011, 6, 22],
        "watchOrder": 70,
        "cronoOrder": 10
    },
    {
        "type": "Short Film",
        "name": "Agent Carter",
        "releaseDate": [2013, 8, 3],
        "watchOrder": 80,
        "cronoOrder": 100
    },
    {
        "type": "Film",
        "name": "The Avengers",
        "releaseDate": [2012, 3, 4],
        "watchOrder": 90
    },
    {
        "type": "Short Film",
        "name": "Item 47",
        "releaseDate": [2012, 8, 25],
        "watchOrder": 100
    },
    {
        "type": "Film",
        "name": "Iron Man 3",
        "releaseDate": [2013, 4, 3],
        "watchOrder": 110
    },
    {
        "type": "Short Film",
        "name": "All Hail the King",
        "releaseDate": [2014, 1, 4],
        "watchOrder": 120
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Pilot", "releaseDate": [2013, 8, 24], "watchOrder": 130},
            {"season": 1, "episode": 2, "title": "0-8-4", "releaseDate": [2013, 9, 1], "watchOrder": 140},
            {"season": 1, "episode": 3, "title": "The Asset", "releaseDate": [2013, 9, 8], "watchOrder": 150},
            {"season": 1, "episode": 4, "title": "Eye Spy", "releaseDate": [2013, 9, 15], "watchOrder": 160},
            {"season": 1, "episode": 5, "title": "Girl in the Flower Dress", "releaseDate": [2013, 9, 22], "watchOrder": 170},
            {"season": 1, "episode": 6, "title": "FZZT", "releaseDate": [2013, 10, 5], "watchOrder": 180},
            {"season": 1, "episode": 7, "title": "The Hub", "releaseDate": [2013, 10, 12], "watchOrder": 190},
            {"season": 1, "episode": 8, "title": "The Well", "releaseDate": [2013, 10, 19], "watchOrder": 210},
            {"season": 1, "episode": 9, "title": "Repairs", "releaseDate": [2013, 10, 26], "watchOrder": 220},
            {"season": 1, "episode": 10, "title": "The Bridge", "releaseDate": [2013, 11, 10], "watchOrder": 230},
            {"season": 1, "episode": 11, "title": "The Magical Place", "releaseDate": [2014, 0, 7], "watchOrder": 240},
            {"season": 1, "episode": 12, "title": "Seeds", "releaseDate": [2014, 0, 14], "watchOrder": 250},
            {"season": 1, "episode": 13, "title": "T.R.A.C.K.S.", "releaseDate": [2014, 1, 4], "watchOrder": 260},
            {"season": 1, "episode": 14, "title": "T.A.H.I.T.I.", "releaseDate": [2014, 2, 4], "watchOrder": 270},
            {"season": 1, "episode": 15, "title": "Yes Men", "releaseDate": [2014, 2, 11], "watchOrder": 280},
            {"season": 1, "episode": 16, "title": "End of the Beginning", "releaseDate": [2014, 3, 1], "watchOrder": 290},
            {"season": 1, "episode": 17, "title": "Turn, Turn, Turn", "releaseDate": [2014, 3, 8], "watchOrder": 310},
            {"season": 1, "episode": 18, "title": "Providence", "releaseDate": [2014, 3, 15], "watchOrder": 320},
            {"season": 1, "episode": 19, "title": "The Only Light in the Darkness", "releaseDate": [2014, 3, 22], "watchOrder": 330},
            {"season": 1, "episode": 20, "title": "Nothing Personal", "releaseDate": [2014, 3, 29], "watchOrder": 340},
            {"season": 1, "episode": 21, "title": "Ragtag", "releaseDate": [2014, 4, 6], "watchOrder": 350},
            {"season": 1, "episode": 22, "title": "Beginning of the End", "releaseDate": [2014, 4, 13], "watchOrder": 360}
        ]
    },
    {
        "type": "Film",
        "name": "Thor: The Dark World",
        "releaseDate": [2013, 10, 8],
        "watchOrder": 200
    },
    {
        "type": "Film",
        "name": "Captain America: The Winter Soldier",
        "releaseDate": [2014, 3, 4],
        "watchOrder": 300
    },
    {
        "type": "Film",
        "name": "Guardians of the Galaxy",
        "releaseDate": [2014, 7, 1],
        "watchOrder": 370
    },
    {
        "type": "Television",
        "name": "Daredevil",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Into the Ring", "releaseDate": [2015, 3, 10], "watchOrder": 380},
            {"season": 1, "episode": 2, "title": "Cut Man", "releaseDate": [2015, 3, 10], "watchOrder": 390},
            {"season": 1, "episode": 3, "title": "Rabbit in a Snowstorm", "releaseDate": [2015, 3, 10], "watchOrder": 400},
            {"season": 1, "episode": 4, "title": "In the Blood", "releaseDate": [2015, 3, 10], "watchOrder": 410},
            {"season": 1, "episode": 5, "title": "World on Fire", "releaseDate": [2015, 3, 10], "watchOrder": 420},
            {"season": 1, "episode": 6, "title": "Condemned", "releaseDate": [2015, 3, 10], "watchOrder": 430},
            {"season": 1, "episode": 7, "title": "Stick", "releaseDate": [2015, 3, 10], "watchOrder": 440},
            {"season": 1, "episode": 8, "title": "Shadows in the Glass", "releaseDate": [2015, 3, 10], "watchOrder": 450},
            {"season": 1, "episode": 9, "title": "Speak of the Devil", "releaseDate": [2015, 3, 10], "watchOrder": 460},
            {"season": 1, "episode": 10, "title": "Nelson v. Murdock", "releaseDate": [2015, 3, 10], "watchOrder": 470},
            {"season": 1, "episode": 11, "title": "The Path of the Righteous", "releaseDate": [2015, 3, 10], "watchOrder": 480},
            {"season": 1, "episode": 12, "title": "The Ones We Leave Behind", "releaseDate": [2015, 3, 10], "watchOrder": 490},
            {"season": 1, "episode": 13, "title": "Daredevil", "releaseDate": [2015, 3, 10], "watchOrder": 500}
        ]
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "episodes": [
            {"season": 2, "episode": 1, "title": "Shadows", "releaseDate": [2014, 8, 23], "watchOrder": 510},
            {"season": 2, "episode": 2, "title": "Heavy Is the Head", "releaseDate": [2014, 8, 30], "watchOrder": 520},
            {"season": 2, "episode": 3, "title": "Making Friends and Influencing People", "releaseDate": [2014, 9, 7], "watchOrder": 530},
            {"season": 2, "episode": 4, "title": "Face My Enemy", "releaseDate": [2014, 9, 14], "watchOrder": 540},
            {"season": 2, "episode": 5, "title": "A Hen in the Wolf House", "releaseDate": [2014, 9, 21], "watchOrder": 550},
            {"season": 2, "episode": 6, "title": "A Fractured House", "releaseDate": [2014, 9, 28], "watchOrder": 560},
            {"season": 2, "episode": 7, "title": "The Writing on the Wall", "releaseDate": [2014, 10, 11], "watchOrder": 570},
            {"season": 2, "episode": 8, "title": "The Things We Bury", "releaseDate": [2014, 10, 18], "watchOrder": 580},
            {"season": 2, "episode": 9, "title": "...Ye Who Enter Here", "releaseDate": [2014, 11, 2], "watchOrder": 590},
            {"season": 2, "episode": 10, "title": "What They Become", "releaseDate": [2014, 11, 9], "watchOrder": 600},
            {"season": 2, "episode": 11, "title": "Aftershocks", "releaseDate": [2015, 2, 3], "watchOrder": 690},
            {"season": 2, "episode": 12, "title": "Who You Really Are", "releaseDate": [2015, 2, 10], "watchOrder": 700},
            {"season": 2, "episode": 13, "title": "One of Us", "releaseDate": [2015, 2, 17], "watchOrder": 710},
            {"season": 2, "episode": 14, "title": "Love in the Time of Hydra", "releaseDate": [2015, 2, 24], "watchOrder": 720},
            {"season": 2, "episode": 15, "title": "One Door Closes", "releaseDate": [2015, 2, 31], "watchOrder": 730},
            {"season": 2, "episode": 16, "title": "Afterlife", "releaseDate": [2015, 3, 7], "watchOrder": 740},
            {"season": 2, "episode": 17, "title": "Melinda", "releaseDate": [2015, 3, 14], "watchOrder": 750},
            {"season": 2, "episode": 18, "title": "The Frenemy of My Enemy", "releaseDate": [2015, 3, 21], "watchOrder": 760},
            {"season": 2, "episode": 19, "title": "The Dirty Half Dozen", "releaseDate": [2015, 3, 28], "watchOrder": 770},
            {"season": 2, "episode": 20, "title": "Scars", "releaseDate": [2015, 4, 5], "watchOrder": 790},
            {"season": 2, "episode": 21, "title": "S.O.S. Part 1", "releaseDate": [2015, 4, 12], "watchOrder": 800},
            {"season": 2, "episode": 22, "title": "S.O.S. Part 2", "releaseDate": [2015, 4, 12], "watchOrder": 810}
        ]
    },
    {
        "type": "Television",
        "name": "Agent Carter",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Now is Not the End", "releaseDate": [2015, 0, 6], "watchOrder": 610, "cronoOrder": 20},
            {"season": 1, "episode": 2, "title": "Bridge and Tunnel", "releaseDate": [2015, 0, 6], "watchOrder": 620, "cronoOrder": 30},
            {"season": 1, "episode": 3, "title": "Time and Tide", "releaseDate": [2015, 0, 13], "watchOrder": 630, "cronoOrder": 40},
            {"season": 1, "episode": 4, "title": "The Blitzkrieg Button", "releaseDate": [2015, 0, 27], "watchOrder": 640, "cronoOrder": 50},
            {"season": 1, "episode": 5, "title": "The Iron Ceiling", "releaseDate": [2015, 1, 3], "watchOrder": 650, "cronoOrder": 60},
            {"season": 1, "episode": 6, "title": "A Sin to Err", "releaseDate": [2015, 1, 10], "watchOrder": 660, "cronoOrder": 70},
            {"season": 1, "episode": 7, "title": "Snafu", "releaseDate": [2015, 1, 17], "watchOrder": 670, "cronoOrder": 80},
            {"season": 1, "episode": 8, "title": "Valediction", "releaseDate": [2015, 1, 24], "watchOrder": 680, "cronoOrder": 90}
        ]
    },
    {
        "type": "Film",
        "name": "The Avengers: Age of Ultron",
        "releaseDate": [2015, 4, 1],
        "watchOrder": 780
    },
    {
        "type": "Film",
        "name": "Ant-Man",
        "releaseDate": [2015, 6, 17],
        "watchOrder": 820
    },
    {
        "type": "Television",
        "name": "Jessica Jones",
        "episodes": [
            {"season": 1, "episode": 1, "title": "AKA Ladies Night", "releaseDate": [2015, 10, 20], "watchOrder": 830},
            {"season": 1, "episode": 2, "title": "AKA Crush Syndrome", "releaseDate": [2015, 10, 20], "watchOrder": 840},
            {"season": 1, "episode": 3, "title": "AKA It's Called Whiskey", "releaseDate": [2015, 10, 20], "watchOrder": 850},
            {"season": 1, "episode": 4, "title": "AKA 99 Friends", "releaseDate": [2015, 10, 20], "watchOrder": 860},
            {"season": 1, "episode": 5, "title": "AKA The Sandwich Saved Me", "releaseDate": [2015, 10, 20], "watchOrder": 870},
            {"season": 1, "episode": 6, "title": "AKA You're a Winner!", "releaseDate": [2015, 10, 20], "watchOrder": 880},
            {"season": 1, "episode": 7, "title": "AKA Top Shelf Perverts", "releaseDate": [2015, 10, 20], "watchOrder": 890},
            {"season": 1, "episode": 8, "title": "AKA WWJD?", "releaseDate": [2015, 10, 20], "watchOrder": 900},
            {"season": 1, "episode": 9, "title": "AKA Sin Bin", "releaseDate": [2015, 10, 20], "watchOrder": 910},
            {"season": 1, "episode": 10, "title": "AKA 1,000 Cuts", "releaseDate": [2015, 10, 20], "watchOrder": 920},
            {"season": 1, "episode": 11, "title": "AKA I've Got the Blues", "releaseDate": [2015, 10, 20], "watchOrder": 930},
            {"season": 1, "episode": 12, "title": "AKA Take a Bloody Number", "releaseDate": [2015, 10, 20], "watchOrder": 940},
            {"season": 1, "episode": 13, "title": "AKA Smile", "releaseDate": [2015, 10, 20], "watchOrder": 950}
        ]
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "episodes": [
            {"season": 3, "episode": 1, "title": "Laws of Nature", "releaseDate": [2015, 8, 29], "watchOrder": 960},
            {"season": 3, "episode": 2, "title": "Purpose in the Machine", "releaseDate": [2015, 9, 6], "watchOrder": 970},
            {"season": 3, "episode": 3, "title": "A Wanted (Inhu)man", "releaseDate": [2015, 9, 13], "watchOrder": 980},
            {"season": 3, "episode": 4, "title": "Devils You Know", "releaseDate": [2015, 9, 20], "watchOrder": 990},
            {"season": 3, "episode": 5, "title": "4,722 Hours", "releaseDate": [2015, 9, 27], "watchOrder": 1000},
            {"season": 3, "episode": 6, "title": "Among Us Hide...", "releaseDate": [2015, 10, 3], "watchOrder": 1010},
            {"season": 3, "episode": 7, "title": "Chaos Theory", "releaseDate": [2015, 10, 10], "watchOrder": 1020},
            {"season": 3, "episode": 8, "title": "Many Heads, One Tale", "releaseDate": [2015, 10, 17], "watchOrder": 1030},
            {"season": 3, "episode": 9, "title": "Closure", "releaseDate": [2015, 11, 1], "watchOrder": 1040},
            {"season": 3, "episode": 10, "title": "Maveth", "releaseDate": [2015, 11, 8], "watchOrder": 1050},
            {"season": 3, "episode": 11, "title": "Bouncing Back", "releaseDate": [2016, 2, 8], "watchOrder": 1290},
            {"season": 3, "episode": 12, "title": "The Inside Man", "releaseDate": [2016, 2, 15], "watchOrder": 1300},
            {"season": 3, "episode": 13, "title": "Parting Shot", "releaseDate": [2016, 2, 22], "watchOrder": 1310},
            {"season": 3, "episode": 14, "title": "Watchdogs", "releaseDate": [2016, 2, 29], "watchOrder": 1320},
            {"season": 3, "episode": 15, "title": "Spacetime", "releaseDate": [2016, 3, 5], "watchOrder": 1330},
            {"season": 3, "episode": 16, "title": "Paradise Lost", "releaseDate": [2016, 3, 12], "watchOrder": 1340},
            {"season": 3, "episode": 17, "title": "The Team", "releaseDate": [2016, 3, 19], "watchOrder": 1350},
            {"season": 3, "episode": 18, "title": "The Singularity", "releaseDate": [2016, 3, 26], "watchOrder": 1360},
            {"season": 3, "episode": 19, "title": "Failed Experiments", "releaseDate": [2016, 4, 3], "watchOrder": 1370},
            {"season": 3, "episode": 20, "title": "Emancipation", "releaseDate": [2016, 4 ,10], "watchOrder": 1390},
            {"season": 3, "episode": 21, "title": "Absolution", "releaseDate": [2016, 4, 17], "watchOrder": 1400},
            {"season": 3, "episode": 22, "title": "Ascension", "releaseDate": [2016, 4, 17], "watchOrder": 1410}
        ]
    },
    {
        "type": "Television",
        "name": "Agent Carter",
        "episodes": [
            {"season": 2, "episode": 1, "title": "The Lady in the Lake", "releaseDate": [2016, 0, 19], "watchOrder": 1060, "cronoOrder": 110},
            {"season": 2, "episode": 2, "title": "A View in the Dark", "releaseDate": [2016, 0, 19], "watchOrder": 1070, "cronoOrder": 120},
            {"season": 2, "episode": 3, "title": "Better Angels", "releaseDate": [2016, 0, 26], "watchOrder": 1080, "cronoOrder": 130},
            {"season": 2, "episode": 4, "title": "Smoke & Mirrors", "releaseDate": [2016, 1, 2], "watchOrder": 1090, "cronoOrder": 140},
            {"season": 2, "episode": 5, "title": "The Atomic Job", "releaseDate": [2016, 1, 9], "watchOrder": 1100, "cronoOrder": 150},
            {"season": 2, "episode": 6, "title": "Life of the Party", "releaseDate": [2016, 1, 16], "watchOrder": 1110, "cronoOrder": 160},
            {"season": 2, "episode": 7, "title": "Monsters", "releaseDate": [2016, 1, 16], "watchOrder": 1120, "cronoOrder": 170},
            {"season": 2, "episode": 8, "title": "The Edge of Mystery", "releaseDate": [2016, 1, 23], "watchOrder": 1130, "cronoOrder": 180},
            {"season": 2, "episode": 9, "title": "A Little Song and Dance", "releaseDate": [2016, 1, 23], "watchOrder": 1140, "cronoOrder": 190},
            {"season": 2, "episode": 10, "title": "Hollywood Ending", "releaseDate": [2016, 2, 1], "watchOrder": 1150, "cronoOrder": 200}
        ]
    },
    {
        "type": "Television",
        "name": "Daredevil",
        "episodes": [
            {"season": 2, "episode": 1, "title": "Bang", "releaseDate": [2016, 2, 18], "watchOrder": 1160},
            {"season": 2, "episode": 2, "title": "Dogs to a Gunfight", "releaseDate": [2016, 2, 18], "watchOrder": 1170},
            {"season": 2, "episode": 3, "title": "New York's Finest", "releaseDate": [2016, 2, 18], "watchOrder": 1180},
            {"season": 2, "episode": 4, "title": "Penny and Dime", "releaseDate": [2016, 2, 18], "watchOrder": 1190},
            {"season": 2, "episode": 5, "title": "Kinbaku", "releaseDate": [2016, 2, 18], "watchOrder": 1200},
            {"season": 2, "episode": 6, "title": "Regrets Only", "releaseDate": [2016, 2, 18], "watchOrder": 1210},
            {"season": 2, "episode": 7, "title": "Semper Fidelis", "releaseDate": [2016, 2, 18], "watchOrder": 1220},
            {"season": 2, "episode": 8, "title": "Guilty as Sin", "releaseDate": [2016, 2, 18], "watchOrder": 1230},
            {"season": 2, "episode": 9, "title": "Seven Minutes in Heaven", "releaseDate": [2016, 2, 18], "watchOrder": 1240},
            {"season": 2, "episode": 10, "title": "The Man in the Box", "releaseDate": [2016, 2, 18], "watchOrder": 1250},
            {"season": 2, "episode": 11, "title": ".380", "releaseDate": [2016, 2, 18], "watchOrder": 1260},
            {"season": 2, "episode": 12, "title": "The Dark at the End of the Tunnel", "releaseDate": [2016, 2, 18], "watchOrder": 1270},
            {"season": 2, "episode": 13, "title": "A Cold Day in Hell's Kitchen", "releaseDate": [2016, 2, 18], "watchOrder": 1280}
        ]
    },
    {
        "type": "Film",
        "name": "Captain America: Civil War",
        "releaseDate": [2016, 4, 6],
        "watchOrder": 1380
    },
    {
        "type": "Television",
        "name": "Luke Cage",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Moment of Truth", "releaseDate": [2016, 8, 30], "watchOrder": 1420},
            {"season": 1, "episode": 2, "title": "Code of the Streets", "releaseDate": [2016, 8, 30], "watchOrder": 1430},
            {"season": 1, "episode": 3, "title": "Who's Gonna Take the Weight?", "releaseDate": [2016, 8, 30], "watchOrder": 1440},
            {"season": 1, "episode": 4, "title": "Step in the Arena", "releaseDate": [2016, 8, 30], "watchOrder": 1450},
            {"season": 1, "episode": 5, "title": "Just to Get a Rep", "releaseDate": [2016, 8, 30], "watchOrder": 1460},
            {"season": 1, "episode": 6, "title": "Suckas Need Bodyguards", "releaseDate": [2016, 8, 30], "watchOrder": 1470},
            {"season": 1, "episode": 7, "title": "Manifest", "releaseDate": [2016, 8, 30], "watchOrder": 1480},
            {"season": 1, "episode": 8, "title": "Blowin' Up the Spot", "releaseDate": [2016, 8, 30], "watchOrder": 1490},
            {"season": 1, "episode": 9, "title": "DWYCK", "releaseDate": [2016, 8, 30], "watchOrder": 1500},
            {"season": 1, "episode": 10, "title": "Take It Personal", "releaseDate": [2016, 8, 30], "watchOrder": 1510},
            {"season": 1, "episode": 11, "title": "Now You're Mine", "releaseDate": [2016, 8, 30], "watchOrder": 1520},
            {"season": 1, "episode": 12, "title": "Soliloquy of Chaos", "releaseDate": [2016, 8, 30], "watchOrder": 1530},
            {"season": 1, "episode": 13, "title": "You Know My Steez", "releaseDate": [2016, 8, 30], "watchOrder": 1540}
        ]
    },
    {
        "type": "Film",
        "name": "Doctor Strange",
        "releaseDate": [2016, 10, 4],
        "watchOrder": 1550
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "releaseDate": [2016, 8, 20],
        "episodes": [
            {"season": 4, "episode": 1, "title": "The Ghost", "releaseDate": [2016, 8, 20], "watchOrder": 1560},
            {"season": 4, "episode": 2, "title": "Meet the New Boss", "releaseDate": [2016, 8, 27], "watchOrder": 1570},
            {"season": 4, "episode": 3, "title": "Uprising", "releaseDate": [2016, 9, 11], "watchOrder": 1580},
            {"season": 4, "episode": 4, "title": "Let Me Stand Next to Your Fire", "releaseDate": [2016, 9, 18], "watchOrder": 1590},
            {"season": 4, "episode": 5, "title": "Lockup", "releaseDate": [2016, 9, 25], "watchOrder": 1600},
            {"season": 4, "episode": 6, "title": "The Good Samaritan", "releaseDate": [2016, 10, 1], "watchOrder": 1610},
            {"season": 4, "episode": 7, "title": "Deals With Our Devils", "releaseDate": [2016, 10, 29], "watchOrder": 1620},
            {"season": 4, "episode": 8, "title": "The Laws of Inferno Dynamics", "releaseDate": [2016, 11, 6], "watchOrder": 1630},
            {"season": 4, "episode": 9, "title": "Broken Promises", "releaseDate": [2017, 0, 10], "watchOrder": 1640},
            {"season": 4, "episode": 10, "title": "The Patriot", "releaseDate": [2017, 0, 17], "watchOrder": 1650},
            {"season": 4, "episode": 11, "title": "Wake Up", "releaseDate": [2017, 0, 24], "watchOrder": 1660},
            {"season": 4, "episode": 12, "title": "Hot Potato Soup", "releaseDate": [2017, 0, 31], "watchOrder": 1670},
            {"season": 4, "episode": 13, "title": "BOOM", "releaseDate": [2017, 1, 7], "watchOrder": 1680},
            {"season": 4, "episode": 14, "title": "The Man Behind the Shield", "releaseDate": [2017, 1, 14], "watchOrder": 1690},
            {"season": 4, "episode": 15, "title": "Self Control", "releaseDate": [2017, 1, 21], "watchOrder": 1700},
            {"season": 4, "episode": 16, "title": "What If...", "releaseDate": [2017, 3, 4], "watchOrder": 1840},
            {"season": 4, "episode": 17, "title": "Identity and Change", "releaseDate": [2017, 3, 11], "watchOrder": 1850},
            {"season": 4, "episode": 18, "title": "No Regrets", "releaseDate": [2017, 3, 18], "watchOrder": 1860},
            {"season": 4, "episode": 19, "title": "All the Madame's Men", "releaseDate": [2017, 3, 25], "watchOrder": 1870},
            {"season": 4, "episode": 20, "title": "Farewell, Cruel World!", "releaseDate": [2017, 4, 2], "watchOrder": 1880},
            {"season": 4, "episode": 21, "title": "The Return", "releaseDate": [2017, 4, 9], "watchOrder": 1890},
            {"season": 4, "episode": 22, "title": "World's End", "releaseDate": [2017, 4, 16], "watchOrder": 1900}
        ]
    },
    {
        "type": "Television",
        "name": "Iron Fist",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Snow Gives Way", "releaseDate": [2017, 2, 17], "watchOrder": 1710},
            {"season": 1, "episode": 2, "title": "Shadow Hawk Takes Flight", "releaseDate": [2017, 2, 17], "watchOrder": 1720},
            {"season": 1, "episode": 3, "title": "Rolling Thunder Cannon Punch", "releaseDate": [2017, 2, 17], "watchOrder": 1730},
            {"season": 1, "episode": 4, "title": "Eight Diagram Dragon Palm", "releaseDate": [2017, 2, 17], "watchOrder": 1740},
            {"season": 1, "episode": 5, "title": "Under Leaf Pluck Lotus", "releaseDate": [2017, 2, 17], "watchOrder": 1750},
            {"season": 1, "episode": 6, "title": "Immortal Emerges from Cave", "releaseDate": [2017, 2, 17], "watchOrder": 1760},
            {"season": 1, "episode": 7, "title": "Felling Tree with Roots", "releaseDate": [2017, 2, 17], "watchOrder": 1770},
            {"season": 1, "episode": 8, "title": "The Blessing of Many Fractures", "releaseDate": [2017, 2, 17], "watchOrder": 1780},
            {"season": 1, "episode": 9, "title": "The Mistress of All Agonies", "releaseDate": [2017, 2, 17], "watchOrder": 1790},
            {"season": 1, "episode": 10, "title": "Black Tiger Steals Heart", "releaseDate": [2017, 2, 17], "watchOrder": 1800},
            {"season": 1, "episode": 11, "title": "Lead Horse Back to Stable", "releaseDate": [2017, 2, 17], "watchOrder": 1810},
            {"season": 1, "episode": 12, "title": "Bar the Big Boss", "releaseDate": [2017, 2, 17], "watchOrder": 1820},
            {"season": 1, "episode": 13, "title": "Dragon Plays with Fire", "releaseDate": [2017, 2, 17], "watchOrder": 1830}
        ]
    },
    {
        "type": "Film",
        "name": "Guardians of the Galaxy Vol. 2",
        "releaseDate": [2017, 4, 5],
        "watchOrder": 1910
    },
    {
        "type": "Film",
        "name": "Spider-Man: Homecoming",
        "releaseDate": [2017, 6, 7],
        "watchOrder": 1920
    },
    {
        "type": "Television",
        "name": "The Defenders",
        "episodes": [
            {"season": 1, "episode": 1, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1921},
            {"season": 1, "episode": 2, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1922},
            {"season": 1, "episode": 3, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1923},
            {"season": 1, "episode": 4, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1924},
            {"season": 1, "episode": 5, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1925},
            {"season": 1, "episode": 6, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1926},
            {"season": 1, "episode": 7, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1927},
            {"season": 1, "episode": 8, "title": "-", "releaseDate": [2017, 7, 18], "watchOrder": 1928},
        ]
    },
    {
        "type": "Television",
        "name": "Inhumans",
        "episodes": [
            {"season": 1, "episode": 1, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 1930},
            {"season": 1, "episode": 2, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 1940},
            {"season": 1, "episode": 3, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 1950},
            {"season": 1, "episode": 4, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 1960},
            {"season": 1, "episode": 5, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 1970},
            {"season": 1, "episode": 6, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 1980},
            {"season": 1, "episode": 7, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 1990},
            {"season": 1, "episode": 8, "title": "-", "releaseDate": [2017, 9, 29], "watchOrder": 2000}
        ]
    },
    {
        "type": "Film",
        "name": "Thor: Ragnarok",
        "releaseDate": [2017, 10, 3],
        "watchOrder": 2010
    },
    {
        "type": "Television",
        "name": "The Punisher",
        "episodes": [
            {"season": 1, "episode": 1, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2011},
            {"season": 1, "episode": 2, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2012},
            {"season": 1, "episode": 3, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2013},
            {"season": 1, "episode": 4, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2014},
            {"season": 1, "episode": 5, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2015},
            {"season": 1, "episode": 6, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2016},
            {"season": 1, "episode": 7, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2017},
            {"season": 1, "episode": 8, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2018},
            {"season": 1, "episode": 9, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2019},
            {"season": 1, "episode": 10, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2020},
            {"season": 1, "episode": 11, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2021},
            {"season": 1, "episode": 12, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2022},
            {"season": 1, "episode": 13, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2023},
        ]
    },
    {
        "type": "Film",
        "name": "Black Panther",
        "releaseDate": [2018, 1, 16],
        "watchOrder": 2025
    },
    {
        "type": "Film",
        "name": "Avengers: Infinity War",
        "releaseDate": [2018, 4, 4],
        "watchOrder": 2030
    },
    {
        "type": "Film",
        "name": "Ant-Man and the Wasp",
        "releaseDate": [2018, 6, 6],
        "watchOrder": 2040
    },
    {
        "type": "Television",
        "name": "Cloak & Dagger",
        "episodes": [
            {"season": 1, "episode": 1, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2050},
            {"season": 1, "episode": 2, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2060},
            {"season": 1, "episode": 3, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2070},
            {"season": 1, "episode": 4, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2080},
            {"season": 1, "episode": 5, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2090},
            {"season": 1, "episode": 6, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2100},
            {"season": 1, "episode": 7, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2110},
            {"season": 1, "episode": 8, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2120},
            {"season": 1, "episode": 9, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2130},
            {"season": 1, "episode": 10, "title": "-", "releaseDate": [2017, 11, 31], "watchOrder": 2140},
        ]
    },
    {
        "type": "Film",
        "name": "Captain Marvel",
        "releaseDate": [2019, 2, 8],
        "watchOrder": 2150
    },
    {
        "type": "Film",
        "name": "Avengers: Untitled",
        "releaseDate": [2019, 4, 3],
        "watchOrder": 2160
    },
    {
        "type": "Film",
        "name": "Spiderman: Untitled",
        "releaseDate": [2019, 5, 5],
        "watchOrder": 2170
    },
    {
        "type": "Film",
        "name": "Guardians of the Galaxy Vol. 3",
        "releaseDate": [2020, 0, 1],
        "watchOrder": 2180
    }
];