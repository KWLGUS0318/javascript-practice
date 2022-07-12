const fs = require('fs');

let test = ['임성민','임지은','권수연','이성윤', '정수임']

for(let i = 0; i <test.length; i ++){

  
  fs.mkdir(`${test[i]}`,function(err){
    if(err === true)
    {
      console.log('에러났어')
    }
    });
}