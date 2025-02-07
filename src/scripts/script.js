function showmenu (){
    const showmenu=document.getElementById("side_menu");
    const image= document.getElementById("sandwich_menu");
    if(showmenu.classList.contains("hidden")){
        showmenu.classList.remove("hidden");
        image.src="../assets/cross.svg";
    }
    else{
        showmenu.classList.add("hidden");
        image.src="../assets/sandwich_menu.svg";
    }    
}