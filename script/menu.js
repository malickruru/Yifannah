/*-----------------menu toggle---------------*/
function menu_deroulant(){
    if(menu === false){
        document.getElementById('menu').style.height='100vh';
        document.getElementById('menu-toggle-1').style.transform='rotate(-45deg) translateY(9px) translateX(-10px)';
        document.getElementById('menu-toggle-2').style.opacity='0';
        document.getElementById('menu-toggle-3').style.transform='rotate(45deg) translateY(-9px) translateX(-10px)';
        
        menu = true;

    }else {
        document.getElementById('menu').style.height='0vh';
        document.getElementById('menu-toggle-1').style.transform='rotate(0)';
        document.getElementById('menu-toggle-2').style.opacity='1';
        document.getElementById('menu-toggle-3').style.transform='rotate(0)';
        menu=false
    }
}