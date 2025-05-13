window.onload = function(){
    const intro = document.getElementById("inicio");

    setTimeout(()=>{
        intro.classList.add("efeito-out")
        setTimeout(()=>{
            intro.style.display ="none";
            content.classList.remove("hidden")
            content.classList.add("efeito-in")
        },1000)
    },3000)
}
    document.body.classList.add('loading');
    setTimeout(() => {
  document.body.classList.remove('loading');
}, 4000);