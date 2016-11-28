'use strict';

angular.module('100bestsolosApp')
    .factory('solosFactory', function(){
        var soloFac = {};
        var solos = [
            {
                artist: "Led Zeppelin",
                guitarBy:"Jimmy Page",
                image:"images/01.jpg",
                no: 1,
                song:"Stairway to Heaven",
                src:"media/Solos/01.mp3"
            },
            {
                artist: "Van Halen",
                guitarBy:"Eddie Van Halen",
                image:"",
                no: 2,
                song:"Eruption",
                src:"media/Solos/02.mp3"
            },
            {
                artist: "Lynyrd Skynyrd",
                guitarBy:"Collins/Rossington",
                image:"",
                no: 3,
                song:"Free Bird",
                src:"media/Solos/03.mp3"
            },
            {
                artist: "Pink Floyd",
                guitarBy:"David Gilmour",
                image:"",
                no: 4,
                song:"Comfortably Numb",
                src:"media/Solos/04.mp3"
            },
            {
                artist: "Jimi Hendrix Experience",
                guitarBy:"Jimi Hendrix",
                image:"",
                no: 5,
                song:"All Along the Watchtower",
                src:"media/Solos/05.mp3"
            },
            {
                artist: "Guns N' Roses",
                guitarBy:"Slash",
                image:"",
                no: 6,
                song:"November Rain",
                src:"media/Solos/06.mp3"
            },
            {
                artist: "Metallica",
                guitarBy:"Kirk Hammett",
                image:"",
                no: 7,
                song:"One",
                src:"media/Solos/07.mp3"
            },
            {
                artist: "Eagles",
                guitarBy:"Fon Felder/Joe Walsh",
                image:"",
                no: 8,
                song:"Hotel California",
                src:"media/Solos/08.mp3"
            },
            {
                artist: "Ozzy Osbourne",
                guitarBy:"Randy Rhoads",
                image:"",
                no: 9,
                song:"Crazy Train",
                src:"media/Solos/09.mp3"
            },
            {
                artist: "Cream",
                guitarBy:"Eric Clapton",
                image:"",
                no: 10,
                song:"Crossroads",
                src:"media/Solos/10.mp3"
            },
            {
                artist: "Jimi Hendrix Experience",
                guitarBy:"Jimi Hendrix",
                image:"",
                no: 11,
                song:"Voodoo Child",
                src:"media/Solos/11.mp3"
            },
            {
                artist: "Chuck Berry",
                guitarBy:"Chuck Berry",
                image:"",
                no: 12,
                song:"Johnny B. Goode",
                src:"media/Solos/12.mp3"
            },
            {
                artist: "Stevie Ray Vaughan",
                guitarBy:"Stevie Ray Vaughan",
                image:"",
                no: 13,
                song:"Texas Flood",
                src:"media/Solos/13.mp3"
            },
            {
                artist: "Derek And The Dominos",
                guitarBy:"Clapton/Allman",
                image:"",
                no: 14,
                song:"Layla",
                src:"media/Solos/14.mp3"
            },
            {
                artist: "Pantera",
                guitarBy:"Dimebag Darrell",
                image:"",
                no: 15,
                song:"Floods",
                src:"media/Solos/15.mp3"
            },
            {
                artist: "Led Zeppelin",
                guitarBy:"Jimmy Page",
                image:"",
                no: 16,
                song:"Heartbreaker",
                src:"media/Solos/16.mp3"
            },
            {
                artist: "Eric Johnson",
                guitarBy:"Eric Johnson",
                image:"",
                no: 17,
                song:"Cliffs of Dover",
                src:"media/Solos/17.mp3"
            },
            {
                artist: "Jimi Hendrix Experience",
                guitarBy:"Jimi Hendrix",
                image:"",
                no: 18,
                song:"Little Wing",
                src:"media/Solos/18.mp3"
            },
            {
                artist: "Deep Purple",
                guitarBy:"Ritchie Blackmore",
                image:"",
                no: 19,
                song:"Highway Star",
                src:"media/Solos/19.mp3"
            },
            {
                artist: "Queen",
                guitarBy:"Brian May",
                image:"",
                no: 20,
                song:"Bohemian Rhapsody",
                src:"media/Solos/20.mp3"
            },
            {
                artist: "Pink Floyd",
                guitarBy:"David Gilmour",
                image:"",
                no: 21,
                song:"Time",
                src:"media/Solos/21.mp3"
            },
            {
                artist: "Dire Straits",
                guitarBy:"Mark Knopfler",
                image:"",
                no: 22,
                song:"Sultans of Swing",
                src:"media/Solos/22.mp3"
            },
            {
                artist: "Rage Against the Machine",
                guitarBy:"Tom Morello",
                image:"",
                no: 23,
                song:"Bulls on Parade",
                src:"media/Solos/23.mp3"
            },
            {
                artist: "Metallica",
                guitarBy:"Kirk Hammett",
                image:"",
                no: 24,
                song:"Fade to Black",
                src:"media/Solos/24.mp3"
            },
            {
                artist: "Jethro Tull",
                guitarBy:"Martin Barre",
                image:"",
                no: 25,
                song:"Aqualung",
                src:"media/Solos/25.mp3"
            },
            {
                artist: "Nirvana",
                guitarBy:"Kurt Cobain",
                image:"",
                no: 26,
                song:"Smells Like Teen Spirit",
                src:"media/Solos/26.mp3"
            },
            {
                artist: "Stevie Ray Vaughan",
                guitarBy:"Stevie Ray Vaughan",
                image:"",
                no: 27,
                song:"Pride And Joy",
                src:"media/Solos/27.mp3"
            },
            {
                artist: "Ozzy Osbourne",
                guitarBy:"Randy Rhoads",
                image:"",
                no: 28,
                song:"Mr. Crowley",
                src:"media/Solos/28.mp3"
            },
            {
                artist: "Steve Vai",
                guitarBy:"Steve Vai",
                image:"",
                no: 29,
                song:"For the Love of God",
                src:"media/Solos/29.mp3"
            },
            {
                artist: "Joe Satriani",
                guitarBy:"Joe Satriani",
                image:"",
                no: 30,
                song:"Surfing with the Alien",
                src:"media/Solos/30.mp3"
            },
            {
                artist: "Ted Nugent",
                guitarBy:"Ted Nugent",
                image:"",
                no: 31,
                song:"Stranglehold",
                src:"media/Solos/31.mp3"
            },
            {
                artist: "Jimi Hendrix",
                guitarBy:"Jimi Hendrix",
                image:"",
                no: 32,
                song:"Machine Gun",
                src:"media/Solos/32.mp3"
            },
            {
                artist: "B.B. King",
                guitarBy:"B.B. King",
                image:"",
                no: 33,
                song:"The Thrill Is Gone",
                src:"media/Solos/33.mp3"
            },
            {
                artist: "Radiohead",
                guitarBy:"Jonny Greenwood",
                image:"",
                no: 34,
                song:"Paranoid Android",
                src:"media/Solos/34.mp3"
            },
            {
                artist: "Pantera",
                guitarBy:"Dimebag Darrell",
                image:"",
                no: 35,
                song:"Cemetry Gates",
                src:"media/Solos/35.mp3"
            },
            {
                artist: "Yngwie J. Malmsteen",
                guitarBy:"Yngwie J. Malmsteen",
                image:"",
                no: 36,
                song:"Black Star",
                src:"media/Solos/36.mp3"
            },
            {
                artist: "Guns N' Roses",
                guitarBy:"Slash",
                image:"",
                no: 37,
                song:"Sweet Child O' Mine",
                src:"media/Solos/37.mp3"
            },
            {
                artist: "Led Zeppelin",
                guitarBy:"Jimmy Page",
                image:"",
                no: 38,
                song:"Whole Lotta Love",
                src:"media/Solos/38.mp3"
            },
            {
                artist: "Neil Young and Crazy Horse",
                guitarBy:"Neil Young",
                image:"",
                no: 39,
                song:"Cortez the Killer",
                src:"media/Solos/39.mp3"
            },
            {
                artist: "Steely Dan",
                guitarBy:"Elliot Randall",
                image:"",
                no: 40,
                song:"Reelin' In the Years",
                src:"media/Solos/40.mp3"
            },
            {
                artist: "Queen",
                guitarBy:"Brian May",
                image:"",
                no: 41,
                song:"Brighton Rock",
                src:"media/Solos/41.mp3"
            },
            {
                artist: "The Beatles",
                guitarBy:"Eric Clapton",
                image:"",
                no: 42,
                song:"While My Guitar Gently Weeps",
                src:"media/Solos/42.mp3"
            },
            {
                artist: "ZZ Top",
                guitarBy:"Billy Gibbons",
                image:"",
                no: 43,
                song:"Sharp Dressed Man",
                src:"media/Solos/43.mp3"
            },
            {
                artist: "Pearl Jam",
                guitarBy:"Mike McCready",
                image:"",
                no: 44,
                song:"Alive",
                src:"media/Solos/44.mp3"
            },
            {
                artist: "The Doors",
                guitarBy:"Robby Krieger",
                image:"",
                no: 45,
                song:"Light My Fire",
                src:"media/Solos/45.mp3"
            },
            {
                artist: "Van Halen",
                guitarBy:"Eddie Van Halen",
                image:"",
                no: 46,
                song:"Hot For Teacher",
                src:"media/Solos/46.mp3"
            },
            {
                artist: "Allman Brothers Band",
                guitarBy:"Dickey Betts",
                image:"",
                no: 47,
                song:"Jessica",
                src:"media/Solos/47.mp3"
            },
            {
                artist: "The Rolling Stones",
                guitarBy:"Keith Richards",
                image:"",
                no: 48,
                song:"Sympathy for Devil",
                src:"media/Solos/48.mp3"
            },
            {
                artist: "Santana",
                guitarBy:"Carlos Santana",
                image:"",
                no: 49,
                song:"Europa",
                src:"media/Solos/49.mp3"
            },
            {
                artist: "KISS",
                guitarBy:"Ace Frehley",
                image:"",
                no: 50,
                song:"Shock Me",
                src:"media/Solos/50.mp3"
            },
            {
                artist: "Metallica",
                guitarBy:"Kirk Hammett",
                image:"",
                no: 51,
                song:"Master of Puppets",
                src:"media/Solos/51.mp3"
            },
            {
                artist: "Jimi Hendrix",
                guitarBy:"Jimi Hendrix",
                image:"",
                no: 52,
                song:"Star-Spangled Banner",
                src:"media/Solos/52.mp3"
            },
            {
                artist: "Led Zeppelin",
                guitarBy:"Jimmy Page",
                image:"",
                no: 53,
                song:"Since I've Been Loving You ",
                src:"media/Solos/53.mp3"
            },
            {
                artist: "Smashing Pumpkins",
                guitarBy:"Billy Corgan",
                image:"",
                no: 54,
                song:"Geek U.S.A.",
                src:"media/Solos/54.mp3"
            },
            {
                artist: "Joe Satriani",
                guitarBy:"Joe Satriani",
                image:"",
                no: 55,
                song:"Satch Boogie",
                src:"media/Solos/55.mp3"
            },
            {
                artist: "Black Sabbath",
                guitarBy:"Tony Iommi",
                image:"",
                no: 56,
                song:"War Pigs",
                src:"media/Solos/56.mp3"
            },
            {
                artist: "Pantera",
                guitarBy:"Dimebag Darrell",
                image:"",
                no: 57,
                song:"Walk",
                src:"media/Solos/57.mp3"
            },
            {
                artist: "Eric Clapton",
                guitarBy:"Eric Clapton",
                image:"",
                no: 58,
                song:"Cocaine",
                src:"media/Solos/58.mp3"
            },
            {
                artist: "The Kinks",
                guitarBy:"Dave Davies",
                image:"",
                no: 59,
                song:"You Really Got Me",
                src:"media/Solos/59.mp3"
            },
            {
                artist: "Frank Zappa",
                guitarBy:"Frank Zappa",
                image:"",
                no: 60,
                song:"Zoot Allures",
                src:"media/Solos/60.mp3"
            },
            {
                artist: "Ozzy Osbourne",
                guitarBy:"Zakk Wylde",
                image:"",
                no: 61,
                song:"No More Tears",
                src:"media/Solos/61.mp3"
            },
            {
                artist: "Pink Floyd",
                guitarBy:"David Gilmore",
                image:"",
                no: 62,
                song:"Money",
                src:"media/Solos/62.mp3"
            },
            {
                artist: "Soundgarden",
                guitarBy:"Kim Thayil",
                image:"",
                no: 63,
                song:"Black Hole Sun",
                src:"media/Solos/63a.mp3"
            },
            {
                artist: "Prince",
                guitarBy:"Dez Dickerson",
                image:"",
                no: 64,
                song:"Little Red Corvette",
                src:"media/Solos/64.mp3"
            },
            {
                artist: "Nirvana",
                guitarBy:"Kurt Cobain",
                image:"",
                no: 65,
                song:"In Bloom",
                src:"media/Solos/65a.mp3"
            },
            {
                artist: "The Allman Brothers",
                guitarBy:"Allman/Betts",
                image:"",
                no: 66,
                song:"Blue Sky",
                src:"media/Solos/66.mp3"
            },
            {
                artist: "Michael Jackson",
                guitarBy:"Eddie Van Halen",
                image:"",
                no: 67,
                song:"Beat It",
                src:"media/Solos/67.mp3"
            },
            {
                artist: "The Who",
                guitarBy: "Steve Howe",
                image:"",
                no: 68,
                song:"Starship Trooper",
                src:"media/Solos/68.mp3"
            },
            {
                artist: "The Beatles",
                guitarBy: "George Harrison",
                image:"",
                no: 69,
                song:"And Your Bird Can Sing",
                src:"media/Solos/69.mp3"
            },
            {
                artist: "Jimi Hendrix Experience",
                guitarBy: "Jimi Hendrix",
                image:"",
                no: 70,
                song:"Purple Haze",
                src:"media/Solos/70.mp3"
            },
            {
                artist: "ّFunkadelic",
                guitarBy: "Eddie Hazel",
                image:"",
                no: 71,
                song:"Maggot Brain",
                src:"media/Solos/71.mp3"
            },
            {
                artist: "Aerosmith",
                guitarBy: "Joe Perry",
                image:"",
                no: 72,
                song:"Walk This Way",
                src:"media/Solos/72.mp3"
            },
            {
                artist: "Phish",
                guitarBy: "Trey Anastasio",
                image:"",
                no: 73,
                song:"Stash",
                src:"media/Solos/73.mp3"
            },
            {
                artist: "Deep Purple",
                guitarBy: "Ritchie Blackmore",
                image:"",
                no: 74,
                song:"Lazy",
                src:"media/Solos/74.mp3"
            },
            {
                artist: "The Who",
                guitarBy: "Pete Townsend",
                image:"",
                no: 75,
                song:"Won't Get Fooled Again",
                src:"media/Solos/75.mp3"
            },
            {
                artist: "Neil Young and Crazy Horse",
                guitarBy: "Neil Young",
                image:"",
                no: 76,
                song:"Cinnamon Girl",
                src:"media/Solos/76.mp3"
            },
            {
                artist: "Alice in Chains",
                guitarBy: "Jerry Cantrell",
                image:"",
                no: 77,
                song:"Man in the Box",
                src:"media/Solos/75.mp3"
            },
            {
                artist: "Grateful Dead",
                guitarBy: "Jerry Garcia",
                image:"",
                no: 78,
                song:"Truckin'",
                src:"media/Solos/78.mp3"
            },
            {
                artist: "Van Halen",
                guitarBy: "Eddie Van Halen",
                image:"",
                no: 79,
                song:"Mean Street",
                src:"media/Solos/79.mp3"
            },
            {
                artist: "AC/DC",
                guitarBy: "Angus Young",
                image:"",
                no: 80,
                song:"You Shook Me All Night Long",
                src:"media/Solos/80.mp3"
            },
            {
                artist: "The Velvet Underground",
                guitarBy: "Hunter/Wagner",
                image:"",
                no: 81,
                song:"Sweet Jane",
                src:"media/Solos/81.mp3"
            },
            {
                artist: "King Crimson",
                guitarBy: "Robert Fripp",
                image:"",
                no: 82,
                song:"21st Century Schizoid Man",
                src:"media/Solos/82.mp3"
            },
            {
                artist: "Stevie Ray Vaughan",
                guitarBy: "Stevie Ray Vaughan",
                image:"",
                no: 83,
                song:"Scuttle Buttin'",
                src:"media/Solos/80.mp3"
            },
            {
                artist: "Sublime",
                guitarBy: "Brad Nowell",
                image:"",
                no: 84,
                song:"Santeria",
                src:"media/Solos/84a.mp3"
            },
            {
                artist: "David Bowie",
                guitarBy: "Mick Ronson",
                image:"",
                no: 85,
                song:"Moonage Daydream",
                src:"media/Solos/85.mp3"
            },
            {
                artist: "The Allman Brothers",
                guitarBy: "Allman/Betts",
                image:"",
                no: 86,
                song:"Whipping Post",
                src:"media/Solos/86.mp3"
            },
            {
                artist: "Living Colour",
                guitarBy: "Vernon Reid",
                image:"",
                no: 87,
                song:"Cult of Personality",
                src:"media/Solos/87a.mp3"
            },
            {
                artist: "Steely Dan",
                guitarBy: "Larry Carlton",
                image:"",
                no: 88,
                song:"Kid Charlemagne",
                src:"media/Solos/88.mp3"
            },
            {
                artist: "Rage Against the Machine",
                guitarBy: "Tom Morello",
                image:"",
                no: 89,
                song:"Killing in the Name",
                src:"media/Solos/89.mp3"
            },
            {
                artist: "Eric Clapton",
                guitarBy: "Eric Clapton",
                image:"",
                no: 90,
                song:"Let It Rain",
                src:"media/Solos/90.mp3"
            },
            {
                artist: "Creedence Clearwater Revival",
                guitarBy: "John Fogerty",
                image:"",
                no: 91,
                song:"I Heard It Though the Grapevine",
                src:"media/Solos/91.mp3"
            },
            {
                artist: "Stray Cats",
                guitarBy: "Brian Setzer",
                image:"",
                no: 92,
                song:"Stray Cat Strut",
                src:"media/Solos/92.mp3"
            },
            {
                artist: "The Doors",
                guitarBy: "Robby Krieger",
                image:"",
                no: 93,
                song:"The End",
                src:"media/Solos/93.mp3"
            },
            {
                artist: "Rush",
                guitarBy: "Alex Lifeson",
                image:"",
                no: 94,
                song:"Working Man",
                src:"media/Solos/94.mp3"
            },
            {
                artist: "Pearl Jam",
                guitarBy: "Mike McCready",
                image:"",
                no: 95,
                song:"Yellow Ledbetter",
                src:"media/Solos/95.mp3"
            },
            {
                artist: "The Rolling Stones",
                guitarBy: "Keith Richards",
                image:"",
                no: 96,
                song:"Honky Tonk Women",
                src:"media/Solos/96.mp3"
            },
            {
                artist: "Smashing Pumpkins",
                guitarBy: "Billy Corgan",
                image:"",
                no: 97,
                song:"Cherub Rock",
                src:"media/Solos/97a.mp3"
            },
            {
                artist: "Dream Theater",
                guitarBy: "John Petrucci",
                image:"",
                no: 98,
                song:"Under a Glass Moon",
                src:"media/Solos/98.mp3"
            },
            {
                artist: "Jeff Beck",
                guitarBy: "Jeff Beck",
                image:"",
                no: 99,
                song:"Cause We've Ended as Lovers",
                src:"media/Solos/99.mp3"
            },
            {
                artist: "Jane's Addiction",
                guitarBy: "Dave Navarro",
                image:"",
                no: 100,
                song:"Three Days",
                src:"media/Solos/100.mp3"
            }
            
            
        ];
    
        soloFac.getSolos = function(){
            return solos;
        };
        
        soloFac.getSolo = function(index){
            return solos[index];
        };
        return soloFac;
});