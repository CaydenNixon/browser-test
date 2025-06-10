import { Trait } from './Trait.js';

// export class Equipment {
//     constructor() {
//         this.weaponList = new Map();
//         this.armorList = new Map();
//         this.accessoryList = new Map();
//     }
//     initEquipment() {
//         this.initWeapons();
//         this.initArmors();
//         this.initAccessories();
//     }
    // initWeapons() {
    //     this.weaponList.set("test weapon", new Weapon("test weapon", 10, "1h-sword"));
    // }
    // initArmors() {
    //     this.armorList.set("test armor", new Armor("test armor", 10, "heavy"));
    // }
    // initAccessories() {
    //     this.accessoryList.set("test ring", new Accessory("test ring", "ring"));
    // }
// }

export class Weapon {
    constructor(name, initialAttack, newClass) {
        this.attack = initialAttack;
        this.name = name;
        this.itemClass = newClass;
        this.weaponBonuses = new Map();
    }
    setAttack(newAttack) {
        this.attack = newAttack;
    }
    setBonus(bonus, name) {
        this.weaponBonuses.set(name, bonus);
    }
}

export class Armor {
    constructor(name, initialDefence, newClass) {
        this.defence = initialDefence;
        this.name = name;
        this.itemClass = newClass;
        this.armorBonuses = new Map();
    }
    setDefence(newDefence) {
        this.defence = newDefence;
    }
    setBonus(bonus, name) {
        this.armorBonuses.set(name, bonus);
    }
}

export class Accessory {
    constructor(name, newClass) {
        this.name = name;
        this.itemClass = newClass;
        this.accessoryBonuses = new Map();
    }
    setBonus(bonus, name) {
        this.accessoryBonuses.set(name, bonus);
    }
}