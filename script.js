/**
 * Created by kevin on 1/27/17.
 */
function Fighter (last, first) {
    var theFighter = this;
    var hp = 10;
    var str = 2;
    var givenName = last;
    var firstName = first;

    theFighter.getHealth = function () {
        return hp;
    };

    theFighter.getFullName = function () {
        return firstName + ' ' + givenName;
    };

    theFighter.attacks = function (defender) {
        defender.defend(theFighter, str);
    };
    theFighter.defend = function (attacker, dmg) {
        console.log(firstName + " takes "  + dmg + " dmg from " + attacker.getFullName());
        theFighter.takeDamage(dmg);
        console.log(firstName + " has " + theFighter.getHealth() + " hp left");
        theFighter.isDead();
    };
    theFighter.takeDamage = function (amt) {
        hp -= amt;
    };
    theFighter.isDead = function () {
        if(theFighter.getHealth() <= 0){
            console.log(firstName + " has died");
        }
    };
}

var john = new Fighter("Doe", "John");
var jane = new Fighter("Doe", "Jane");
