/* Lets define a class */

class StringUtilities {
    getStringLength(str){
        return str.length;
    }

    changeCase(str,c){
        if(c === 'u' || c === 'U')
            return str.toUpperCase();
        if(c === 'l' || c === 'L')
            return str.toLowerCase();

        return str;
    }
}
/* Export the class as module */
export {StringUtilities};