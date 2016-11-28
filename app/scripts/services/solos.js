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
                guitarBy:"Allen Collins",
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
                artist: "Derek And The Dominos - ",
                guitarBy:"Eric Clapton",
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
                guitarBy:"Ian Anderson",
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
                guitarBy:"Steely Dan",
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
                guitarBy:"George Harrison",
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