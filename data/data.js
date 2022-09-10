const category = {
  movies: [
    {
      question: "Which famous singer appeared in the movie Mad Max: Beyond Thunderdome?",
      answer: "Tina Turner",
      options: ["Lady Gaga", "Cyndi Lauper", "Tina Turner", "Ariana Grande"]
    },
    {
      question: "Who directed the 1977 movie Star Wars?",
      answer: "George Lucas",
      options: ["George Lucas", "Steven Spielberg", "David Lynch", "Quentin Tarantino"]
    },
    {
      question: "Which action movie star was the voice of the Iron Giant?",
      answer: "Vin Diesel",
      options: ["Vin Diesel", "Tom Cruise", "Johnny Depp", "Will Smith"]
    },
    // {
    //   question: "In what year was the movie “Grease” released?",
    //   answer: "1978",
    //   options: ["1980", "1975", "1970", "1978"]
    // },
    // {
    //   question: "In what year was the original “Jurassic Park” film released?",
    //   answer: "1993",
    //   options: ["1990", "1985", "1993", "1989"]
    // },
    // {
    //   question: "When adjusted for inflation, which is the highest grossing film of all time?",
    //   answer: "Gone with the wind",
    //   options: ["Casablanca", "Gone with the wind", "Ben-Hur", "Titanic"]
    // },
    // {
    //   question: "In movies, a clue or piece of information which is intended to be misleading, is known as what?",
    //   answer: "Red Herring",
    //   options: ["Red Herring", "Trick", "Bluff", "Ploy"]
    // },
    // {
    //   question:"What was the name of the 1999 American found footage horror film about three student filmmakers that disappeared in the woods?",
    //   answer: "The Blair Witch Project",
    //   options: ["The Woods", "The Last Exorcism", "Cloverfield", "The Blair Witch Project"]
    // },
    // {
    //   question:"Which Teenage Mutant Ninja Turtle always wears red bandanas?",
    //   answer: "Raphael",
    //   options: ["Michelangelo","Leonardo","Donatello","Raphael"]
    // },
    // {
    //   question:"What did the famous Hollywood sign, located in Los Angeles, originally say?",
    //   answer: "Hollywoodland",
    //   options: ["Hollywoodland", "Fantasyland", "Dreamland", "Utopia"]
    // },
    // {
    //   question:"In the 1986 blockbuster “Top Gun” which actress played Goose’s wife?",
    //   answer: "Meg Ryan",
    //   options: ["Winona Ryder","Meg Ryan","Michelle Pfeiffer", "Julianne Moore"]
    // },
    // {
    //   question:"Who directed the movie “Reservoir Dogs”?",
    //   answer: "Quentin Tarantino",
    //   options: ["David Fincher","Spike Lee","Quentin Tarantino", "Martin Scorsese"]
    // },
    // {
    //   question: "Who played the fictional anti hero Deadpool in the 2016 movie?",
    //   answer: "Ryan Reynolds",
    //   options: ["Chris Evans","Ryan Reynolds", "Tom Hardy", "John Krasinski"]
    // },
    // {
    //   question:"Who was the female lead in the movie “Titanic”?",
    //   answer: "Kate Winslet",
    //   options: ["Kate Winslet", "Nicole Kidman", "Angelina Jolie", "Sandra Bullock"]
    // },
    // {
    //   question:"Who played Dracula in the 1931 vampire-horror film “Dracula”?",
    //   answer: "Bela Lugosi",
    //   options: ["Bela Lugosi", "Ed Wood", "Boris Karloff", "Tod Browning"]
    // },
    // {
    //   question:"The original Ghostbusters movie was released in June of what year?",
    //   answer: "1984",
    //   options: ["1984","1985","1986","1987"]
    // },
    // {
    //   question:"Tom Hanks played “Captain Miller” in what legendary World War II movie?",
    //   answer: "Saving Private Ryan",
    //   options: ["Days of Glory", "Stalingrad", "Saving Private Ryan", "Paratroop Command"]
    // },
    // {
    //   question:"Robin Williams won an Academy Award for best supporting actor in which 1997 film?",
    //   answer: "Good Will Hunting",
    //   options: ["Dead Poets Society", "Jakob the Liar", "Awakenings", "Good Will Hunting"] 
    // },
    // {
    //   question:"Who played the female lead role in the 1986 sci-fi movie “Aliens”?",
    //   answer: "Sigourney Weaver",
    //   options: ["Sigourney Weaver", "Olivia Newton-John", "Farrah Fawcett", "Barbra Streisand"]
    // },
    // {
    //   question:"What is Michael J. Fox’s middle name?",
    //   answer: "Andrew",
    //   options: ["Matthew", "Andrew", "Joshua", "Anthony"]
    // },
    // {
    //   question:"In what year was Alfred Hitchcock’s psychological thriller “Psycho” released?",
    //   answer: "1960",
    //   options: ["1965", "1960", "1970", "1968"]
    // },
    // {
    //   question:"What is the name of the 1978 movie, about an American college student who is sent to a Turkish prison for attempting to smuggle hashish out of Turkey?",
    //   answer: "Midnight Express",
    //   options: ["Brokedown Palace", "Midnight Express", "American Made", "Wings of Danger"]
    // },
    // {
    //   question:"In which 1993 thriller does the protagonist violently lose his cool when a fast food restaurant will not let him order from the breakfast menu?",
    //   answer:"Falling Down",
    //   options: ["Falling Down", "Pulp Fiction", "Die Hard", "Jackie Brown"]
    // },
    // {
    //   question:"Which actress played identical twins in the 1998 movie remake of The Parent Trap?",
    //   answer:"Lindsay Lohan",
    //   options: ["Demi Lovato", "Anne Hathaway", "Elizabeth Olsen", "Lindsay Lohan"]
    // },
    // {
    //   question:"In the movie “The Wizard of Oz”, what did the Scarecrow want from the wizard?",
    //   answer:"A brain",
    //   options: ["A heart", "A brain", "Courage", "Freedom"]
    // },
    // {
    //   question:"The first movie of the Fast and Furious franchise was released in what year?",
    //   answer: "2001",
    //   options: ["1996", "1998", "2001", "2003"]
    // },
    // {
    //   question:"Tyler Durden is a ficitional character appearing as the central protagonist and antagonist in what 1999 American film?",
    //   answer: "Fight Club",
    //   options: ["The Game", "Memento", "Fight Club", "Zodiac"]
    // },
    // {
    //   question:"Who played the female lead in the 1942 film Casablanca?",
    //   answer: "Ingrid Bergman",
    //   options: ["Grace Kelly", "Elizabeth Taylor", "Ingrid Bergman", "Debbie Reynolds"]
    // },
    // {
    //   question:"Actress Gal Gadot starred in what American superhero film released in the summer of 2017?",
    //   answer: "Wonder Woman",
    //   options: ["Wonder Woman", "Black Widow", "Nebula", "Scarlet Witch"]
    // },
    // {
    //   question:"Who played the female lead in the 1990 romantic comedy Pretty Woman?",
    //   answer: "Julia Roberts",
    //   options: ["Jodie Foster", "Jeniffer Aniston","Sandra Bullock", "Julia Roberts"]
    // }
  ],
  animals: [
    {
      question: "What is the largest animal currently on Earth?",
      answer: "Blue Whale",
      options: ["Whale Shark", "Blue Whale", "African Bush Elephant", "Brown Bear"]
    },
    {
      question: "Lemurs, a type of primate, are native to what island nation?",
      answer: "Madagascar",
      options: ["New Guinea", "Bali", "Madagascar", "Tahiti"]
    },
    {
      question: "Su Lin was the name given to what type of animal captured in China and brought to the United States for the first time in 1936?",
      answer: "Giant Panda",
      oprions: ["Koala", "Giant Panda", "Red Panda", "Amur Leopard"]
    },
    {
      question: "Which animal is the tallest in the world?",
      answer: "Giraffe",
      oprions: ["Giraffe", "Elephant", "Ostrich", "Brown Bear"]
    },
    {
      question: "What type of animal is known as the ship of the desert?",
      answer: "Camel",
      oprions: ["Arabian Oryx", "Camel", "Desert Iguana", "Cougar"]
    },
    {
      question: "On what continent would you not find bees?",
      answer: "Antarctica",
      oprions: ["Australia", "Asia", "Antarctica", "Africa"]
    },
    {
      question: "Which animal has the largest brain?",
      answer: "Sperm Whale",
      oprions: ["Sperm Whale", "Octopus", "Grey Kangaroo", "Dolphin"]
    },
    {
      question: "Which animal has the longest gestation period?",
      answer: "Elephant",
      oprions: ["Elephant", "Whale", "Rhinoceros", "Giraffe"]
    },
    {
      question: "An animal that lives part of its life on land and part in water is known as what?",
      answer: "Amphibian",
      oprions: ["Mammal", "Amphibian", "Reptiles", "Insects"]
    },
    {
      question: "A koala’s diet consists mainly of what?",
      answer: "Eucalyptus leaves",
      oprions: ["Eucalyptus leaves", "Fruits", "Urine", "Bamboo"]
    },
    {
      question: "What animal has the fastest metabolism?",
      answer: "Hummingbird",
      oprions: ["Pigeon", "Elephant", "Cow", "Hummingbird"]
    },
    {
      question: "In the United States which breed of dog is commonly known as a firehouse dog?",
      answer: "Dalmatian",
      oprions: ["German Shepherd", "Dalmatian", "Great Dane", "Beagle"]
    },
    {
      question: "How many chambers are there in a dog’s heart?",
      answer: "Four",
      oprions: ["Two", "Four", "Nine", "Twelve"]
    },
    {
      question: "An octopus can fit through any hole larger than its what?",
      answer: "Beak",
      oprions: ["Leg", "Beak", "Head", "Stomach"]
    },
    {
      question: "Now extinct, what shark is thought to have been the largest ever on Earth?",
      answer: "Megalodon",
      oprions: ["Megalodon", "Mega Whale", "Purple Shark", "African Black Elephant"]
    },
    {
      question: "Snoopy from the comic peanuts is what breed of dog?",
      answer: "Beagle",
      oprions: ["Dachshund", "Beagle", "Siberian Husky", "Labrador Retriever"]
    },
    {
      question: "What was the name of Robert E. Lee’s most famous horse?",
      answer: "Traveller",
      oprions: ["Traveller", "Silver", "Spirit", "Thunder"]
    },
    {
      question: "What is the fastest land snake in the world?",
      answer: "Black Mamba",
      oprions: ["Sidewinder Snake", "Black Mamba", "Southern Black Racer", "Cottonmouth Viper"]
    },
    {
      question: "Which animal has the most legs?",
      answer: "Millipede",
      oprions: ["Centipede", "Millipede", "Thousenpede", "Muitopede"]
    },
    {
      question: "What is the fastest fish in the Ocean?",
      answer: "Sailfish",
      oprions: ["Black Marlin", "Swordfish", "Wahoo", "Sailfish"]
    },
    {
      question: "The Alaskan Malamute is a type of what?",
      answer: "Dog",
      oprions: ["Dog", "Cat", "Goat", "Fish"]
    },
    {
      question: "Polar bears feed mainly on what animal?",
      answer: "Seal",
      oprions: ["Moose", "Deer", "Fish", "Seal"]
    },
    {
      question: "What is the sleepiest animal in the world, sleeping around 22 hours each day?",
      answer: "Koala",
      oprions: ["Cat", "Sloth", "Opossum", "Koala"]
    },
    {
      question: "Which bird is often associated with delivering babies?",
      answer: "Stork",
      oprions: ["Gull", "Stork", "Heron", "Pelican"]
    },
    {
      question: "How many hearts does an octopus have?",
      answer: "Three",
      oprions: ["Three", "Four", "Five", "Six"]
    },
    {
      question: "In the United States, where can alligators and crocodiles be found together in the wild?",
      answer: "Florida",
      oprions: ["Texas", "Washington", "Hawaii", "Florida"]
    },
    {
      question: "What is the national animal of Scotland?",
      answer: "Unicorn",
      oprions: ["Dragon", "Unicorn", "Dragonfly", "Dinosaur"]
    },
    {
      question: "What animal has the largest ears?",
      answer: "Elephant",
      oprions: ["Hare", "Elephant", "Bat", "Basset"]
    },
    {
      question: "The Chihuahua is a breed of dog believed to originate from what country?",
      answer: "Mexico",
      oprions: ["Mexico", "Colombia", "Peru", "Costa Rica"]
    },
    {
      question: "Cynophobia is the fear of what kind of animal?",
      answer: "Dogs",
      oprions: ["Cats", "Dogs", "Birds", "Rabbits"]
    }
  ],
  sports: [],
  food: []
}

function getRandomMovieQuestion() {
  return category.movies[Math.floor(Math.random() * category.movies.length)]
}

function getRandomAnimalQuestion() {
  return category.animals[Math.floor(Math.random() * category.movies.length)]
}
export {
  getRandomMovieQuestion, getRandomAnimalQuestion
}