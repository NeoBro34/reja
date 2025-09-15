console.log("Web Serverni boshlash");

const express = require("express");
const app = express();          //<-- expresning app objectini yuboradi. Bu object orqali express serverni quramiz.
const http = require("http");  // 4-stepda. Server qurishta ishlatilinadi. "http" CORE moduldir.


// 1-step. Kirish code. Expressga kirib kelayotgan ma'lumotlarga bog'liq kodlar yoziladi.

app.use(express.static("public"));    
/* ^-- bu har qanday brauserdan kirib kelayotgan so'rovlar uchun "public" folderi ochiq degani.
Faqatgina "public" folderini ko'ra oladi degani. EX: gogle chrom expres serverimizga request qilayotgan vaqti "public" folderini clientlarga ochib beryabmiz degani. "public" folderning ichiga CSSni kerak bo'ladigan IMGlarni shuning ichiga joylashtiramiz.
*/
app.use(express.json());
/* ^-- Client hamda web serverlar orasidagi datan "json" formatda. Shunday ekan kirib kelyotgan "json" formatdagi datani object holatiga o'girib beradi
*/
app.use(express.urlencoded({extended: true}));
/* ^-- HTMLda traditional FORM request degan shakl bor bu traditional request qilish insturmenti yani FORMda biror narsani post qilsak bizning "express" serverimiz qabul qilib oladi. Bu kodni yozmasak HTML FORMda post qilingan narsalarni express qabul qilmaydi.Ignore qiladi serverga kiritmaydi
*/


// 2-step. Session code.


// 3-step. Views code. Beckendda Frontend ya'ni HTMLni yasaymiz hamda clientga yuboramiz.Viewni yasash uchun "ejs"@3.1.6 packageni o'rnatib olamiz. 
app.set("views","views");       // Folderni ko'rsatyabmiz hamda yangi Folder ochib olamiz.2-dagi "views" folder nomi
app.set("view engine", "ejs"); //  Bu yerda "view engine"ni "ejs" ekanligini ko'rsatyabmiz.


// 4-step. Routing code. Serverni yaratish.
app.get("/hello", function(req, res) {
    res.send("<h1>Hello World</h1>");
});
app.get("/gift", function(req, res) {
    res.send("<h1>Siz sovg'alar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port:${PORT}`);
});