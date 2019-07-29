##1. Create a HashMap class

Print your hash map and notice the length and items
that are hashed in your hash map. Have you hashed all
the items you were asked to?

No, duplicates were over-written.

Retrieve the value that is hashed in the key "Maiar" and Hobbit.

Frodo, Sauron.

What are the values of Maiar and Hobbit that you have?
Is there a discrepancy? Explain your answer.

We only have the send values, the first got replaced.

What is the capacity of your hash table after you have
hashed all the above items? Explain your answer.

The capacity is not 24 because the original was 8
which gets multilied by 3.

##2. WhatDoesThisDo

The output of:

console.log(map1.get(str1));
console.log(map2.get(str3));

'Hello World.', 20
'Hello World.', 10

Because the first has will insert a 20 into the key 'Hello World.' and then replace it with 10 and the second hash with insert a 10 into the key 'Hello World.' and place it with 10.

##3. Demonstrate understanding of Hash maps

1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length m = 11 using open addressing and a hash function k mod m.

keys: 10, 22, 31, 4, 15, 28, 17, 88, 59

hash: 10, 0,  9,  4, 5,   6,  7,  1,  8

2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

keys:  5, 28, 19, 15, 20, 33, 12, 17, 10
hash:  5,  1,  2,  6,  3,  7,  4,  8,  9
