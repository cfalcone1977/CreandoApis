export interface Pelicula{
  id: string;
  title: string;
  year: number;
  director: string;
  duration: number;
  poster: string;
  genre:string[];
  rate: number;
  synopsis?: string;
}

export let Peliculas: Pelicula[];

Peliculas=[
  {
    "id": "dcdd0fad-a94c-4810-8acc-5f108d3b18c3",
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": 142,
    "poster": "https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp",
    "genre": [
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "id": "c8a7d63f-3b04-44d3-9d95-8782fd7dcfaf",
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "duration": 152,
    "poster": "https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg",
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rate": 9
  },
  {
    "id": "5ad1a235-0d9c-410a-b32b-220d91689a08",
    "title": "Inception",
    "year": 2010,
    "director": "Christopher Nolan",
    "duration": 148,
    "poster": "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rate": 8.8
  },
  {
    "id": "241bf55d-b649-4109-af7c-0e6890ded3fc",
    "title": "Pulp Fiction",
    "year": 1994,
    "director": "Quentin Tarantino",
    "duration": 154,
    "poster": "https://www.themoviedb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.9
  },
  {
    "id": "9e6106f0-848b-4810-a11a-3d832a5610f9",
    "title": "Forrest Gump",
    "year": 1994,
    "director": "Robert Zemeckis",
    "duration": 142,
    "poster": "https://i.ebayimg.com/images/g/qR8AAOSwkvRZzuMD/s-l1600.jpg",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rate": 8.8
  },
  {
    "id": "7e3fd5ab-60ff-4ae2-92b6-9597f0308d1",
    "title": "Gladiator",
    "year": 2000,
    "director": "Ridley Scott",
    "duration": 155,
    "poster": "https://img.fruugo.com/product/0/60/14417600_max.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rate": 8.5
  },
  {
    "id": "c906673b-3948-4402-ac7f-73ac3a9e3105",
    "title": "The Matrix",
    "year": 1999,
    "director": "Lana Wachowski",
    "duration": 136,
    "poster": "https://i.ebayimg.com/images/g/QFQAAOSwAQpfjaA6/s-l1200.jpg",
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "rate": 8.7
  },
  {
    "id": "b6e03689-cccd-478e-8565-d92f40813b13",
    "title": "Interstellar",
    "year": 2014,
    "director": "Christopher Nolan",
    "duration": 169,
    "poster": "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_UF1000,1000_QL80_.jpg",
    "genre": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "rate": 8.6
  },
  {
    "id": "aa391090-b938-42eb-b520-86ea0aa3917b",
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "duration": 201,
    "poster": "https://i.ebayimg.com/images/g/0hoAAOSwe7peaMLW/s-l1600.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rate": 8.9
  },
  {
    "id": "2e6900e2-0b48-4fb6-ad48-09c7086e54fe",
    "title": "The Lion King",
    "year": 1994,
    "director": "Roger Allers, Rob Minkoff",
    "duration": 88,
    "poster": "https://m.media-amazon.com/images/I/81BMmrwSFOL._AC_UF1000,1000_QL80_.jpg",
    "genre": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "rate": 8.5
  },
  {
    "id": "04986507-b3ed-442c-8ae7-4c5df804f896",
    "title": "The Avengers",
    "year": 2012,
    "director": "Joss Whedon",
    "duration": 143,
    "poster": "https://img.fruugo.com/product/7/41/14532417_max.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rate": 8
  },
  {
    "id": "7d2832f8-c70a-410e-8963-4c93bf36cc9c",
    "title": "Jurassic Park",
    "year": 1993,
    "director": "Steven Spielberg",
    "duration": 127,
    "poster": "https://vice-press.com/cdn/shop/products/Jurassic-Park-Editions-poster-florey.jpg?v=1654518755&width=1024",
    "genre": [
      "Adventure",
      "Sci-Fi"
    ],
    "rate": 8.1
  },
  {
    "id": "ccf36f2e-8566-47f7-912d-9f4647250bc7",
    "title": "Titanic",
    "year": 1997,
    "director": "James Cameron",
    "duration": 195,
    "poster": "https://i.pinimg.com/originals/42/42/65/4242658e6f1b0d6322a4a93e0383108b.png",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rate": 7.8
  },
  {
    "id": "8fb17ae1-bdfe-45e5-a871-4772d7e526b8",
    "title": "The Social Network",
    "year": 2010,
    "director": "David Fincher",
    "duration": 120,
    "poster": "https://i.pinimg.com/originals/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg",
    "genre": [
      "Biography",
      "Drama"
    ],
    "rate": 7.7
  },
  {
    "id": "6a360a18-c645-4b47-9a7b-2a71babbf3e0",
    "title": "Avatar",
    "year": 2009,
    "director": "James Cameron",
    "duration": 162,
    "poster": "https://i.etsystatic.com/35681979/r/il/dfe3ba/3957859451/il_fullxfull.3957859451_h27r.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rate": 7.8
  },
  {
    "id": "0328f16e-6ad4-4764-b8f0-2d7a5d4f5cb1",
    "title": "Die Hard",
    "year": 1988,
    "director": "John McTiernan",
    "duration": 132,
    "poster": "https://m.media-amazon.com/images/I/51+Eu24eFQL._AC_SY300_SX300_.jpg",
    "genre": [
      "Action",
      "Thriller"
    ],
    "rate": 8.2
  },
  {
    "id": "8398ac38-e411-4513-bb9f-f3c78d054130",
    "title": "The Rear Window",
    "year": 1954,
    "director": "Alfred Hitchcock",
    "duration": 112,
    "poster": "https://m.media-amazon.com/images/I/81FA-25ugSL._AC_SL1500_.jpg",
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "rate": 8.4
  },
  {
    "id": "68ca6d6c-f326-4ca4-a7e7-0c0bfb92413e",
    "title": "Alien",
    "year": 1979,
    "director": "Ridley Scott",
    "duration": 117,
    "poster": "https://filmartgallery.com/cdn/shop/files/Alien-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1684645235",
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "rate": 8.4
  },
{
"id": "02f15f52-fa0f-4d1d-a62c-2d35a197ca17",
"title": "The Prestige",
"year": 2006,
"director": "Christopher Nolan",
"duration": 130,
"poster":  "https://i.pinimg.com/736x/4f/4d/fa/4f4dfabe5c46358c8d821bd2716e8186.jpg",
"genre": [
"Drama",
"Mystery",
"Sci-Fi"
],
"rate": 8.5
},
{
"id": "a961e1e1-7a5e-4cb1-a697-7d3bf8dcf80d",
"title": "The Usual Suspects",
"year": 1995,
"director": "Bryan Singer",
"duration": 106,
"poster": "https://image.tmdb.org/t/p/original/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg",
"genre": [
"Crime",
"Mystery",
"Thriller"
],
"rate": 8.5
},
{
"id": "f0a5c4cb-7eb0-4c4b-8b7f-e3f855c3ac77",
"title": "Se7en",
"year": 1995,
"director": "David Fincher",
"duration": 127,
"poster": "https://m.media-amazon.com/images/I/61MOBBZJkmL._AC_UF894,1000_QL80_.jpg",
"genre": [
"Crime",
"Drama",
"Mystery"
],
"rate": 8.6
},

{
"id": "1bfbe6c4-ec44-4943-ba43-6b53e83047d7",
"title": "Schindler's List",
"year": 1993,
"director": "Steven Spielberg",
"duration": 195,
"poster": "https://m.media-amazon.com/images/I/71vKAOMv8nL.jpg",
"genre": [
"Biography",
"Drama",
"History"
],
"rate": 8.9
},
{
"id": "fe68c8bb-fd88-4525-98f4-1bc27eeaf40b",
"title": "The Departed",
"year": 2006,
"director": "Martin Scorsese",
"duration": 151,
"poster": "https://m.media-amazon.com/images/I/510gCMld+uL._AC_UF894,1000_QL80_.jpg",
"genre": [
"Crime",
"Drama",
"Thriller"
],
"rate": 8.5
},
{
    "id": "39747774-40ba-4c84-8841-bc85da4d2801",
    "title": "The Silence of the Lambs",
    "year": 1991,
    "duration": 118,
    "director": "Jonathan Demme",
    "poster": "/poster/poster-72703149cbab.jpg",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 8.6,
    "synopsis": "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer."
  },
  {
    "id": "de46d8a4-4ff5-45b1-9a5b-d18b6adac370",
    "title": "Inglorious Basterds",
    "year": 2009,
    "duration": 153,
    "director": "Quentin Tarantino",
    "poster": "/poster/poster-ab33969df118.jpg",
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "rate": 8.3,
    "synopsis": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theater owner's vengeful plans for the same."
  },
  {
    "id": "119a4ae3-e35f-4b6c-86a7-22473242f43b",
    "title": "The Godfather",
    "year": 1972,
    "duration": 172,
    "director": "Francis Ford Coppola",
    "poster": "https://filmartgallery.com/cdn/shop/files/The-Godfather-Vintage-Movie-Poster-Original-1-Sheet-27x41-5254.jpg",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2,
    "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
    {
    "id": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    "title": "Fight Club",
    "year": 1999,
    "director": "David Fincher",
    "duration": 139,
    "poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "genre": ["Drama"],
    "rate": 8.8
  },
  {
    "id": "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    "title": "Parasite",
    "year": 2019,
    "director": "Bong Joon Ho",
    "duration": 132,
    "poster": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    "genre": ["Drama", "Thriller"],
    "rate": 8.6
  },
  {
    "id": "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    "title": "Whiplash",
    "year": 2014,
    "director": "Damien Chazelle",
    "duration": 106,
    "poster": "https://i.ebayimg.com/images/g/5PgAAOSwEKRhZOs7/s-l1200.jpg",
    "genre": ["Drama", "Música"],
    "rate": 8.5
  },
  {
    "id": "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "director": "Wes Anderson",
    "duration": 99,
    "poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg",
    "genre": ["Comedy", "Drama"],
    "rate": 8.1
  },
  {
    "id": "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    "title": "Blade Runner 2049",
    "year": 2017,
    "director": "Denis Villeneuve",
    "duration": 164,
    "poster": "https://m.media-amazon.com/images/I/71Rdbo9KB6L._AC_UF894,1000_QL80_.jpg",
    "genre": ["Sci-Fi", "Drama"],
    "rate": 8.0
  },
  {
    "id": "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "director": "George Miller",
    "duration": 120,
    "poster": "https://play-lh.googleusercontent.com/XujhcvV-Mt7BBheyIiY_yWaVZKutxuhZi17IXRvx2axroT4Y-yp0HRYsyQKNIuE9Cxwqaq9k5KeL-3eT1Ok6",
    "genre": ["Action", "Adventure"],
    "rate": 8.1
  },
  {
    "id": "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
    "title": "The Green Mile",
    "year": 1999,
    "director": "Frank Darabont",
    "duration": 189,
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
    "genre": ["Drama", "Fantasy"],
    "rate": 8.6
  },
  {
    "id": "8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w",
    "title": "La La Land",
    "year": 2016,
    "director": "Damien Chazelle",
    "duration": 128,
    "poster": "https://m.media-amazon.com/images/I/91jrKX9xjQL.jpg",
    "genre": ["Comedy", "Drama", "Musical"],
    "rate": 8.0
  },
  {
    "id": "9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x",
    "title": "The Truman Show",
    "year": 1998,
    "director": "Peter Weir",
    "duration": 103,
    "poster": "https://www.originalfilmart.com/cdn/shop/files/truman_show_1998_original_film_art_76a66942-0f82-4533-8165-156ea9a1d5bb_5000x.jpg?v=1709162543",
    "genre": ["Comedy", "Drama", "Sci-Fi"],
    "rate": 8.2
  },
  {
    "id": "0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y",
    "title": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "director": "Michel Gondry",
    "duration": 108,
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
    "genre": ["Drama", "Romance", "Sci-Fi"],
    "rate": 8.3
  },
  {
    "id": "1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z",
    "title": "No Country for Old Men",
    "year": 2007,
    "director": "Coen Brothers",
    "duration": 122,
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg",
    "genre": ["Crime", "Drama", "Thriller"],
    "rate": 8.1
  },
  {
    "id": "2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a",
    "title": "The Big Lebowski",
    "year": 1998,
    "director": "Coen Brothers",
    "duration": 117,
    "poster": "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/152/152128/152128.jpeg?filename=15727278%5D&call=url%5Bfile:product.chain%5D",
    "genre": ["Comedy", "Crime"],
    "rate": 8.1
  },
  {
    "id": "3m4n5o6p-7q8r-9s0t-1u2v-3w4x5y6z7a8b",
    "title": "Her",
    "year": 2013,
    "director": "Spike Jonze",
    "duration": 126,
    "poster": "https://artofthemovies.co.uk/cdn/shop/products/her_ds-os-resized-406675_72bbd040-e6f6-423e-81f9-cb33f6f41f25-240357.jpg?v=1689587509",
    "genre": ["Drama", "Romance", "Sci-Fi"],
    "rate": 8.0
  },
  {
    "id": "4n5o6p7q-8r9s-0t1u-2v3w-4x5y6z7a8b9c",
    "title": "The Shining",
    "year": 1980,
    "director": "Stanley Kubrick",
    "duration": 146,
    "poster": "https://m.media-amazon.com/images/I/61ICKbhxRJL._AC_UF894,1000_QL80_.jpg",
    "genre": ["Horror", "Drama"],
    "rate": 8.4
  },
  {
    "id": "5o6p7q8r-9s0t-1u2v-3w4x-5y6z7a8b9c0d",
    "title": "Oldboy",
    "year": 2003,
    "director": "Park Chan-wook",
    "duration": 120,
    "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
    "genre": ["Action", "Drama", "Mystery"],
    "rate": 8.4
  },
  {
    "id": "6p7q8r9s-0t1u-2v3w-4x5y-6z7a8b9c0d1e",
    "title": "Amélie",
    "year": 2001,
    "director": "Jean-Pierre Jeunet",
    "duration": 122,
    "poster": "https://m.media-amazon.com/images/I/410XpOZSByS._AC_UF894,1000_QL80_.jpg",
    "genre": ["Comedy", "Romance"],
    "rate": 8.3
  },
  {
    "id": "7q8r9s0t-1u2v-3w4x-5y6z-7a8b9c0d1e2f",
    "title": "Birdman",
    "year": 2014,
    "director": "Alejandro González Iñárritu",
    "duration": 119,
    "poster": "https://www.originalfilmart.com/cdn/shop/products/birdman_2014_original_film_art_296bb27c-c97c-4e67-aa2e-328e46c05058_5000x.jpg?v=1613633043",
    "genre": ["Comedy", "Drama"],
    "rate": 7.7
  },
  {
    "id": "8r9s0t1u-2v3w-4x5y-6z7a-8b9c0d1e2f3g",
    "title": "Drive",
    "year": 2011,
    "director": "Nicolas Winding Refn",
    "duration": 100,
    "poster": "https://http2.mlstatic.com/D_NQ_NP_796687-MLA53583558990_022023-O.webp",
    "genre": ["Crime", "Drama"],
    "rate": 7.8
  },
  {
    "id": "9s0t1u2v-3w4x-5y6z-7a8b-9c0d1e2f3g4h",
    "title": "The Revenant",
    "year": 2015,
    "director": "Alejandro González Iñárritu",
    "duration": 156,
    "poster": "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_.jpg",
    "genre": ["Adventure", "Drama", "Thriller"],
    "rate": 8.0
  },
  {
    "id": "0t1u2v3w-4x5y-6z7a-8b9c-0d1e2f3g4h5i",
    "title": "Arrival",
    "year": 2016,
    "director": "Denis Villeneuve",
    "duration": 116,
    "poster": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
    "genre": ["Drama", "Sci-Fi"],
    "rate": 7.9
  }
]


//console.log(Peliculas[5].year);
