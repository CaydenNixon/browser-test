import { Character } from './Character.js';
import { Trait } from './Trait.js';
import { Weapon, Armor, Accessory } from './Equipment.js';

class World {
    constructor()
    {
        this.equipmentList = new Map();
        this.traitList = new Map();
    }
    initWeapons() {
        // weapon
        this.equipmentList.set(["test weapon", "weapon"], new Weapon("test weapon", 10, "1h-sword"));
        // armor
        this.equipmentList.set(["test armor", "armor"], new Armor("test armor", 10, "heavy"));
        // accessory
        this.equipmentList.set(["test ring", "accessory"], new Accessory("test ring", "ring"));
    }
    initTraits() {
        // weapon trait
        this.traitList.set(["test weapon trait"])
        // armor trait
        this.traitList.set
        // accessory trait
        this.traitList.set
        //character trait
    }
}