// TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

function sonlarniHisoblaymiz(a) {
    let hisob = 0;
    for (const ele of a) {
        if(ele >= "0" && ele <= "9") {       // Loop qil "a"ni ichidagi "ele" kotta bo'lasa 0 va kichik bo'lsa 9 dan +1dan hisobla 
            hisob++;
        }
    }
    return hisob;
}
console.log(sonlarniHisoblaymiz("ad2a54y79wet0sfgb9"));




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
