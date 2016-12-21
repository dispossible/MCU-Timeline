const mcuData = [
    {
        "type": "Film",
        "name": "Iron Man",
        "releaseDate": [2008, 4, 2]
    },
    {
        "type": "Film",
        "name": "The Incredible Hulk",
        "releaseDate": [2008, 5, 13]
    },
    {
        "type": "Short Film",
        "name": "The Consultant",
        "releaseDate": [2011, 8, 13]
    },
    {
        "type": "Film",
        "name": "Iron Man 2",
        "releaseDate": [2010, 4, 7]
    },
    {
        "type": "Short Film",
        "name": "A Funny Thing Happened on the Way to Thor's Hammer",
        "releaseDate": [2011, 9, 25]
    },
    {
        "type": "Film",
        "name": "Thor",
        "releaseDate": [2011, 4, 6]
    },
    {
        "type": "Film",
        "name": "Captain America: The First Avenger",
        "releaseDate": [2011, 6, 22]
    },
    {
        "type": "Short Film",
        "name": "Agent Carter",
        "releaseDate": [2013, 8, 3]
    },
    {
        "type": "Film",
        "name": "The Avengers",
        "releaseDate": [2012, 3, 4]
    },
    {
        "type": "Short Film",
        "name": "Item 47",
        "releaseDate": [2012, 8, 25]
    },
    {
        "type": "Film",
        "name": "Iron Man 3",
        "releaseDate": [2013, 4, 3]
    },
    {
        "type": "Short Film",
        "name": "All Hail the King",
        "releaseDate": [2014, 1, 4]
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Pilot", "releaseDate": [2013, 8, 24]},
            {"season": 1, "episode": 2, "title": "0-8-4", "releaseDate": [2013, 9, 1]},
            {"season": 1, "episode": 3, "title": "The Asset", "releaseDate": [2013, 9, 8]},
            {"season": 1, "episode": 4, "title": "Eye Spy", "releaseDate": [2013, 9, 15]},
            {"season": 1, "episode": 5, "title": "Girl in the Flower Dress", "releaseDate": [2013, 9, 22]},
            {"season": 1, "episode": 6, "title": "FZZT", "releaseDate": [2013, 10, 5]},
            {"season": 1, "episode": 7, "title": "The Hub", "releaseDate": [2013, 10, 12]},
            {"season": 1, "episode": 8, "title": "The Well", "releaseDate": [2013, 10, 19]},
            {"season": 1, "episode": 9, "title": "Repairs", "releaseDate": [2013, 10, 26]},
            {"season": 1, "episode": 10, "title": "The Bridge", "releaseDate": [2013, 11, 10]},
            {"season": 1, "episode": 11, "title": "The Magical Place", "releaseDate": [2014, 0, 7]},
            {"season": 1, "episode": 12, "title": "Seeds", "releaseDate": [2014, 0, 14]},
            {"season": 1, "episode": 13, "title": "T.R.A.C.K.S.", "releaseDate": [2014, 1, 4]},
            {"season": 1, "episode": 14, "title": "T.A.H.I.T.I.", "releaseDate": [2014, 2, 4]},
            {"season": 1, "episode": 15, "title": "Yes Men", "releaseDate": [2014, 2, 11]},
            {"season": 1, "episode": 16, "title": "End of the Beginning", "releaseDate": [2014, 3, 1]},
            {"season": 1, "episode": 17, "title": "Turn, Turn, Turn", "releaseDate": [2014, 3, 8]},
            {"season": 1, "episode": 18, "title": "Providence", "releaseDate": [2014, 3, 15]},
            {"season": 1, "episode": 19, "title": "The Only Light in the Darkness", "releaseDate": [2014, 3, 22]},
            {"season": 1, "episode": 20, "title": "Nothing Personal", "releaseDate": [2014, 3, 29]},
            {"season": 1, "episode": 21, "title": "Ragtag", "releaseDate": [2014, 4, 6]},
            {"season": 1, "episode": 22, "title": "Beginning of the End", "releaseDate": [2014, 4, 13]}
        ]
    },
    {
        "type": "Film",
        "name": "Thor: The Dark World",
        "releaseDate": [2013, 10, 8]
    },
    {
        "type": "Film",
        "name": "Captain America: The Winter Soldier",
        "releaseDate": [2014, 3, 4],
    },
    {
        "type": "Film",
        "name": "Guardians of the Galaxy",
        "releaseDate": [2014, 7, 1],
    },
    {
        "type": "Television",
        "name": "Daredevil",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Into the Ring", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 2, "title": "Cut Man", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 3, "title": "Rabbit in a Snowstorm", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 4, "title": "In the Blood", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 5, "title": "World on Fire", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 6, "title": "Condemned", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 7, "title": "Stick", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 8, "title": "Shadows in the Glass", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 9, "title": "Speak of the Devil", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 10, "title": "Nelson v. Murdock", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 11, "title": "The Path of the Righteous", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 12, "title": "The Ones We Leave Behind", "releaseDate": [2015, 3, 10]},
            {"season": 1, "episode": 13, "title": "Daredevil", "releaseDate": [2015, 3, 10]}
        ]
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "episodes": [
            {"season": 2, "episode": 1, "title": "Shadows", "releaseDate": [2014, 8, 23]},
            {"season": 2, "episode": 2, "title": "Heavy Is the Head", "releaseDate": [2014, 8, 30]},
            {"season": 2, "episode": 3, "title": "Making Friends and Influencing People", "releaseDate": [2014, 9, 7]},
            {"season": 2, "episode": 4, "title": "Face My Enemy", "releaseDate": [2014, 9, 14]},
            {"season": 2, "episode": 5, "title": "A Hen in the Wolf House", "releaseDate": [2014, 9, 21]},
            {"season": 2, "episode": 6, "title": "A Fractured House", "releaseDate": [2014, 9, 28]},
            {"season": 2, "episode": 7, "title": "The Writing on the Wall", "releaseDate": [2014, 10, 11]},
            {"season": 2, "episode": 8, "title": "The Things We Bury", "releaseDate": [2014, 10, 18]},
            {"season": 2, "episode": 9, "title": "...Ye Who Enter Here", "releaseDate": [2014, 11, 2]},
            {"season": 2, "episode": 10, "title": "What They Become", "releaseDate": [2014, 11, 9]},
            {"season": 2, "episode": 11, "title": "Aftershocks", "releaseDate": [2015, 2, 3]},
            {"season": 2, "episode": 12, "title": "Who You Really Are", "releaseDate": [2015, 2, 10]},
            {"season": 2, "episode": 13, "title": "One of Us", "releaseDate": [2015, 2, 17]},
            {"season": 2, "episode": 14, "title": "Love in the Time of Hydra", "releaseDate": [2015, 2, 24]},
            {"season": 2, "episode": 15, "title": "One Door Closes", "releaseDate": [2015, 2, 31]},
            {"season": 2, "episode": 16, "title": "Afterlife", "releaseDate": [2015, 3, 7]},
            {"season": 2, "episode": 17, "title": "Melinda", "releaseDate": [2015, 3, 14]},
            {"season": 2, "episode": 18, "title": "The Frenemy of My Enemy", "releaseDate": [2015, 3, 21]},
            {"season": 2, "episode": 19, "title": "The Dirty Half Dozen", "releaseDate": [2015, 3, 28]},
            {"season": 2, "episode": 20, "title": "Scars", "releaseDate": [2015, 4, 5]},
            {"season": 2, "episode": 21, "title": "S.O.S. Part 1", "releaseDate": [2015, 4, 12]},
            {"season": 2, "episode": 22, "title": "S.O.S. Part 2", "releaseDate": [2015, 4, 12]}
        ]
    },
    {
        "type": "Television",
        "name": "Agent Carter",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Now is Not the End", "releaseDate": [2015, 0, 6]},
            {"season": 1, "episode": 2, "title": "Bridge and Tunnel", "releaseDate": [2015, 0, 6]},
            {"season": 1, "episode": 3, "title": "Time and Tide", "releaseDate": [2015, 0, 13]},
            {"season": 1, "episode": 4, "title": "The Blitzkrieg Button", "releaseDate": [2015, 0, 27]},
            {"season": 1, "episode": 5, "title": "The Iron Ceiling", "releaseDate": [2015, 1, 3]},
            {"season": 1, "episode": 6, "title": "A Sin to Err", "releaseDate": [2015, 1, 10]},
            {"season": 1, "episode": 7, "title": "Snafu", "releaseDate": [2015, 1, 17]},
            {"season": 1, "episode": 8, "title": "Valediction", "releaseDate": [2015, 1, 24]}
        ]
    },
    {
        "type": "Film",
        "name": "The Avengers: Age of Ultron",
        "releaseDate": [2015, 4, 1],
    },
    {
        "type": "Film",
        "name": "Ant-Man",
        "releaseDate": [2015, 6, 17],
    },
    {
        "type": "Television",
        "name": "Jessica Jones",
        "episodes": [
            {"season": 1, "episode": 1, "title": "AKA Ladies Night", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 2, "title": "AKA Crush Syndrome", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 3, "title": "AKA It's Called Whiskey", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 4, "title": "AKA 99 Friends", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 5, "title": "AKA The Sandwich Saved Me", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 6, "title": "AKA You're a Winner!", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 7, "title": "AKA Top Shelf Perverts", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 8, "title": "AKA WWJD?", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 9, "title": "AKA Sin Bin", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 10, "title": "AKA 1,000 Cuts", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 11, "title": "AKA I've Got the Blues", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 12, "title": "AKA Take a Bloody Number", "releaseDate": [2015, 10, 20]},
            {"season": 1, "episode": 13, "title": "AKA Smile", "releaseDate": [2015, 10, 20]}
        ]
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "episodes": [
            {"season": 3, "episode": 1, "title": "Laws of Nature", "releaseDate": [2015, 8, 29]},
            {"season": 3, "episode": 2, "title": "Purpose in the Machine", "releaseDate": [2015, 9, 6]},
            {"season": 3, "episode": 3, "title": "A Wanted (Inhu)man", "releaseDate": [2015, 9, 13]},
            {"season": 3, "episode": 4, "title": "Devils You Know", "releaseDate": [2015, 9, 20]},
            {"season": 3, "episode": 5, "title": "4,722 Hours", "releaseDate": [2015, 9, 27]},
            {"season": 3, "episode": 6, "title": "Among Us Hide...", "releaseDate": [2015, 10, 3]},
            {"season": 3, "episode": 7, "title": "Chaos Theory", "releaseDate": [2015, 10, 10]},
            {"season": 3, "episode": 8, "title": "Many Heads, One Tale", "releaseDate": [2015, 10, 17]},
            {"season": 3, "episode": 9, "title": "Closure", "releaseDate": [2015, 11, 1]},
            {"season": 3, "episode": 10, "title": "Maveth", "releaseDate": [2015, 11, 8]},
            {"season": 3, "episode": 11, "title": "Bouncing Back", "releaseDate": [2016, 2, 8]},
            {"season": 3, "episode": 12, "title": "The Inside Man", "releaseDate": [2016, 2, 15]},
            {"season": 3, "episode": 13, "title": "Parting Shot", "releaseDate": [2016, 2, 22]},
            {"season": 3, "episode": 14, "title": "Watchdogs", "releaseDate": [2016, 2, 29]},
            {"season": 3, "episode": 15, "title": "Spacetime", "releaseDate": [2016, 3, 5]},
            {"season": 3, "episode": 16, "title": "Paradise Lost", "releaseDate": [2016, 3, 12]},
            {"season": 3, "episode": 17, "title": "The Team", "releaseDate": [2016, 3, 19]},
            {"season": 3, "episode": 18, "title": "The Singularity", "releaseDate": [2016, 3, 26]},
            {"season": 3, "episode": 19, "title": "Failed Experiments", "releaseDate": [2016, 4, 3]},
            {"season": 3, "episode": 20, "title": "Emancipation", "releaseDate": [2016, 4 ,10]},
            {"season": 3, "episode": 21, "title": "Absolution", "releaseDate": [2016, 4, 17]},
            {"season": 3, "episode": 22, "title": "Ascension", "releaseDate": [2016, 4, 17]}
        ]
    },
    {
        "type": "Television",
        "name": "Agent Carter",
        "episodes": [
            {"season": 2, "episode": 1, "title": "The Lady in the Lake", "releaseDate": [2016, 0, 19]},
            {"season": 2, "episode": 2, "title": "A View in the Dark", "releaseDate": [2016, 0, 19]},
            {"season": 2, "episode": 3, "title": "Better Angels", "releaseDate": [2016, 0, 26]},
            {"season": 2, "episode": 4, "title": "Smoke & Mirrors", "releaseDate": [2016, 1, 2]},
            {"season": 2, "episode": 5, "title": "The Atomic Job", "releaseDate": [2016, 1, 9]},
            {"season": 2, "episode": 6, "title": "Life of the Party", "releaseDate": [2016, 1, 16]},
            {"season": 2, "episode": 7, "title": "Monsters", "releaseDate": [2016, 1, 16]},
            {"season": 2, "episode": 8, "title": "The Edge of Mystery", "releaseDate": [2016, 1, 23]},
            {"season": 2, "episode": 9, "title": "A Little Song and Dance", "releaseDate": [2016, 1, 23]},
            {"season": 2, "episode": 10, "title": "Hollywood Ending", "releaseDate": [2016, 2, 1]}
        ]
    },
    {
        "type": "Television",
        "name": "Daredevil",
        "episodes": [
            {"season": 2, "episode": 1, "title": "Bang", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 2, "title": "Dogs to a Gunfight", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 3, "title": "New York's Finest", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 4, "title": "Penny and Dime", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 5, "title": "Kinbaku", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 6, "title": "Regrets Only", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 7, "title": "Semper Fidelis", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 8, "title": "Guilty as Sin", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 9, "title": "Seven Minutes in Heaven", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 10, "title": "The Man in the Box", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 11, "title": ".380", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 12, "title": "The Dark at the End of the Tunnel", "releaseDate": [2016, 2, 18]},
            {"season": 2, "episode": 13, "title": "A Cold Day in Hell's Kitchen", "releaseDate": [2016, 2, 18]}
        ]
    },
    {
        "type": "Film",
        "name": "Captain America: Civil War",
        "releaseDate": [2016, 4, 6],
    },
    {
        "type": "Television",
        "name": "Luke Cage",
        "episodes": [
            {"season": 1, "episode": 1, "title": "Moment of Truth", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 2, "title": "Code of the Streets", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 3, "title": "Who's Gonna Take the Weight?", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 4, "title": "Step in the Arena", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 5, "title": "Just to Get a Rep", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 6, "title": "Suckas Need Bodyguards", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 7, "title": "Manifest", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 8, "title": "Blowin' Up the Spot", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 9, "title": "DWYCK", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 10, "title": "Take It Personal", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 11, "title": "Now You're Mine", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 12, "title": "Soliloquy of Chaos", "releaseDate": [2016, 8, 30]},
            {"season": 1, "episode": 13, "title": "You Know My Steez", "releaseDate": [2016, 8, 30]}
        ]
    },
    {
        "type": "Television",
        "name": "Agents of S.H.I.E.L.D.",
        "releaseDate": [2016, 8, 20],
        "episodes": [
            {"season": 4, "episode": 1, "title": "The Ghost", "releaseDate": [2016, 8, 20]},
            {"season": 4, "episode": 2, "title": "Meet the New Boss", "releaseDate": [2016, 8, 27]},
            {"season": 4, "episode": 3, "title": "Uprising", "releaseDate": [2016, 9, 11]},
            {"season": 4, "episode": 4, "title": "Let Me Stand Next to Your Fire", "releaseDate": [2016, 9, 18]},
            {"season": 4, "episode": 5, "title": "Lockup", "releaseDate": [2016, 9, 25]},
            {"season": 4, "episode": 6, "title": "The Good Samaritan", "releaseDate": [2016, 10, 1]},
            {"season": 4, "episode": 7, "title": "Deals With Our Devils", "releaseDate": [2016, 10, 29]},
            {"season": 4, "episode": 8, "title": "The Laws of Inferno Dynamics", "releaseDate": [2016, 11, 6]},
            {"season": 4, "episode": 9, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 10, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 11, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 12, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 13, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 14, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 15, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 16, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 17, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 18, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 19, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 20, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 21, "title": "-", "releaseDate": [2017, 0, 10]},
            {"season": 4, "episode": 22, "title": "-", "releaseDate": [2017, 0, 10]}
        ]
    },
    {
        "type": "Film",
        "name": "Doctor Strange",
        "releaseDate": [2016, 10, 4],
    },
    {
        "type": "Film",
        "name": "Guardians of the Galaxy 2",
        "releaseDate": [2017, 4, 5],
    },
    {
        "type": "Television",
        "name": "Iron Fist",
        "episodes": [
            {"season": 1, "episode": 1, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 2, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 3, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 4, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 5, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 6, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 7, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 8, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 9, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 10, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 11, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 12, "title": "-", "releaseDate": [2017, 2, 17]},
            {"season": 1, "episode": 13, "title": "-", "releaseDate": [2017, 2, 17]}
        ]
    },
    {
        "type": "Film",
        "name": "Spider-Man: Homecoming",
        "releaseDate": [2017, 6, 7],
    },
    {
        "type": "Television",
        "name": "Inhumans",
        "episodes": [
            {"season": 1, "episode": 1, "title": "-", "releaseDate": [2017, 9, 26]},
            {"season": 1, "episode": 2, "title": "-", "releaseDate": [2017, 9, 26]},
            {"season": 1, "episode": 3, "title": "-", "releaseDate": [2017, 9, 26]},
            {"season": 1, "episode": 4, "title": "-", "releaseDate": [2017, 9, 26]},
            {"season": 1, "episode": 5, "title": "-", "releaseDate": [2017, 9, 26]},
            {"season": 1, "episode": 6, "title": "-", "releaseDate": [2017, 9, 26]},
            {"season": 1, "episode": 7, "title": "-", "releaseDate": [2017, 9, 26]},
            {"season": 1, "episode": 8, "title": "-", "releaseDate": [2017, 9, 26]}
        ]
    },
    {
        "type": "Film",
        "name": "Thor: Ragnarok",
        "releaseDate": [2017, 10, 3],
    },
    {
        "type": "Film",
        "name": "Black Panther",
        "releaseDate": [2018, 1, 16],
    },
    {
        "type": "Film",
        "name": "Avengers: Infinity War Part 1",
        "releaseDate": [2018, 4, 4],
    },
    {
        "type": "Film",
        "name": "Ant-Man and the Wasp",
        "releaseDate": [2018, 6, 6],
    },
    {
        "type": "Film",
        "name": "Captain Marvel",
        "releaseDate": [2019, 2, 8],
    },
    {
        "type": "Film",
        "name": "Avengers: Infinity War Part 2",
        "releaseDate": [2019, 4, 3],
    }
    /*{
        "type": "Television",
        "name": "Defenders",
        "releaseDate": [2017, 0, 1],
    },*/
    /*{
        "type": "Television",
        "name": "The Punisher",
        "releaseDate": [2017, 0, 1],
    },*/
];