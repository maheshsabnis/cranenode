let obj1 = {x:10};
console.log(`obj1.x = ${obj1.x}`);

/* Equate obj1 to obj2 */
let obj2 = obj1;

console.log(`After Equating to obj2, obj2.x = ${obj2.x} and obj1.x = ${obj1.x}`);
/* Modify obj2.x to 200 */
obj2.x = 200;
console.log(`After Modification to obj2.x to 200, obj2.x = ${obj2.x} and obj1.x = ${obj1.x}`);
/* Use Object.assign() */
/*
 Parameter 1: target, the object to be created
 Para,eter 2: The Source object from which the target will be created 
*/
let obj3 = Object.assign({y:3200}, obj2);
console.log(`obj3.x , obj3.x = ${obj3.x} and obj2.x = ${obj2.x}`);
/* Lets  modify obj3.x */
obj3.x = 400;
console.log(`After Modification to obj3.x to 400, obj3.x = ${obj3.x} and obj2.x = ${obj2.x} and obj3.y = ${obj3.y}`);

/* Spread the Object */

obj3 = {...obj3, z:90};
console.log(`${JSON.stringify(obj3)}`);