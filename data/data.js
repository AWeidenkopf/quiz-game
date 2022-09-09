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
    {
      question: "In what year was the movie “Grease” released?",
      answer: "1978",
      options: ["1980", "1975", "1970", "1978"]
    },
    {
      question: "In what year was the original “Jurassic Park” film released?",
      answer: "1993",
      options: ["1990", "1985", "1993", "1989"]
    },
    {
      question: "When adjusted for inflation, which is the highest grossing film of all time?",
      answer: "Gone with the wind",
      options: ["Casablanca", "Gone with the wind", "Ben-Hur", "Titanic"]
    },
    {
      question: "In movies, a clue or piece of information which is intended to be misleading, is known as what?",
      answer: "Red Herring",
      options: ["Red Herring", "Trick", "Bluff", "Ploy"]
    },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },
    // {
    //   question:,
    //   answer: ,
    //   options: 
    // },

  ],
  animals: [],
  sports: [],
  food: []
}

function getRandomMovieQuestion() {
  return category.movies[Math.floor(Math.random() * category.movies.length)]
  //   let arr = []


  //   let newArr = arr.reduce((acc, curr) => {
  //   if(acc !== newArr){
  //     newArr.push(curr)
  //     return currQuestion
  //   } getRandomMovieQuestion()
  // }, currQuestion)
}
export {
  getRandomMovieQuestion
}