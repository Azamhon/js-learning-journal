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

// function stringWork() {
//     let str = document.getElementById('head').innerHTML;
//     //////////////////////////////////////////////////////////
//     //new String();
//
//
//     // let result = typeof new String(str);
//     // result = str.charAt(2);
//
//     // let result = str[10];
//     // result = str.charCodeAt(5);
//     // result = str.concat('hello')
//
//     //let result = String.fromCharCode(str.charCodeAt(3),str.charCodeAt(6))
//     //let result = str.indexOf('g');
//     //let result = str.indexOf('g',);
//
//     //let result = str.slice(5,12);
//     //let result = str.split(' ',12);
//     // let result = Math.abs(-10);
//     // let result = Math.acos(-1);
//     // let result = Math.asin(-1);
//
//
//     //////////////////////////////////////////////////////////
//     document.getElementById('result').innerHTML = result;
// }
//
// window.onload = function () {
//     stringWork();
// }

// let obj = {
//     one : 'Hello',
//     two : 'World',
// };
// let date = new Date();
// let arr = new Array();
// let obj2 = new Object();

// let o = {
//     prop1: 10,
//     prop2: 20,
//
//     func: function () {
//         console.log(this.prop1 + this.prop2);
//     },
//
//     get summ() {
//         return this.prop1 + this.prop2;
//     },
//
//     set summ(value) {
//         this.prop1 += value;
//     }
// }
// o.summ = 5;
// console.log(o.summ);

// Object.defineProperty(o, 'prop3', {
//     value:100,//znachenie
//     writable: true,//dostupnost k izmeneniyam
//     enumerable: true,//ispolzovanie dlaperechesleeniya v cikle
//     configurable: true,//dostupnost k nastroyke
// });

// let o2 = new duu(a,b,c);

// function People(name, age) {
//     this.name = name;
//     this.age = age;
//
//     // this.summ = function () {
//     //     return this.name + ' - ' + this.age;
//     // }
// }
// People.prototype = obj;
// People.prototype.summ = function () {
//     return this.name + ' - ' + this.age;
// }
//
// let Ben= new People('Ben', 16);
//
// console.log(obj.summ());

// window.alert('hello');
// function  foo() {
//     alert('hello');
// }
//
// window.document.getElementById('id');


// window.setTimeout();
//
// window.setInterval();


window.onload = function () {
    let wrap = document.getElementById('popup_overlay');

    let closeB = document.getElementById('popup_close');
    closeB.onclick = popupClose;

    let inP = document.getElementById('popupIn');
    inP.onclick = popup;

    let tIn, tOut;

    function popup() {
        wrap.style.display = 'block';
        popupIn(1);

    }

    function popupClose() {
        popupOut(0);
    }
    function popupIn(x){
        let op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if(op < x) {
            clearInterval(tOut);
            op +=0.05;
            wrap.style.opacity = op;
            tIn = setTimeout(function () {
                popupIn(x);
            },50, x)
        }
    }

    function popupOut(x){
        let op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;
        clearInterval(tIn);
        if(op > x) {
            op -=0.05;
            wrap.style.opacity = op;
            tOut = setTimeout(function () {
                popupOut(x);
            },100, x)
        }
        if(wrap.style.opacity == x){
            wrap.style.display = 'none';
        }
    }
    //setTimeout(popup, 3000);
    let h1 = document.getElementById('header');
    h1.onclick = function () {
        clearTimeout(intStop);
    }

    function  changeColor() {
        if (h1.style.color == 'black') {
            h1.style.color = 'white'
        }
        else {
            h1.style.color = 'black'
        }
    }
    let intStop = setInterval(changeColor,500);
    let str, result;
    do {
         str = prompt('Your Stroke');
         result = confirm('Are you sure that ' + str + '?');

    } while(!result)

    alert(str);
}