
console.log("Web Serverni boshlash");

const express = require("express");
const res = require("express/lib/response");
const app = express();


// MongoDB call
const db = require("./server").db();

// 1-step. Kirish code.

app.use(express.static("public"));    
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2-step. Session code. 


// 3-step. Views code.
app.set("views","views"); 
app.set("view engine", "ejs");


// 4-step. Routing code. Serverni yaratish.
app.post("/create-item", function(req, res) { 
    console.log(req.body);
    res.json({ text: "hammasi zo'r ishlayabdi"})
});

app.get("/", function(req, res) {
    res.render("reja" );
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

module.exports = app;