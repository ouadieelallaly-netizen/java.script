let me = document.getElementById("first");
let you = document.getElementById("second");
let her = document.getElementById("forma");

me.addEventListener("click",function(){
    console.log("how are you");

});

you.addEventListener("input",function(){
    console.log("we are here");
     
});

her.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("big thanks for being here");

});