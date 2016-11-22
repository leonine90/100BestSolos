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
                src:"media/01.mp3"
            },
            {
                artist: "Van Halen",
                guitarBy:"Eddie Van Halen",
                image:"",
                no: 2,
                song:"Eruption",
                src:"media/02.mp3"
            },
            {
                artist: "Lynyrd Skynyrd",
                guitarBy:"Allen Collins",
                image:"",
                no: 3,
                song:"Free Bird",
                src:"media/03.mp3"
            },
            {
                artist: "Pink Floyd",
                guitarBy:"David Gilmour",
                image:"",
                no: 4,
                song:"Comfortably Numb",
                src:"media/04.mp3"
            },
            {
                artist: "Jimi Hendrix Experience",
                guitarBy:"Jimi Hendrix",
                image:"",
                no: 5,
                song:"All Along the Watchtower",
                src:"media/05.mp3"
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