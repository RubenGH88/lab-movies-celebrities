// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res) => {
   
 Movie.find()
 .then((movie) => 
     res.render("movies/movies.hbs", { movie }))
     
     .catch((err) => console.log(err));
 
 });


router.get("/create", (req, res) => {
    Celebrity.find()
    .then((celebrity) => 
        res.render("movies/new-movie", { celebrity }))
        
        .catch((err) => console.log(err));
   
});



router.post("/create", (req, res) => {
console.log(req.body)
Movie.create(req.body)
.then(() => 
res.redirect("/movies") )
.catch((err) => res.render("movies/new-movie") );

});


router.get("/:id", (req, res) => {
   
Movie.findById(req.params.id)
.populate("cast")
.then((movie) => 
res.render("movies/movie-details",{movie}) )


.catch((err) => console.log(err));
   
});



router.post('/:id/delete', (req, res) => {
   
  
    Movie.findByIdAndDelete(req.params.id)
      .then(() => res.redirect("/movies"))
      .catch((err) => console.log(err));
  
  });


  router.get('/:id/edit', (req, res) => {
  
   const movie= Movie.findById(req.params.id)
   const cast= Celebrity.find()
   Promise.all([ movie, cast ])
   .then(( movie, cast ) => res.render('movies/edit-movie.hbs', { movie, cast }))
        .catch((err) => console.log(err));
    
    });



    router.post('/:id/edit', (req, res) => {
  
        Movie.findByIdAndDelete(req.params.id)
          .then(() => res.redirect("/movies"))
          .catch((err) => console.log(err));
      
      });



module.exports = router;