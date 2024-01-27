/* function sayHello() {
  console.log(`Hi! My name is ${this.name} and I work as a ${this.job}.`);
}

function createPerson(name, job) {
  const newPerson = {
    name,
    job,
    sayHello: sayHello
  }
  return newPerson;
};

const persona1 = createPerson("John Doe", "Software Engineer");
persona1.sayHello(); 
const persona2 = createPerson("Peter", "Software Developer");
persona2.sayHello(); 


console.log(persona1.sayHello === persona2.sayHello);  */

////////////////////////////////////////////////

/* declara la función createSong,
que devolverá nuevos objetos song */
/* function createSong(title, artist) {

  const newSong = {
    title,
    artist,
    isLiked: false,
    like: function () {
      newSong.isLiked = !newSong.isLiked;
    }
  }

  return newSong; 
} */

// ahora es mucho más fácil crear un objeto song
/* const song1 = createSong("Chanel", "Frank Ocean");
const song2 = createSong("Circles", "Mac Miller");
const song3 = createSong("Until I Walk Through The Flames", "Wicca Phase Springs Eternal"); */

//  prueba cómo funcionan los datos y la funcionalidad conjuntamente/
/* console.log(song1.isLiked); // false
song1.like();
console.log(song1.isLiked); // true */

/* console.log(song1.like === song2.like) */

/****************************CLASES******************************** */

/* class Song{
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  like() {
    this.isLiked = !this.isLiked
  }
}

const song = new Song("Start Over", "Any Given Day"); 
const song2 = new Song("Bitter End", "The Veer Union");
console.log(song)
console.log(song2)
console.log(song.like === song2.like) */


/****************************************** */


class Car {
  constructor(maxGasTankValue, fuelConsumption) {
    this._gasTankValue = 0;
    this._maxGasTankValue = maxGasTankValue;
    this._fuelConsumption = fuelConsumption; // millas por galón
  }

  _getAvailableGasValue(gasValue) {
    console.log(gasValue)
    if (gasValue < 0) return 0;
    if (gasValue > this._maxGasTankValue) return this._maxGasTankValue;
    return gasValue;
  }

  refuel(gasValue) {
    this._gasTankValue = this._getAvailableGasValue(gasValue);
  }

  getDistance() {
    return this._gasTankValue / this._fuelConsumption * 100;
  }
}

const car = new Car(70, 9);
car.refuel(45);

console.log(car._gasTankValue); // 45. La propiedad no es realmente privada y es fácil cambiarla.
console.log(car.getDistance()); // 500 