// 1ci sual
// function test(eded) {
//     if (eded > 1000 && eded < 100000 && eded % 3 === 0) {
//         console.log(eded + " sertleri qarsilayir");
//     }
//     else{
//         console.log(eded +" sertleri qarsilamir");
//     }
// }

// // test(1002)
// // --------------------

// 3cu sual 
// const info = ["Resul", "Serifov", 35]
// info[1] = info[0] + ' ' + info[1];
// info.shift()
// info[1]-= 10
// console.log(info)

// info[1]=info[0]+" "+info[1]
// info[2]-=10
// info.shift()
// console.log(info);
// // ==============================

// // 2ci sual
// const user = {
//     name: 'Elnur',
//     height: 179,
//     phone: {
//         model: 'Iphone',
//     },
//     orders: ['book', 'mouse', 'mousepad']
// }

// console.log(user.height+1);
// user.phone.model="Samsung"
// user.phone.marka="S22"
// delete user.name
//  user.orders.shift()
//  user.orders.pop()
//  user.orders.unshift("ball")
//  user.orders.push("headphones")





// console.log(user);



// --------------------


// function test(ad) {
//     return ad
// }

// console.log(test("Orxan"));

// function topla(a,b,c){
//     return a+b-c

// }

// console.log(topla(20,10,5));

// ---------------
// DECLERATION , EXPRESSION
// function vurma(a,b=4){
//     return a*b
// }
// console.log(vurma(5));



// var vurma = function (a, b) {
//     console.log(a * b);
// }

// sual 1
// function test(eded){
//     if(eded>1000&&eded<100000&eded%3==0){
//         console.log(`${eded} qaliqsiz bolunur`)
//     }
//     else if(eded<1000){
//         console.log("eded bu araliqda deyil");
//     }
//     else if(eded>100000){
//         console.log("eded yuz min araliqda deyil");
//     }
//     else{
//         console.log(`${eded} qaliqsiz bolunmur`);
//     }
// }
// test(555555555555)




// const info = ["Resul", "Serifov", 35]

// info[1]=info[0]+" " +info [1]
// info.shift()
// info[1]+=65
// info[2]="Lale"
// console.log(info)

var i = 0

while (i < 10) {
    console.log(i += 1);
}