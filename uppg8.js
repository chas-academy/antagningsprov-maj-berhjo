function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument
  const people = [
    {
      name: "Batman",
      age: 50,
    },
    {
      name: "Superman",
      age: 50,
    },
    {
      name: "Luffy",
      age: 20,
    },
    {
      name: "Ussop",
      age: 20,
    },
    {
      name: "Zoro",
      age: 20,
    },
  ];

  function sortAge(arr) {
    arr.forEach((person) => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  }
  sortAge(people);
}
module.exports = { uppg8 };
