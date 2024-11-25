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
