let user = {
  name: 'john',
  age: 30,

 sayhi() {
  alert(user.name)
}
};


let admin = user;
user = null;
admin.sayhi();


function min(a,b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

function min(a, b) {
  return a < b ? a : b;
}

