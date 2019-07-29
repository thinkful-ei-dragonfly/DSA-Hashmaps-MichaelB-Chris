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

  

  let stringHash = new Map()

  function removeDuplicates(str) {
    let strArray = str.split('');
    strArray.forEach(letter => {
      stringHash.set(letter, '')
    })
    return Array.from(stringHash.keys()).join('');
  }

  for (let i = 0; i < input.length; i++) {
    lor.set(Object.keys(input[i])[0], Object.values(input[i])[0])
  }

  // console.log(lor.get("Hobbit"))
  // console.log(lor.get("Maiar"))
  // console.log(lor._hashTable)
  // console.log(removeDuplicates('google'))
}

isPalindrome = (string) => {
  string = string.toLocaleLowerCase();
  return Array.from(string).toString() === Array.from(string).reverse().toString()
}

includesPalindrome = (string) => {
  let newMap = new Map()
  for (let i = 0; i < string.length; i ++) {
    if (!newMap.has(string[i])) {
      newMap.set(string[i], 1)
    } else {
    let temp  = newMap.get(string[i]) + 1
    newMap.set(string[i], temp)
    }
  }
  let odd = 0;
  console.log(newMap.values())
  Array.from(newMap.values()).forEach(value => {
    if (value % 2 !== 0) {
      odd +=1
    }
  })
  if (odd > 1) {
    return false;
  }
  return true;
}


console.log(includesPalindrome('racecard'))

 

//check if string is even 
    // odd even

    // odd code

main()


