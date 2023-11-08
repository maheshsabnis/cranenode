import { StringUtilities } from "./stringutilities.js";

let utility = new StringUtilities();

const str = 'Node.js Module';

console.log(`Length of ${str} is = ${utility.getStringLength(str)}`);

console.log(`Upper Case of ${str} is = ${utility.changeCase(str, 'U')}`);

console.log(`Lower Case of ${str} is = ${utility.changeCase(str, 'l')}`);
