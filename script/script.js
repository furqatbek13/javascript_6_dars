
//// UYGA VAZIFA ////
// 1-misol
// function getLevel2(n) {
//     let result = [];  
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i)); 
//     }

//     return result;
// }

// console.log(getLevel2(6));  


// 2-misol
// function generateSequence(n, A, B) {
//     let arr = []; 
//     arr[0] = A; 
//     arr[1] = B;
//     for (let i = 2; i < n; i++) {
//         arr[i] = 0;  
//         for (let j = 0; j < i; j++) {
//             arr[i] += arr[j];
//         }
//     }

//     return arr;
// }

// console.log(generateSequence(5, 2, 3));  


// 3-misol
// function reverseArray(arr) {
//     return arr.reverse();  
// }
// let arr = [7, 4, 9, 2, 3, 1, 5];
// console.log(reverseArray(arr));  


// 4-misol
// function extractOdds(arr) {
//     let odds = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {  
//             odds.push(arr[i]); 
//         }
//     }
//     console.log(odds.join(' ')); 
//     console.log(`toq sonlar soni = ${odds.length}`);  
// }
// let arr = [4, 5, 7, 8, 6, 9];
// extractOdds(arr);


// 5-misol
// function extractEvensAndOddsCombined(arr) {
//     let evens = [];  
//     let odds = [];   
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {  
//             evens.push(arr[i]); 
//         } else { 
//             odds.push(arr[i]); 
//         }
//     }

//     console.log([...evens, ...odds.reverse()].join(' '));  
// }

// let arr = [4, 5, 7, 8, 6, 9];
// extractEvensAndOddsCombined(arr);


// 6-misol
// function number(arr) {
//     let result = []; 
//     for (let i = 0; i < arr.length; i += 2) { 
//         result.push(arr[i]); 
//     }

//     return result;
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(number(arr)); 


// 7-misol
// function extractReverseEvenIndexedElements(arr) {
//     let result = []; 

//     for (let i = arr.length - 1; i >= 0; i -= 2) { 
//         result.push(arr[i]); 
//     }

//     return result; 
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80]; 
// console.log(extractReverseEvenIndexedElements(arr)); 


// 8-misol
// function number(arr) {
//     let result = []; 
//     for (let i = 0; i < arr.length; i += 2) { 
//         result.push(arr[i]); 
//     }

//     for (let i = 1; i < arr.length; i += 2) { 
//         result.push(arr[i]); 
//     }

//     return result; 
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(number(arr)); 


// 9-misol (tushunmadim..)
// function extractOddAndEvenIndexedElements(arr) {
//     let oddIndexed = [];  // Toq indeksdagi elementlarni saqlash uchun massiv
//     let evenIndexed = []; // Juft indeksdagi elementlarni saqlash uchun massiv

//     // Toq indekslardagi elementlarni qo'shamiz
//     for (let i = 1; i < arr.length; i += 2) { // i ni 1 dan boshlaymiz va har safar 2 ga oshiramiz
//         oddIndexed.push(arr[i]); // Toq indeksdagi elementni oddIndexed massiviga qo'shamiz
//     }

//     // Juft indekslardagi elementlarni qo'shamiz
//     for (let i = 0; i < arr.length; i += 2) { // i ni 0 dan boshlaymiz va har safar 2 ga oshiramiz
//         evenIndexed.push(arr[i]); // Juft indeksdagi elementni evenIndexed massiviga qo'shamiz
//     }

//     // Juft indekslardagi elementlarni teskari tartibda chiqaramiz
//     evenIndexed.reverse(); // Juft indekslarni teskari tartibda o'zgartiramiz

//     // Natijalarni birlashtirib chiqaramiz
//     let result = oddIndexed.concat(evenIndexed); // OddIndexed va EvenIndexed massivlarini birlashtiramiz
//     return result; // Natijani qaytaramiz
// }

// // Massivni kiritamiz va funksiyani chaqiramiz
// let arr = [10, 20, 30, 40, 50, 60, 70, 80]; // Juft n ta elementdan iborat massiv
// console.log(extractOddAndEvenIndexedElements(arr)); // [20, 40, 60, 80, 10, 30, 50, 70]


// 10-misol (tushunmadim chatgpdan oldim.)
// function customOrder(arr) {
//     let result = []; // Natijani saqlash uchun bo'sh massiv
//     let n = arr.length; // Massiv uzunligini oling

//     // Juft va toq indekslarga asoslangan tartibda qo'shamiz
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0) {
//             // Juft indekslar
//             if (i / 2 < n / 2) {
//                 result.push(arr[i / 2]); // A[0], A[1], A[2], ...
//             } else {
//                 result.push(arr[n - (i / 2 - n / 2) - 1]); // A[n-1], A[n-2], ...
//             }
//         } else {
//             // Toq indekslar
//             result.push(arr[n - Math.floor(i / 2) - 1]); // A[n-1], A[n-2], ...
//         }
//     }

//     return result; // Natijani qaytaramiz
// }

// // Massivni kiritamiz va funksiyani chaqiramiz
// let arr = [10, 20, 30, 40, 50, 60, 70, 80]; // N ta elementdan iborat massiv
// console.log(customOrder(arr)); // [10, 20, 80, 70, 30, 40, 60, 50]


// 11-misol
// function rangeSum(arr, K, L) {
//     let sum = 0;  
//     for (let i = K; i <= L; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5)); 



// 12-misol
// function separateTrueAndFalse(arr) {
//     let trueValues = []; 
//     let falseValues = []; 

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) { 
//             trueValues.push(arr[i]); 
//         } else { 
//             falseValues.push(arr[i]); 
//         }
//     }

//     return {
//         Haqiqat: trueValues, 
//         Notogri: falseValues 
//     };
// }

// let inputArray = [10, false, "", "Abdulaziz", null];
// let result = separateTrueAndFalse(inputArray);

// console.log("Haqiqat:", result.Haqiqat); 
// console.log("Noto'g'ri:", result.Notogri); 



// 13-misol
// function getOddMin(arr) {
//     let min = null; 
//     for (let i = 1; i < arr.length; i += 2) { 
//         if (min === null || arr[i] < min) { 
//             min = arr[i]; 
//         }
//     }

//     return min; 
// }

// let arr = [10, 20, 5, 30, 2, 15, 8, 6]; 
// let result = getOddMin(arr); 

// console.log("Juft indeksli elementlar orasidan kichik qiymat:", result);


//  14-misol
// function getEvenMax(arr) {
//     let max = null; 
//     for (let i = 0; i < arr.length; i += 2) { 
//         if (max === null || arr[i] > max) { 
//             max = arr[i]; 
//         }
//     }

//     return max; 
// }

// let arr = [10, 20, 5, 30, 2, 15, 8, 6]; 
// let result = getEvenMax(arr);

// console.log("Toq indeksli elementlar orasidan katta qiymat:", result);


// 15-misol (tushunmadim chatgpdan oldim)
// function findLastLocalMaxIndex(arr) {
//     let lastLocalMaxIndex = -1; // Lokal maksimum indeksini saqlash uchun o'zgaruvchi, dastlab -1

//     // Massivni tekshirish (1 dan n-2 gacha bo'lgan indekslar)
//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) { // Agar lokal maksimum bo'lsa
//             lastLocalMaxIndex = i; // Oxirgi lokal maksimum indeksini yangilaymiz
//         }
//     }

//     return lastLocalMaxIndex; // Oxirgi lokal maksimum indeksini qaytaramiz
// }

// // Misol uchun massivni kiritamiz va funksiyani chaqiramiz
// let arr = [1, 3, 2, 5, 4, 6, 3]; // N ta elementdan iborat massiv
// let result = findLastLocalMaxIndex(arr); // Funksiyani chaqiramiz

// console.log("Oxirgi lokal maksimum elementi indeksi:", result); // Natijani chiqaramiz



// 16-misol


// 17-misol (tushunmadim chatgpdan oldim)
// function findMaxSumPair(arr) {
//     if (arr.length < 2) {
//         return -1; 
//     }

//     let maxSum = arr[0] + arr[1]; 
//     let pair = [arr[0], arr[1]]; 

//     for (let i = 1; i < arr.length - 1; i++) { 
//         let currentSum = arr[i] + arr[i + 1]; 
//         if (currentSum > maxSum) {
//             maxSum = currentSum; 
//             pair = [arr[i], arr[i + 1]]; 
//         }
//     }

//     return pair; 
// }

// let arr = [10, 20, 5, 30, 15, 25]; 
// let result = findMaxSumPair(arr); 

// console.log("Yig'indisi eng katta bo'lgan 2 ta qo'shni elementlar:", result);


// 18-misol
// function findDuplicateIndices(arr) {
//     let seen = {}; 
//     for (let i = 0; i < arr.length; i++) {
//         if (seen[arr[i]] !== undefined) { 
//             return [seen[arr[i]], i]; 
//         }
//         seen[arr[i]] = i; 
//     }
//     return null; 
// }

// let arr = [5, 3, 6, 9, 5];
// let result = findDuplicateIndices(arr);

// console.log("Bir xil elementlar indekslari:", result);


// 19-misol


// 20-misol
// function createEvenArray(a) {
//     let b = []; 
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) { 
//             b.push(a[i]); 
//         }
//     }

//     console.log("Juft elementlar soni:", b.length); 
//     console.log("Juft elementlar:", b); 

//     return b; 
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// let b = createEvenArray(a); 


// 21-misol
// function numberArray(a, k) {
//     let result = []; 
//     for (let i = 0; i < a.length; i++) {
//         result.push(a[i] + k);
//     }

//     return result; 
// }

// let a = [1, 2, 3, 4, 5]; 
// let k = 3; 
// let updatedArray = numberArray(a, k); 
// console.log("Yangilangan massiv:", updatedArray); 


// 22-misol (tushunmadim chatgpdan oldim.)
// function swapHalves(arr) {
//     const n = arr.length; // Massiv uzunligini aniqlaymiz
//     const mid = n / 2; // Yarmiga bo'lamiz

//     // Yangi massivni yaratamiz
//     const swappedArray = [];

//     // Birinchi yarmni ikkinchi yarmga va aksincha qo'shamiz
//     for (let i = mid; i < n; i++) {
//         swappedArray.push(arr[i]); // Ikkinchi yarmni qo'shamiz
//     }
//     for (let i = 0; i < mid; i++) {
//         swappedArray.push(arr[i]); // Birinchi yarmni qo'shamiz
//     }

//     return swappedArray; // Almashtirilgan massivni qaytaramiz
// }

// // Misol uchun massivni kiritamiz
// let arr = [1, 2, 3, 4, 5, 6]; // Juft elementdan iborat massiv
// let swappedArray = swapHalves(arr); // Funksiyani chaqiramiz

// console.log("Almashtirilgan massiv:", swappedArray); // Natijani chiqaramiz



// 23-misol
// function reverseArray(arr) {
//     const n = arr.length; 
//     for (let i = 0; i < n / 2; i++) {
    
//         const temp = arr[i]; 
//         arr[i] = arr[n - 1 - i]; 
//         arr[n - 1 - i] = temp; 
//     }

//     return arr;
// }

// let arr = [1, 2, 3, 4, 5, 6]; 
// let reversedArray = reverseArray(arr); 

// console.log("Teskari tartibda joylashtirilgan massiv:", reversedArray); 


// 24-misol (tushunmadim chatgpdan oldim.)
// function replaceBetweenMinMax(arr) {
//     const n = arr.length; // Massiv uzunligini aniqlaymiz

//     // Eng kichik va eng katta elementlarni aniqlash
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     // Min va Max indekslarini topamiz
//     const minIndex = arr.indexOf(min);
//     const maxIndex = arr.indexOf(max);

//     // Min va Max indekslari orasidagi elementlarni nolga almashtirish
//     const startIndex = Math.min(minIndex, maxIndex) + 1; // Min dan keyin
//     const endIndex = Math.max(minIndex, maxIndex); // Max gacha

//     for (let i = startIndex; i < endIndex; i++) {
//         arr[i] = 0; // Elementlarni nolga almashtirish
//     }

//     return arr; // O'zgartirilgan massivni qaytaramiz
// }

// // Misol uchun massivni kiritamiz
// let arr = [4, 2, 7, 3, 9, 1, 5]; // Massiv
// let modifiedArray = replaceBetweenMinMax(arr); // Funksiyani chaqiramiz

// console.log("O'zgartirilgan massiv:", modifiedArray); // Natijani chiqaramiz



// 25-misol
// function rotateLeft(arr) {
//     const n = arr.length;

//     if (n === 0) return arr; 

//     const firstElement = arr[0]; 
//     for (let i = 0; i < n - 1; i++) {
//         arr[i] = arr[i + 1]; 
//     }

//     arr[n - 1] = firstElement; 

//     return arr; 
// }

// let arr = [1, 2, 3, 4, 5]; 
// let rotatedArray = rotateLeft(arr); 

// console.log("Siklik siljitilgan massiv:", rotatedArray); 



// 26-misol (tushunmadim chatgpdan oldim.)
// function deleteElementWithIndex(arr, k) {
//     const n = arr.length; // Massiv uzunligini aniqlaymiz

//     // K indeksini tekshirish
//     if (k < 0 || k >= n) {
//         throw new Error("K indeksi massiv uzunligidan tashqarida."); // Xato holat
//     }
//     const newArr = [];
//     for (let i = 0; i < n; i++) {
//         if (i !== k) { 
//             newArr.push(arr[i]); 
//         }
//     }

//     return newArr; 
// }

// let arr = [10, 20, 30, 40, 50]; 
// let k = 2; 
// let modifiedArray = deleteElementWithIndex(arr, k); 

// console.log("Yangi massiv:", modifiedArray); 


// 27-misol ( tushunmadim chatgpdan oldim.)
// function deleteArray(arr, k, m) {
//     const newArray = arr.slice(0, k).concat(arr.slice(m + 1));
 
//     console.log("O'zgartirilgan massiv:", newArray);
//     console.log("Elementlar soni:", newArray.length);
    
//     return newArray; 
// }

// let arr = [10, 20, 30, 40, 50, 60, 70]; 
// let k = 2; 
// let m = 4; 
// let modifiedArray = deleteArray(arr, k, m); 


// 28-misol
// function removeAdjacentDuplicates(arr) {
//     if (arr.length === 0) return arr;

//     const result = [arr[0]]; 

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== result[result.length - 1]) {
//             result.push(arr[i]); 
//         }
//     }
//     return result; 
// }

// let arr = [1, 2, 2, 3, 3, 4, 5, 5, 5, 6]; 
// let modifiedArray = removeAdjacentDuplicates(arr); 
// console.log("O'zgartirilgan massiv:", modifiedArray); 


// 29-misol










/// Darsdagi misollar ////
// 1-misol
// function getInitialOdds(n) {
//     let odds = [];  

//     for (let i = 0; i < n; i++) {
//         odds.push(2 * i + 1);  
//     }

//     return odds;
// }

// console.log(getInitialOdds(5));  


// 2-misol
// function getEvenReverse(arr) {
//     let evens = [];  
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 === 0) {  
//             evens.push(arr[i]); 
//         }
//     }

//     return evens;
// }
// console.log(getEvenReverse([4, 5, 7, 8, 6, 9]));  


// 3-misol (tushunmadim buni..)
// function numberArray(arr) {
//     let result = [];  // Natijani yig'ish uchun bo'sh massiv
//     let left = 0;     // Dastlabki indeks
//     let right = arr.length - 1;  // Oxirgi indeks

//     while (left <= right) {
//         result.push(arr[left]);  // Chapdagi elementni qo'shamiz
//         if (left !== right) {    // Agar chap va o'ng indekslar bir xil bo'lmasa
//             result.push(arr[right]);  // O'ngdagi elementni qo'shamiz
//         }
//         left++;   // Chapga bitta oshiramiz
//         right--;  // O'ngga bitta kamaytiramiz
//     }

//     return result.join(', ');  // Massivni vergul bilan birlashtirib, natija qaytariladi
// }

// // Funksiyani chaqirib ko'ramiz
// console.log(numberArray([4, 5, 7, 8, 6, 9]));  // 4, 9, 5, 6, 7, 8


// 4-misol
// function rangeSum(arr, K, L) {
//     let sum = 0;  
//     for (let i = K; i <= L; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5)); 


// 5-misol
// function getSingleArr(arr) {
//     let repeatArr = [];  
//     for (let i = 0; i < arr.length; i++) {
//         if (!repeatArr.includes(arr[i])) {  
//             repeatArr.push(arr[i]);
//         }
//     }

//     return repeatArr;
// }

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// console.log(getSingleArr(arr)); 


// 6-misol(ishlolmadim..)


// 7-misol









// let ism = "o'zbekiston vatanim meni";
// console.log(ism.slice(-7));
// let ism2 = ism.substring(0, 4);
// console.log(ism2);

// console.log(ism.replace("o'zbekiston", "vatanim"));
// console.log(ism.replaceAll("o'zbekiston",  "yurtim"));


// let ism ="shahzod"
// let ism2 = "yomon bola"
// console.log(ism.concat(" ", ism2));

// let ism = "       uzb     "
// console.log(ism.trim());  
// console.log(ism.trimStart());
// console.log(ism.trimEnd());  


// let son = "7";
// console.log(son.padStart(5, "9"));
// console.log(son.padEnd(5, "9"));




// let ism = 'javascript '
// console.log(ism.repeat(5));



// let  ism = "yurtim senga sher bitdim bugun";
// console.log(ism.split(' '));


// let str = `
// shahzodbek
// mirjalol
// demir
// asadbek
// furqatbek
// maqsadbek
// numukhammad
// `;
// console.log(str.split( `\n`));

// let str = "paython ,java,javascript,react,angular, nodejs";
// console.log(str.includes("java"));
// console.log(str.startsWith("parthon"));
// console.log(str.endsWith("angular"));
// console.log(str.indexOf("java"));
// console.log(str.lastIndexOf("java"));
// let regex =  /nodejs/g;
// console.log(str.match(regex));
// console.log(regex.test("nodejs", "javascript"));





// let fruitArray = ['olma', 'anor', 'gilos'];
// for (let i = 0; i < fruitArray.length; i++) {
//     console.log(fruitArray[i]);
// }


// for( let i in fruitArray){
//     console.log(fruitArray[i]);
// }


// for( value of fruitArray){
//     console.log(value);
// }


//join
// console.log(fruitArray.join(' & '));


// push vs pop-oxri bilan ishlidi
//shift vs unshift-boshi bilan ishlidi



// let fruitsArray = ['olma', 'anor', 'nok', 'gilos','uzum','ananas','banan'];
// let fruts = ['moshina']
// for (let i = 0; i < fruitsArray.length; i++) {
//     fruts.push(fruitsArray[i])  
// }
// console.log(fruts);


// let num = [1,2,3]
// num.reverse();
// console.log(num);


// let fruitsArray = ['olma', 'anor', 'nok', 'gilos', 'uzum', 'malina', 'qulupnay'];
// fruitsArray.splice(4,1);
// fruitsArray.splice(2,1,  'ananas');
// fruitsArray.splice(4,0, 'tarvuz');
// console.log(fruitsArray);

//fill-to'ldiradi va qoshadi

// let fruitsArray = ['olma', 'anor', 'nok', 'gilos', 'uzum', 'malina', 'qulupnay'].fill("no value",  2, 4);
// console.log(fruitsArray);

//slice -kopiaravat

// let fruitsArray = ['olma', 'anor', 'nok', 'gilos', 'uzum', 'malina', 'qulupnay'];
// let x = fruitsArray.slice(0, 3);
// console.log(x);



// let fruitsArray = ['olma', 'anor', 'nok', 'gilos', 'uzum', 'malina', 'qulupnay'];
// fruitsArray.splice(fruitsArray.indexOf('malina'), 1,  'ananas', 'limon' );
// console.log(fruitsArray);



// concat-qoshish
// let num1 = [1,2,3];
// let num2 = [4,5,6];
// let num3 = num1.concat(num2)
// console.log(num3);


