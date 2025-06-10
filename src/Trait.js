export class Trait {
    constructor(name, desc) {
        this.traitName = name;
        this.traitDesc = desc;
        this.traitBonuses = new Map();
    }
    add_bonus(index, name, amount) {
        this.traitBonuses.set(index, { name, amount });
    }
}