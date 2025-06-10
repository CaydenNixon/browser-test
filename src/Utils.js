export class Utils {
    static numGen(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.random() * (maxFloored - minCeiled) + minCeiled;
    }
}