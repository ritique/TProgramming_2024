function validParentheses(parens) {
    let stack = [];
     
     for (let char of parens) {
       if (char === '(') {
         stack.push(char);
       } else if (char === ')') {
         if (stack.length === 0 || stack.pop() !== '(') {
           return false
         }
       }
     }
     
     return stack.length === 0;
     
   }