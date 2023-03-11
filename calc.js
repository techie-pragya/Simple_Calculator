function clearScreen(){
    document.getElementById("result").value="";
}
function closeScreen(){
    console.log(document.getElementById("close"));
    //var close= document.getElementById("close");
    var open= document.getElementById("open");
    var container=document.getElementById("container")
    container.style.display = "none";
    open.style.display="block";
   
}
function openCalc(){
    var open= document.getElementById("open");
    var container=document.getElementById("container");
    console.log(container);
    container.style.display="table";
    open.style.display="none"

}

function display(value) {
    document.getElementById("result").value += value;
}

function calc() {
    var p = document.getElementById("result").value;
    console.log(p)
    var q = eval(p);
    document.getElementById("result").value = q;
}

function add(a){
    document.getElementById("result").innerHTML = a;
    var result=a+b;
    return result;
}
function substract(a,b){
    var result=a-b;
    return result;
}
function multiply(a,b){
    var result=a*b;
    return result;
}
function divide(a,b){
    var result=a/b;
    return result;
}
