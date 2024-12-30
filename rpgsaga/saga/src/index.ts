import { taskA } from "./labs/func/func";
import { taskB } from "./labs/func/func";
import { Animal } from "./labs/abstract/animal";
import { Rabbit } from "./labs/diffanimals/rabbit";
import { Dog } from "./labs/diffanimals/dog";

console.log(taskA(1.2, 0.48, 0.7, 2.2, 0.3));
console.log(taskB(1.2, 0.48, [0.25, 0.36, 0.56, 0.94, 1.28]));

const rabbit: Animal = new Rabbit("Snezhok", 6, "male", 8, "Natasha");
const dog: Animal = new Dog("Druzhok", 12, "male", 20, "Alex");

const arrOfAnimals: Animal[] = [rabbit, dog];
for (const animal of arrOfAnimals) {
    console.log(animal.feature());
}