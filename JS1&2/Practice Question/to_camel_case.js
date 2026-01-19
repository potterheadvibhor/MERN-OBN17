let str="how_are_you"
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "_") {
        result += str[i + 1].toUpperCase(); 
        i++;
      } else {
        result += str[i];
      }
    }
    console.log(result);
  
