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