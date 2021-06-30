import Navbar from "../Navbar/Navbar";
import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      title: "s1kids.com",
      pic: "https://i.ibb.co/m6hdZ8x/s1kidshomepage.jpg",
      description: "A site created to be used by the S1Kids during the ESEA league tournament season. This site uses a PostgreSQL database that communicates with an Express.js and Knex.js backend. The frontend was created with React and Sass. This site was deployed using Heroku.",
      site: "http://www.s1kids.com/ ",
      github: "https://github.com/aaronschoi/s1kids/",
    },
    {
        title: "Restaurant Reservations",
        pic: "https://i.ibb.co/0rnWYkg/reservationshomepage.jpg",
        description: "A site created to sample a minimal reservation system. This site uses a PostgreSQL database that communicates with an Express.js and Knex.js backend. The frontend was created with React and bootstrap. This site was deployed as a monorepo through Vercel.",
        site: "https://thinkful-final-capstone-frontend.vercel.app/dashboard",
        github: "https://github.com/aaronschoi/Thinkful---Final-Capstone",
      },
    {
        title: "WeLoveMovies",
        pic: "https://i.ibb.co/7gR3DkL/welovemovieshomepage.jpg",
        description: "A backend application created with Knex.js and Express.js that details methods that can be used to access a PostgreSQL database pertaining to movies, the respective movie's current status, and the critics related to the movie.",
        github: "https://github.com/aaronschoi/Thinkful---WeLoveMovies"
    },
    {
        title: "GrubDash",
        pic: "https://i.ibb.co/8KdsPMP/grubdashhomepage.jpg",
        description: "A backend service created with Knex.js and Express.js. The methods created in this application allow a user to manage and create food items and orders that can be used in a restaurant-to-door delivery system.",
        github: "https://github.com/aaronschoi/Thinkful---GrubDash"
    },
    {
        title: "Flashcards",
        pic: "https://i.ibb.co/t4ZBW7B/flashcardshomepage.jpg",
        description: "A React application that allows a user to create and save flashcards and decks of flashcards. Each flashcard has a front and a back and can be removed and edited at will.",
        github: "https://github.com/aaronschoi/Thinkful_Flash_Cards"
    },
    {
        title: "Decoder Ring",
        pic: "https://i.ibb.co/Hz9DjNN/decoderringhomepage.jpg",
        description: "A web application that allows a user to decode or encode a message in the Caesar Shift, Polybius Square, or Substitution methods. Each component is rendered using javascript, and styled using bootstrap.",
        github: "https://github.com/aaronschoi/Project_Decoder_Ring_1"
    }
  ];

  return (
    <div className="component-container">
      <Navbar />
      <div className="projects">
        {projects.map((project) => {
          return (
            <div key={project.title} className="project">
              <Project project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
