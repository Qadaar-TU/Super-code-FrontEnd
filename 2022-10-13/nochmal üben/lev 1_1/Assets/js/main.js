
function Rechner(){
    event.preventDefault();

    const Headliner = document.querySelector ("h1")

const nummmer = document.querySelector("#bäm").value

Headliner.innerHTML = "Das ergibt " + nummmer*2;

}
