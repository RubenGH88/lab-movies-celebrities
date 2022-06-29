// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");


router.get("/", (req, res) => {
   
Celebrity.find()
.then((celebrity) => 
    res.render("celebrities/celebrities.hbs", { celebrity }))
    
    .catch((err) => console.log(err));

});



router.get("/create", (req, res) => {
   
        res.render("celebrities/new-celebrity");
    
  });



  router.post("/create", (req, res) => {
  
    Celebrity.create(req.body)
    .then(() => 
    res.redirect("/celebrities") )
    .catch((err) => res.render("celebrities/new-celebrity") );
    
});



module.exports = router;

