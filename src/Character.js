import { Utils } from './Utils.js';

class Character {
    constructor() {
        this.name = "";
        this.statMap = new Map();
        this.level = 1;
    }

    initChar(newName) {
        this.name = newName;
        this.rollStats();
        this.statMap.set("exp", 0);
        this.statMap.set("exp req", 100);
        this.level = 1;
    }

    setStat(type, value) {
        this.statMap.set(type, value);
    }

    rollStats() {
        this.statMap.set("init str", Utils.numGen(1, 20));
        this.statMap.set("init dex", Utils.numGen(1, 20));
        this.statMap.set("init con", Utils.numGen(1, 20));
        this.statMap.set("init int", Utils.numGen(1, 20));
        this.statMap.set("init wis", Utils.numGen(1, 20));
        this.statMap.set("init hp max", 100);
    }

    levelScaling() {
        const round = Math.round;
        const lvl = this.level;

        this.statMap.set("str", this.statMap.get("init str") + round(this.statMap.get("init str") / 10) * lvl);
        this.statMap.set("dex", this.statMap.get("init dex") + round(this.statMap.get("init dex") / 10) * lvl);
        this.statMap.set("con", this.statMap.get("init con") + round(this.statMap.get("init con") / 10) * lvl);
        this.statMap.set("int", this.statMap.get("init int") + round(this.statMap.get("init int") / 10) * lvl);
        this.statMap.set("wis", this.statMap.get("init wis") + round(this.statMap.get("init wis") / 10) * lvl);
        this.statMap.set("hp max", this.statMap.get("init hp max") + round(this.statMap.get("init hp max") / 10) * lvl);
    }

    expReq() {
        let current = this.statMap.get("exp req");
        current += (10 * (5 * (1.1 * this.level))) * Math.pow(1.5, this.level / 10);
        this.statMap.set("exp req", current);
    }

    levelUp() {
        while (this.statMap.get("exp") >= this.statMap.get("exp req")) {
            this.level++;
            this.statMap.set("exp", this.statMap.get("exp") - this.statMap.get("exp req"));
            this.levelScaling();
            this.expReq();
        }
    }

    getStat(type) {
        return this.statMap.get(type);
    }
}
