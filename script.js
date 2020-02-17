function efeitoSnack() {
    var x = document.getElementById('efeito')
    
    x.className = "show";
    
    setTimeout(function(){x.className = x.className.replace("show", "");},3000);
}