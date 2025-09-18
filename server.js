
console.log("Web Serverni boshlash");

const express = require("express");
const app = express();
const res = require("express/lib/response");
const http = require("http");
const fs = require("fs");
const { text } = require("stream/consumers");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("EROR:", err);
    } else {
        user = JSON.parse(data)
    }
});
 


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
    res.render("harid" );
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
});



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port:${PORT}`);
});