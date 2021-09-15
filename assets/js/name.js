const storage = localStorage;

document.getElementById("game_start").addEventListener("click",function(){
    const name = document.getElementById("input_name").value;
    if(name == ""){
        window.alert("友人の名前を入力");
        return;
    }
    storage.setItem("name", name);
    window.location.href = './main.html';
});
