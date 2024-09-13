//random lists of names. add as many as we want
const names = ["Ryan", "Carl", "James", "Julia", "Flako", "Blade", "Eve", "Adam", "Gabe", "Teresa", "Jobo", "Abner", "Big Show", "Nova", "Nala", "Seymour", "Schlitz", "Luna"];

//races and added attributes. we can add more races or change their attributes. just going off the top of my head.
const races = {
    Human: { Strength: 1, Dexterity: 1, Constitution: 1, Intelligence: 1, Wisdom: 1, Charisma: 1 },
    Elf: { Dexterity: 2, Intelligence: 1 },
    Dwarf: { Strength: 1, Constitution: 2 },
    Halfling: { Dexterity: 2, Charisma: 1 },
    Gnome: { Intelligence: 2, Constitution: 1 },
};

//classes. it'd be nice to add/sub attributes so they "fit" more in to the randomization
const classes = ["Fighter", "Rogue", "Wizard", "Cleric", "Ranger", "Paladin", "Monk", "Artificer", "Warlock", "Barbarian", "Sorcerer", "Druid"];

    

//getrandom number/stat between 6 and 18
function getRandomStat() {
    return Math.floor(Math.random() * (18 - 8 + 1)) + 6; //standard attributes 6-18 without race mods
}

//declaring a getrandom from choices
function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//add/sub racial bonuses to char. we need to put a cap at 20
function applyRaceBonuses(character, race) {
    const bonuses = races[race];
    for (let attribute in bonuses) {
        if (bonuses.hasOwnProperty(attribute)) {
            character[attribute] += bonuses[attribute];
        }
    }
}

//stat modifier, when score meets threshold
function getModifier(score) {
    if (score <=7) return "-2";
    if (score <= 9) return "-1";
    if (score <= 11) return "0";
    if (score <= 13) return "+1";
    if (score <= 15) return "+2";
    if (score <= 17) return "+3";
    if (score <= 19) return "+4";
    return "+5";
}

//char sheet
function createCharacterSheet() {
    const race = getRandomFromArray(Object.keys(races));
    const characterClass = getRandomFromArray(classes);
    const name = getRandomFromArray(names);
    
    //how to display and randomized stats
    const character = {
        Name: name, //from const name
        Race: race, //from const race
        Class: characterClass, //from const class slection
        Strength: getRandomStat(),
        Dexterity: getRandomStat(),
        Constitution: getRandomStat(),
        Intelligence: getRandomStat(),
        Wisdom: getRandomStat(),
        Charisma: getRandomStat()
    };

    //race bonuses
    applyRaceBonuses(character, race);
    
    //i'd like to add class bonuses here to make char more realistic
    
    return character;
}

//println char sheets
function displayCharacterSheet(character) {
    console.log("Dungeons & Dragons Character Sheet:");
    console.log("-------------------------------"); //just to give a visual break
    console.log("Name:", character.Name);
    console.log("Race:", character.Race);
    console.log("Class:", character.Class);
    console.log("-------------------------------");

    //display attributes with modifiers
    console.log("Strength:", character.Strength, getModifier(character.Strength));
    console.log("Dexterity:", character.Dexterity, getModifier(character.Dexterity));
    console.log("Constitution:", character.Constitution, getModifier(character.Constitution));
    console.log("Intelligence:", character.Intelligence, getModifier(character.Intelligence));
    console.log("Wisdom:", character.Wisdom, getModifier(character.Wisdom));
    console.log("Charisma:", character.Charisma, getModifier(character.Charisma));
    console.log("-------------------------------");
}

//multiple char sheets
function generateMultipleCharacterSheets(numberOfCharacters) {
    for (let i = 0; i < numberOfCharacters; i++) {
        const characterSheet = createCharacterSheet();
        displayCharacterSheet(characterSheet);
        console.log("\n"); //give us a newln
    }
}

//choose how many to display at a time
generateMultipleCharacterSheets(5);

