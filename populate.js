const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true });

const movieSchema = new mongoose.Schema({
    name: String,
    img: String,
    summary: String
});

const Movie = mongoose.model('Movie', movieSchema);

const initialMovies = [
    {
        name: "Harry Potter and the Order of the Phoenix",
        img: "https://bit.ly/2IcnSwz",
        summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
    },
    {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        img: "https://bit.ly/2tC1Lcg",
        summary: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
    },
    {
        name: "Avengers: Endgame",
        img: "https://bit.ly/2Pzczlb",
        summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    }
];

Movie.insertMany(initialMovies)
    .then(() => {
        console.log("Data inserted");
        mongoose.connection.close();
    })
    .catch(error => {
        console.error("Error inserting data: ", error);
    });