module.exports = function check(str, bracketsConfig) {
  if(str.length%2!==0)
      return false;
  newStr = str.split('');
  stack = [];
  for(let i = 0; i < newStr.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if(newStr[i]===bracketsConfig[j][0])
          stack.push(bracketsConfig[j][0]);
          if(bracketsConfig[j][0]!==bracketsConfig[j][1]){
              if(newStr[i]===bracketsConfig[j][1]){
                  if(bracketsConfig[j][0]!==stack.pop())
                      return false;
              }
          }
          else{
              if(stack[stack.length - 1] === bracketsConfig[j][0])
                  stack.pop();
          }
      }
  }

  return stack.length === 0;
}
