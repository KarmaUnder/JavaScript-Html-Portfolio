function seleccionar(link){
 
    var links = document.getElementById("links").getElementsByTagName("li");
 
    links[0].children[0].className="";
    links[1].children[0].className="";
    links[2].children[0].className="";
    links[3].children[0].className="";
    links[4].children[0].className="";
    link.className="seleccionado";

    var x= document.getElementById("nav");
    x.className="";
}


function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }
    else{
        x.className = "";
    }
}

window.onscroll = function(){
    efectoHabilidades();
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills>= 200){
        console.log("se activa")
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
};