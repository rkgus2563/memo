let form = document.querySelector(".js-to-do"); // form
let input = document.querySelector(".js-add-to-do"); // input
let list = document.querySelector(".js-list"); // ul 객체
//삽입
// input 받아와서 -> toDos 배열에 넣어주기 
// toDos --> localStorage에 한꺼번에 넣기 위해서 배열만들어줌
//html 화면에 input 값 보여주기

let toDos = []; //할일을 적으면 쌓이는 곳 //객체 배열의 형태
//ArrayList<studentDTO> // 객체의 배열 toDoObj 객체가
//각각의 toDos 방에 들어가 있는거
// Arraylist<studentDTO> list = new ArrayList();
// studentDTO student = new Student();
//list
function saveToLocal(){
    let StringToDo = JSON.stringify(toDos);
    localStorage.setItem("toDos",stringToDo);
}
function saveToDo(){
    let toDoObj = {
        text : text,
        id : toDos.length+1
    };
    toDos.push(toDoObj);
    saveToLocal();

}
function addToDo(text){
    let toDo = document.createElement("li");
    toDo.className = "toDo";
    toDo.id = toDos.length + 1;
    let label = document.createElement("label");
    label.innerHTML = text;
    toDo.appendChild(label);
    list.appendChild(toDo); //<ul><li></li></ul>
}

function onSubmit(){
    event.preventDefault();
    let value = input.value;
    input.value = "";
    addToDo(value);
}


function loadToDos(){
    // 배열 -> 로컬스토리지는 배열을 저장 못한다:
    let loadedToDos = localStorage.getItem("toDos");
    //"toDos" JSON.stringfiy(toDoObj) : 객체를 String로
    // 만들어서 로컬스토리지에 저장한 애
    let todo = toDos[0];
    if(loadedToDos !== null){
        // addToDo(toDo);
        // 이미 객체 -> String 만들어 놨으니깐
        // String에 저장되어 있는 값을 배열로 만들어주면된다
        let parseToDos = JSON.parse(loadedToDos);
        //1. localStorage -> toDos 배열을 가져오고 
        parseToDos.forEach(function(toDo){
            //toDo라는 객체 toDoObj를 한개씩 가져온다
                addToDo(toDo.value);
        });
    }
}

function init(){
 loadToDos();
}

form.addEventListener("submit",onSubmit);
init();