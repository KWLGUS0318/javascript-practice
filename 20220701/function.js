function name1() {
  alert('hello')
}


function name2(){
  alert('hello')
}
name2()
name1()


let username = "john";

function showmessage(){
  let mesaage = 'hello' + username
  alert(message)
}
showmessage();


function message (form , text){
  alert(from + `:` + text)

}
message('ann', 'hello')
message('ann', 'whats up?')



return

function sum (a,b){
  return a+ b
}

let result = sum(2,3)
alert(result)


function jihyeon (age){
  if(age>=18){
    return true;
  }else{
    return confirm ( '보호자의 동의를 받으셨나요')
  }
}

let age = prompt('나이를 알려주세요 ', 23)
if(jihyeon(age)){
  alert('접속 혀용')
}else{alert('접속 차단')}


function ahyeon (name) {
  if(ahyeon(name)){
    return alert('its okay')
  }
  else{ return alert('not okay')
}}


function sayhi (){
  alert('hello')
}

let sayhi = function(){
  alert('hello')
}


function sayhi(){
  alert('hello')
}

alert(sayhi)







function ask (question,yes,no){
  if(confirm(question)) yes()
  else no();
}

function showOk(){
alert('동의하셧습니다.')}

function showcancel(){
  alert('취소 누르셨습니다.')
}

ask('동의하십니까', showOk,showcancel)


// practice

function jihyeon(question, yes, no){
  if(confirm(question)) yes()
  else no();
}

function chekck(){
  confirm('확인')
}

function nopt(){
  confirm('확인 안됨')
}

jihyeon('question',chekck,nopt)
