class element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Tree extends element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per squere km`);
    }
}
class Street extends element {
    constructor()
}