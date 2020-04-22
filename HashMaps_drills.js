const HashMap = require('./HashMaps.js');

function main() {
    const map = new HashMap();
    const MAX_LOAD_RATIO = 0.5;
    const SIZE_RATIO = 3;
}

map.set("Hobbit", "Bilbo");
map.set("Hobbit", "Frodo");
map.set("Wizard", "Gandalf");
map.set("Human", "Aragorn");
map.set("Elf", "Legolas");
map.set("Maiar", "The Necromancer");
map.set("RingBearer", "Gollum");
map.set("LadyOfLight", "Galadriel");
map.set("HalfElven", "Arwen");
map.set("Ent", "Treebeard");

console.log(map);