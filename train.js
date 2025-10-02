/*
TASK D

Ikkita parametra ega function tuzing, va functioning
berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
mos kelsa true qiymat qaytarsin

Masalan: checkContent("mitgroup", "gmtiprou");
Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.
*/

function checkContent(a, b) {                  // ikki parametrli functon
    if (a.length !== b.length) return false;   // agarda uzunligi teng bo'lmasa

    let array1 = a.split("");                  // har ikki parametrni arrayga aylantiramiz
    let array2 = b.split("");

    console.log(array1, array2);

    array1.sort();                             // har ikki arrayning ichidagi elementlarni alifbo ko'rinishida tartiblaymiz
    array2.sort();

    console.log(array1, array2);

    argument1 = array1.join("");               // tartiblangan har ikki arrayni stringga aylantiramiz
    argument2 = array2.join("");

    console.log(argument1, argument2);

    return argument1 === argument2;            // string ko'rinishidagi ikki arrayni type bilan taqqoslaymiz 
}

console.log(checkContent("mitgroup","gmtiprou"));



/*
TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); 
shop.qabul("cola", 4);
shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
*/
// const moment = require('moment');
// const time = moment().format("HH:mm");


// class Shop {
//     constructor(a, b, c) {
//         this.non = a;
//         this.lagman = b;
//         this.cola = c;
//     }
//     qoldiq() {
//         console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagman}ta lag'mon va ${this.cola}ta cola mavjud`);
//     }
//     sotish(mahsulot, miqdori) {
//         if (mahsulot === "non") {
//             return this.non -= miqdori;
//         } else if (mahsulot === "lag'mon") {
//             return this.lagman -= miqdori;
//         } else if (mahsulot === "cola") {
//             return this.cola -= miqdori;
//         } else {
//             console.log("Iltimos mahsulot nomi yoki miqdorini to'g'ri kiriting!")
//         }
//     } 

//     qabul(mahsulot, miqdori) {
//        if (mahsulot === "non") {
//             return this.non += miqdori;
//         } else if (mahsulot === "lag'mon") {
//             return this.lagman += miqdori;
//         } else if (mahsulot === "cola") {
//             return this.cola += miqdori;
//         } else {
//             console.log("Iltimos mahsulot nomi yoki miqdorini to'g'ri kiriting!")
//         }
//     }
// };
// console.log("Bor edi");
// const shop = new Shop(4,5,2);
// shop.qoldiq();

// console.log("Sotilgandan so'ngi hisob");

// shop.sotish("non",3);
// shop.sotish("cola",2)
// shop.qoldiq();

// console.log("Tovar kirib kelgandan so'ngi hisob");

// shop.qabul("non",15);
// shop.qabul("cola",10);
// shop.qabul("lag'mon",2)
// shop.qoldiq();







// TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

// function sonlarniHisoblaymiz(a) {
//     let hisob = 0;
//     for (const ele of a) {
//         if(ele >= "0" && ele <= "9") {       // Loop qil "a"ni ichidagi "ele" kotta bo'lasa 0 va kichik bo'lsa 9 dan +1dan hisobla 
//             hisob++;
//         }
//     }
//     return hisob;
// }
// console.log(sonlarniHisoblaymiz("ad2a54y79wet0sfgb9"));




/*
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi:
*/
// function kelingHisoblaymiz(a, b) {                   // Oddiy fuction yasaymiz u ikki parametrga ega "a" va "b"
//     let hisob = 0;                                  
//     for (const element of b) {                       //for loop qilamiz shartimiz "b" parametrning ichidagi "element".
//         if (element === a) {                         //"element" type bilan birga teng bo'lsa "a"ga. 
//             hisob++;                                 //looping qil hamda 1ga qo'sh
//         }
//     }
//     return hisob;                                    // va bizga return qil "hisobni"
// }
// console.log(kelingHisoblaymiz("e","engineer"));
