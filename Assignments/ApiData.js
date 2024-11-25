const apiData = {
  fruits: [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Indian Fig",
    "Jackfruit",
    {
      favoriteArtist: "Taylor Swift",
      favoriteSong: "Love Story",
    },
  ],
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    preferences: {
      color: "Blue",
      genre: "Pop",
      isActive: true,
    },
    playlists: [
      {
        name: "Chill Vibes",
        songs: [
          {
            title: "Ocean Eyes",
            artist: "Billie Eilish",
            duration: 3.2,
            isFavorite: true,
          },
          {
            title: "Shape of You",
            artist: "Ed Sheeran",
            duration: 4.24,
            isFavorite: false,
          },
        ],
      },
      {
        name: "Workout Mix",
        songs: [
          {
            title: "Eye of the Tiger",
            artist: "Survivor",
            duration: 4.04,
            isFavorite: true,
          },
          {
            title: "Lose Yourself",
            artist: "Eminem",
            duration: 5.2,
            isFavorite: false,
          },
        ],
      },
    ],
  },
};
console.clear();
console.log("1. ", apiData.fruits[9]);
console.log("2. ", apiData.fruits[10].favoriteArtist);
console.log("3. ", apiData.fruits[10].favoriteSong);
console.log("4. ", apiData.user.name);
console.log("5. ", apiData.user.email);
console.log("6. ", apiData.user.age);
console.log("7. ", apiData.user.preferences.color);
console.log("8. ", apiData.user.preferences.isActive);
console.log("9. ", apiData.user.playlists[0].songs[0].duration);
console.log("10. ", apiData.user.playlists[0].songs[1].isFavorite);
console.log("11. ", apiData.user.playlists[1].name);
console.log("12. ", apiData.user.playlists[1].songs[1].title);
