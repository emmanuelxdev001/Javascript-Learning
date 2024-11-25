// Group 1
const libraryAPI = {
  books: [
    {
      title: "To Kill a Mockingbird",
      author: {
        name: "Harper Lee",
        nationality: "American",
      },
      genres: ["Fiction", "Classic"],
      reviews: [
        {
          reviewer: "John Doe",
          rating: 5,
          comment: "A timeless classic.",
        },
        {
          reviewer: "Jane Smith",
          rating: 4,
          comment: "Great read.",
        },
      ],
    },
    {
      title: "1984",
      author: {
        name: "George Orwell",
        nationality: "British",
      },
      genres: ["Fiction", "Dystopian"],
      reviews: [
        {
          reviewer: "Alice Brown",
          rating: 5,
          comment: "Impactful.",
        },
      ],
    },
  ],
};

// GROUP 1 libraryAPI

// console.log("1 ", libraryAPI.books[0].title);
// console.log("2 ", libraryAPI.books[0].author.name);
// console.log("3 ", libraryAPI.books[1].author.nationality);
// console.log("4 ", libraryAPI.books[0].genres);
// console.log("5 ", libraryAPI.books[0].reviews[0].rating);
// console.log("6 ", libraryAPI.books[0].reviews[1].comment);
// console.log("7 ", libraryAPI.books[1].title);
// console.log("8 ", libraryAPI.books[1].genres);
// console.log("9 ", libraryAPI.books[1].reviews[0].reviewer);
// console.log("10 ", libraryAPI.books[1].reviews[0].comment);
// console.log("11 ", libraryAPI.books[0].author.nationality);
// console.log("12 ", libraryAPI.books[0].reviews[1].reviewer);
// console.log("13 ", libraryAPI.books[0].genres);
// console.log("14 ", libraryAPI.books[1].author.name);
// console.log("15 ", libraryAPI.books[1].reviews[0].rating);

// Group 2
const movieAPI = {
  movies: [
    {
      title: "Inception",
      genres: ["Sci-Fi", "Thriller"],
      cast: [
        {
          name: "Leonardo DiCaprio",
          role: "Dom Cobb",
        },
        {
          name: "Joseph Gordon-Levitt",
          role: "Arthur",
        },
      ],
    },
    {
      title: "The Matrix",
      genres: ["Sci-Fi", "Action"],
      cast: [
        {
          name: "Keanu Reeves",
          role: "Neo",
        },
        {
          name: "Laurence Fishburne",
          role: "Morpheus",
        },
      ],
    },
  ],
};

// Group 2 movieAPI
// console.log("1 ", movieAPI.movies[0].title);
// console.log("2 ", movieAPI.movies[0].genres);
// console.log("3 ", movieAPI.movies[0].cast[0].role);
// console.log("4 ", movieAPI.movies[1].title);
// console.log("5 ", movieAPI.movies[0].cast[1].name);
// console.log("6 ", movieAPI.movies[1].genres[1]);
// console.log("7 ", movieAPI.movies[1].cast[0].name);
// console.log("8 ", movieAPI.movies[1].cast[1].name);
// console.log("9 ", movieAPI.movies[1].cast[1].role);
// console.log("10 ", movieAPI.movies[0].genres);
// console.log("11 ", movieAPI.movies[1].cast[0].name);
// console.log("12 ", movieAPI.movies[0].cast[1].role);
// console.log("13 ", movieAPI.movies[1].title);
// console.log("14 ", movieAPI.movies[1].cast);
// console.log("15 ", movieAPI.movies[1].cast[0].role);

// Group 3
const restaurantAPI = {
  restaurants: [
    {
      name: "The Gourmet Kitchen",
      cuisineType: "Italian",
      menu: [
        {
          dishName: "Spaghetti Carbonara",
          price: 15.99,
          ingredients: ["Spaghetti", "Eggs"],
        },
        {
          dishName: "Margherita Pizza",
          price: 12.99,
          ingredients: ["Dough", "Tomato Sauce"],
        },
      ],
    },
    {
      name: "Sushi World",
      cuisineType: "Japanese",
      menu: [
        {
          dishName: "California Roll",
          price: 8.99,
          ingredients: ["Rice", "Crab"],
        },
        {
          dishName: "Tempura Udon",
          price: 14.99,
          ingredients: ["Udon", "Shrimp"],
        },
      ],
    },
  ],
};

// Group 3 restaurantAPI
// console.log("1 ", restaurantAPI.restaurants[0].name);
// console.log("2 ", restaurantAPI.restaurants[0].cuisineType);
// console.log("3 ", restaurantAPI.restaurants[0].menu[0].ingredients);
// console.log("4 ", restaurantAPI.restaurants[0].menu[1].price);
// console.log("5 ", restaurantAPI.restaurants[0].menu[1].dishName);
// console.log("6 ", restaurantAPI.restaurants[1].menu[0].price);
// console.log("7 ", restaurantAPI.restaurants[1].menu[1].ingredients);
// console.log("8 ", restaurantAPI.restaurants[1].menu[0].dishName);
// console.log("9 ", restaurantAPI.restaurants[1].cuisineType);
// console.log("10 ", restaurantAPI.restaurants[1].menu[1].price);
// console.log("11 ", restaurantAPI.restaurants[0].menu);
// console.log("12 ", restaurantAPI.restaurants[1].menu[0].dishName);
// console.log("13 ", restaurantAPI.restaurants[1].menu[0].ingredients[0]);
// console.log("14 ", restaurantAPI.restaurants[0].name);
// console.log("15 ", restaurantAPI.restaurants[1].menu[1].ingredients[1]);

// Group 4
const travelAPI = {
  destinations: [
    {
      locationName: "Paris",
      popularAttractions: ["Eiffel Tower", "Louvre Museum"],
      tours: [
        {
          tourName: "City Highlights",
          duration: "3 days",
          price: 500,
        },
        {
          tourName: "Romantic Getaway",
          duration: "5 days",
          price: 1000,
        },
      ],
    },
    {
      locationName: "Tokyo",
      popularAttractions: ["Tokyo Tower", "Shibuya Crossing"],
      tours: [
        {
          tourName: "Cultural Experience",
          duration: "4 days",
          price: 700,
        },
        {
          tourName: "Food Adventure",
          duration: "3 days",
          price: 600,
        },
      ],
    },
  ],
};

// Group 4 travelAPI
// console.log("1 ", travelAPI.destinations[0].locationName);
// console.log("2 ", travelAPI.destinations[0].popularAttractions);
// console.log("3 ", travelAPI.destinations[0].tours[1].duration);
// console.log("4 ", travelAPI.destinations[0].tours[0].price);
// console.log("5 ", travelAPI.destinations[1].tours[0].tourName);
// console.log("6 ", travelAPI.destinations[1].popularAttractions);
// console.log("7 ", travelAPI.destinations[1].tours[0].price);
// console.log("8 ", travelAPI.destinations[1].tours[1].duration);
// console.log("9 ", travelAPI.destinations[1].locationName);
// console.log("10 ", travelAPI.destinations[0].tours[0].duration);
// console.log("11 ", travelAPI.destinations[1].tours[1].tourName);
// console.log("12 ", travelAPI.destinations[0].tours);
// console.log("13 ", travelAPI.destinations[1].popularAttractions[1]);
// console.log("14 ", travelAPI.destinations[0].tours[1].price);
// console.log("15 ", travelAPI.destinations[1].tours[0].tourName);

// Group 5
const musicAPI = {
  albums: [
    {
      title: "Thriller",
      artist: {
        name: "Michael Jackson",
        nationality: "American",
      },
      genres: ["Pop", "Rock", "Blues"],
      tracks: [
        {
          trackName: "Beat It",
          duration: "4:18",
        },
        {
          trackName: "Billie Jean",
          duration: "4:54",
        },
      ],
    },
    {
      title: "Superstar",
      artist: {
        name: "Wizkid",
        nationality: "Nigerian",
      },
      genres: ["Afrobeats", "R & B", "Afropop"],
      tracks: [
        {
          trackName: "Pakurumo",
          duration: "3:12",
        },
        {
          trackName: "Baba Nla",
          duration: "4:10",
        },
      ],
    },
  ],
};
