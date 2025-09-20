
// Callback function

const maslahat = [
    "yaxshi talaba bo'ling", //0-20
    "yaxshi mentor tanlang hamda ko'proq xato qiling",  //20-30
    "o'zingizning tanlagan yo'lingizda eng zo'ri bo'ling",  //30-40
    "o'zingiz uchun ishlang",  //40-50
    "yoshlarga invistitsiya qiling",  //50-60
    "endi dam oling"  //60-
];

function maslahatBering(a, callback) {                           
    if (typeof a !== "number") callback("son kiriting", null);  // Callback functionining ikki parameti bor birinchisi ERROR bersa ishga tushadi, ikkinchisi datani olib beradi
    else if (a <= 20) callback(null, maslahat[0]);
    else if (a > 20 && a <= 30) callback(null, maslahat[1]);
    else if (a > 30 && a <= 40) callback(null, maslahat[2]);
    else if (a > 40 && a <= 50) callback(null, maslahat[3]);
    else if (a > 50 && a <= 60) callback(null, maslahat[4]);
    else{
        setTimeout(function() {                 // Callback functionlarda setTimeout(),setInterval() functionlari muammosiz ishlaydi.
          callback(null, maslahat[5])
        },3000)
    }
}
console.log("passed here 0")


maslahatBering(65, (err, data) => {           // Call qilayotgan vaqtimiz callbeckda parametr sifatida function ishga tushadi.   
    if (err) console.log("ERROR", err);       // Xatolik bo'lsa Error qaytaradi.
    else {                                    
        console.log("Javob :", data);         // Xatolik bo'lmasa data ( maslahat[] )ni beradi. 
    }
}); 
console.log("passed here 1")

// Callback funktionlardan foydalanish sababi berilgan vazifani belgilangan vaqda bajarganligidadur ya'ni o'zining ishini qiladi qolganlari bilan ishi yo'q.
// Callback synchronous function bo'lib xususiyatlari birdan ishga tushadi hamda javobini birdaniga ta'lab qiladi



// ASYNC functions

const maslahat2 = [
    "yaxshi talaba bo'ling", //0-20
    "yaxshi mentor tanlang hamda ko'proq xato qiling",  //20-30
    "o'zingizning tanlagan yo'lingizda eng zo'ri bo'ling",  //30-40
    "o'zingiz uchun ishlang",  //40-50
    "yoshlarga invistitsiya qiling",  //50-60
    "endi dam oling"  //60-
];

async function maslahatBering2(params) {
    if (typeof params !== "number") throw new Error("insert a number");
    else if (params <= 20) return maslahat2[0];
    else if (params > 20 && params <= 30) return maslahat2[1];
    else if (params > 30 && params <= 40) return maslahat2[2];
    else if (params > 40 && params <= 50) return maslahat2[3];
    else if (params > 50 && params <= 60) return maslahat2[4];
    else {
        return new Promise((resolve, reject) => {    // CORE modullar async functionlarning ichida to'g'ridan to'g'ri ichiga yozmoqchi bo'lsak ishlamaydi.
            setTimeout(() => {                       // shuning uchun Promise functionidan foydalansak ishlata olamiz 
                resolve(maslahat2[5])
            },5000);
        });
    }
}
// 1-stepda: then/catch  methodlaridan foydalandik .then(data), .catch(err)
console.log("passed here 0")                // 1-bo'lib ishga tushadi
maslahatBering2(45)
  .then((data) => {
    console.log("javob:", data);            // oxirgi bo'lib ishga tushadi
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1")                // 2-bo'lib ishga tushadi.

// Asyncronous functionlarning farqi birinchi Syncronous functionlarga yo'l berib oxirida ishga tushadi

// 2-stepda: async/await  dan foydalangan holda bir nechta so'rovlarni berishimiz mumkin
async function run() {      // hamda yana bir tarafi birinchi call to'liq javob olmaguncha keyingi call ishga tushmaydi
    let javob = await maslahatBering2(70);
    console.log(javob);

    javob = await maslahatBering2(35);
    console.log(javob);

    javob = await maslahatBering2(55);
    console.log(javob);
}
run();