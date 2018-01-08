/**
 * 数组去重
 */

function uniq(array) {
    let a = [], emp = {};

    array.forEach(item => {
        if(!emp[item]) {
            a.push(item);
            emp[item] = 1;
        } else {
            emp[item] ++;
        }
    })

    return a;
}

var ex = [1, 1, 2, 3, 3, 3, 5, 2, 1, 5, 3, 4, 2, 3, 2];
console.log(uniq(ex));  // [1, 2, 3, 5, 4]

// 利用ES6的set
console.log(Array.from(new Set(ex))) // [1, 2, 3, 5, 4]

// 利用展开运算符
console.log([...new Set(ex)]);    // [1, 2, 3, 5, 4]
