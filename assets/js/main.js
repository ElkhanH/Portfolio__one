window.addEventListener('scroll',(event) => {
    if (scrollY > 60){
        document.querySelector('.navbars').classList.add("container");        
        document.querySelector('.navbars').classList.add("active"); 
        document.querySelector('.navbars').style.padding ="0 30px"
        document.querySelector('.navbars').style.top ="20px"
        document.querySelector('.navbars').style.transition ="0.5s all"
    }else{
        document.querySelector('.navbars').classList.remove("container");        
        document.querySelector('.navbars').classList.remove("active"); 
        document.querySelector('.navbars').style.padding ="10px 60px"
        document.querySelector('.navbars').style.top ="0px"
        document.querySelector('.navbars').style.transition =""
    }
});