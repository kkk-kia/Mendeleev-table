var table = document.getElementById("table")

makeElementsDiv()


function makeElementsDiv(){
    for(var i=0; i<118; i++){
        var Element = document.createElement("div")
        Element.style.background = "red"
        Element.className = ("Element")
        Element.style.width = "50px"
        Element.style.height = "50px"
        Element.style.border = "1px solid black"
        table.appendChild(Element)
    }
    var AllElement = document.querySelectorAll(".Element")
    AllElement[1].style.gridColumnStart = ("18")
    AllElement[4].style.gridColumnStart = ("13")
    AllElement[12].style.gridColumnStart = ("13")
    for(i=0; i<AllElement.length; i++){
        AllElement[i].addEventListener("mouseover",mouseOver)
        AllElement[i].addEventListener("mouseout",mouseOut)
    }
    function mouseOver(e){
        e.target.classList.add("bg")
    }
    function mouseOut(e){
        e.target.classList.remove("bg")
    }
    var c = 3
    for(i=56; i<=69; i++){
        AllElement[i].style.background = ("blue")
        AllElement[i].style.gridRowStart = ("8")
        AllElement[i].style.gridColumnStart = (c)
        c++
    }
    c = 3
    for(i=88; i<=101; i++){
        AllElement[i].style.background = ("green")
        AllElement[i].style.gridRowStart = ("9")
        AllElement[i].style.gridColumnStart = (c)
        c++
    }
    // AllElement[56].style.gridColumnStart = ("2")
    // AllElement[56].style.gridRowStart = ("8")

}