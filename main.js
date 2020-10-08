function showMenu(menu_info){
    var nav_menu = document.getElementById("nav-menuu");
    if(menu_info.classList.contains("change")) 
    {
        menu_info.classList.remove("change");
        nav_menu.classList.remove("nav-min");
    }
    else{
        menu_info.classList.toggle("change");
        nav_menu.classList.add("nav-min");
    }
   
}