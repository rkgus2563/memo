let nameContainer = document.querySelector(".js-name");
//<div>객체
// 함수를 생성할때 하나의 기능만 구현하는게 좋다

function handleSubmit(event){
    event.preventDefault();
    // 이벤트가 가지고 있는 고유 속성을 막아줌
    let form = event.target; //실행하고 있는 이벤트의 객체
    let input = form.querySelector("input");
    let value = input.value;
    localStorage.setItem("username", value);
    printName(value);
}

function saveName(name){
    localStorage.setItem("username",name);    
}


function printName(name){
    nameContainer.innerHTML="";
    let title = document.createElement("span");
    title.className = "name__text";
    title.innerHTML = `안녕하세요 ${name}님`;
    nameContainer.appendChild(title);
}
function printInput(){ 
    let input = document.createElement("input"); //<input></input>
    input.placeholder = "이름을 입력하세요";
    input.type = "text";
    input.className = "name__input";
    //<form><input type = "text" class = "name_input">
    //</input></form>
    //(이벤트 버블링) : 자식이벤트가 부모까지 영향을 미치는것
    // 반대개념은 이벤트 캡쳐랑 부모이벤트가 자식까지 영향을 미치는것

    // form 안에서 enter 누르면 자동적으로 submit 발생
    //submit 발동 -> action태그가 이동할 url input text 가지고
    // document (즉 최상위 부모)까지 submit 이벤트가 작동하게
    //되는데 action 처리해주는 것이 없기 때문에 그냥
    //document에서는 새로고침을 해버린다 
    //-> 그럼 input.value가 사라짐
    let form = document.createElement("form");
    form.appendChild(input);
    form.addEventListener("submit",handleSubmit);
    nameContainer.appendChild(form); //<div><form></form>
}


function loadName(){
    // localStorage{username : "name"}
    //let name = localStorage["username"]; Storge타입 false 리턴
let name = localStorage.getItem("username"); // String 리턴
if(name === null){
    printInput();
}else{
    console.log("test");
    printName(name);
}
}

function init(){
    // init 제일 먼저 호출할 함수를 실행한다.
    loadName();
}

init();
 