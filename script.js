// let arr2 = [1,2,3,4,10,3];

// if(3 in arr2) {
//     alert('true');
// }
// else {
//     alert(false);
// }

// if(Array.isArray(arr2)) {
//
//     for(let i = 0;;)
// }

// alert(arr2.join('/'));

// alert(arr2.reverse());

// alert(arr2.sort(function (a,b) {
//     console.log(a + '|' + b);
//     return a-b;
// }));

// let arr_res = arr2.concat(5,7,8);
// alert(arr_res);

// let arr_res = arr2.slice(-3);

// alert(arr2.splice(2, 2,5,7,1,3));

// arr2.push(10,20,30);
// arr2.pop();

// arr2.shift();

// arr2.forEach(function (v,i,a) {
//     a[i] = v + 10 ;
// });

// let res = arr2.map(function (x,i,a) {
//     return x*x;
// });

// let res = arr2.filter(function(x,i,a){
//     return x<5;
// });

// .some/.every
// let res = arr2.some(function (x) {
//  return x < 5;
// });

// let res = arr2.reduce(function (x, y) {
//     return x+y;
// },0);

// indexOf()
// lastIndexOf

// alert(arr2.lastIndexOf(3));
// alert(res);

// for(let key in arr2){
//     document.write((key + '=>' + arr2[key] + '<br />'))
// };

// let date = new Date(2020, 5, 31, 19, 45,30);
//
// alert(date.getDay());
//
// console.log(date);

function stringWork() {
    let str = document.getElementById('head').innerHTML;
    //////////////////////////////////////////////////////////
    //new String();


    // let result = typeof new String(str);
    // result = str.charAt(2);

    // let result = str[10];
    // result = str.charCodeAt(5);
    // result = str.concat('hello')

    //let result = String.fromCharCode(str.charCodeAt(3),str.charCodeAt(6))
    //let result = str.indexOf('g');
    //let result = str.indexOf('g',);

    //let result = str.slice(5,12);
    let result = str.split(' ',12);


    //////////////////////////////////////////////////////////
    document.getElementById('result').innerHTML = result;
}

window.onload = function () {
    stringWork();
}







