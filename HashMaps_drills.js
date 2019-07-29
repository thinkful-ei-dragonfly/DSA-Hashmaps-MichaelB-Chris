const HashMap = require('./HashMap')

function main() {
  HashMap.MAX_LOAD_RATIO = 0.5
  HashMap.SIZE_RATIO = 3

  let lor = new HashMap()

  let input = [
    { "Hobbit": "Bilbo" },
    { "Hobbit": "Frodo" },
    { "Wizard": "Gandolf" },
    { "Human": "Aragon" },
    { "Elf": "Legolas" },
    { "Maiar": "The Necromancer" },
    { "Maiar": "Sauron" },
    { "RingBearer": "Gollum" },
    { "LadyOfLight": "Galadriel" },
    { "HalfElven": "Arwen" },
    { "Ent": "Treebeard" }
  ]

  for (let i = 0; i < input.length; i++) {
    lor.set(Object.keys(input[i])[0], Object.values(input[i])[0])
  }

  console.log(lor.get("Hobbit"))
  console.log(lor.get("Maiar"))
  // console.log(lor._hashTable)
}

main()


