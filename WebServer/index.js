var rs = require('readline-sync'); 


i = 0;
var welcome = rs.keyInYN('The dragon approaches, are you brave enough to fight? '); 


if (!welcome){
    console.log('You flee in terror, and the dragon burns you up!');
    i += 2;
   } else {
    weopons = ['Broadsword', 'Bow & Arrow', 'Machine Gun', 'Magic Wand'],
    index = rs.keyInSelect(weopons, 'Choose your weapon');
    console.log('Ok, you equip the ' + weopons[index] + ' , You are now ready for battle')
    i += 3;
   }

   while(i == 2){
    i += 5;
   }

while (i == 3){
    var choice = rs.keyInYN('Do you attack immediately? ');
    if(!choice){
        console.log('The Dragon screaches, his belly is exposed!');
         i += 1;
    }else{
        console.log('The dragon sees your attack and burns you to a crisp!');
        i += 4;
    }
}

while(i == 4 ){
    var choice2 = rs.keyInYN('Do you attack with your' + weopons[index]);
    if(!choice2){
        i += 1;
    }else{
        console.log('You attack with your' + weopons[index]); 
        i += 2;
    }
}

if (i == 7){
    console.log('Game Over!'); 
} else {
    console.log('You Defeat the dragon!'); 
}
    


    


