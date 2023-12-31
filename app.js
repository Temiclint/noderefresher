require('dotenv').config();
const express = require('express');
// const path = require('path');
const mongoose = require("mongoose");
const homeRoutes = require('./routes/homeRoutes')

const app = express();





const dbURI = process.env.DBURL;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    })
})
.catch((err) => console.log(err));

app.set('view engine', 'ejs');


// middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));



app.get("/home", (req, res) => {
    res.redirect('/')
});


app.get("/about", (req, res) => {
    res.render('about', {
        title: 'About'
    });
});




app.use(homeRoutes);


app.use((req, res) => {

    res.status(404).render('404', {
        title: "404"
    });

});
