
function shuffle_string(s,indices) {
 let res = Array(s.length);

  for (let i = 0; i < s.length; i++) {
    res[indices[i]] = s[i];
  }

  console.log(res.join(""));
}

(shuffle_string("acciojob",[4,5,6,7,0,2,1,8,3]))