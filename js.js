var table = document.getElementById("table")

fetchData()
async function fetchData() {
    var response = await fetch('https://kineticzephyr.onrender.com/periodictable/')
    var responseData = await response.json()

    makeElementsDiv(await responseData.data)
}

// async function imageApiFunc(title) {
//     var fetchImage = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&titles=${title}`)
//     var fetchImageJson = await fetchImage.json()
//     return (await fetchImageJson.query.pages[0].thumbnail.source)
// }



async function makeElementsDiv(data) {
    console.log(data);
    for (var i = 0; i < 118; i++) {
        var Element = document.createElement("a")
        Element.innerHTML = data[i].number + "<br>" + data[i].symbol
        Element.title = data[i].name
        Element.className = ("Element")
        Element.href = data[i].source
        Element.target = "_blank"
        Element.setAttribute("xpos", data[i].xpos)
        Element.setAttribute("ypos", data[i].ypos)
        Element.setAttribute("summary", data[i].summary)

        Element.addEventListener("mouseover", mouseOver)
        Element.addEventListener("mouseout", mouseOut)
        Element.addEventListener("mousedown", mousedown)
        table.appendChild(Element)
    }
    var AllElement = document.querySelectorAll(".Element")
    AllElement[1].style.gridColumnStart = ("18")
    AllElement[4].style.gridColumnStart = ("13")
    AllElement[12].style.gridColumnStart = ("13")

    var tooltip = document.createElement("div")
    var image = document.createElement("img")
    var info = document.createElement("p")
    tooltip.classList.add("tooltip")

    async function mouseOver(e) {
        tooltip.style.top = `-${e.target.getAttribute("ypos") * 35}`
        if (e.target.getAttribute("xpos") > 12) {
            tooltip.style.left = "-300px"
        } else {
            tooltip.style.left = "50px"
        }

        e.target.classList.add("animationMouseOver")
        e.target.appendChild(tooltip)
        var fetchImage = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&titles=${e.target.title}`)
        var fetchImageJson = await fetchImage.json()
        // console.log(await fetchImageJson);
        image.src = `${await fetchImageJson.query.pages[0].thumbnail.source}`
        if (image.src) { tooltip.appendChild(image) }
        info.innerHTML = e.target.getAttribute("summary")
        // console.log(e.target.getAttribute("summary"));
        tooltip.appendChild(info)
    }
    function mouseOut(e) {
        e.target.classList.remove("animationMouseOver")
        if (e.target.contains(tooltip)) { e.target.removeChild(tooltip) }
        if (tooltip.contains(image)) { tooltip.removeChild(image) }
        image.src = ""
    }
    function mousedown(e) {
        e.target.classList.add("animationmousedown")
    }
    var c = 3
    for (i = 56; i <= 69; i++) {
        AllElement[i].style.background = ("#8458B3")
        AllElement[i].style.gridRowStart = ("8")
        AllElement[i].style.gridColumnStart = (c)
        AllElement[i].style.marginTop = "30px"
        c++
    }
    c = 3
    for (i = 88; i <= 101; i++) {
        AllElement[i].style.background = ("#d0bdf4")
        AllElement[i].style.gridRowStart = ("9")
        AllElement[i].style.gridColumnStart = (c)
        AllElement[i].style.marginTop = "30px"
        c++
    }
    // AllElement[56].style.gridColumnStart = ("2")
    // AllElement[56].style.gridRowStart = ("8")

}


















// fetch.get('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url8utf8=&format=json&origin=*&srlimit=20&srsearch=messi').then((res)=>{
//     console.log(res);
// })


// logMovies()
// async function logMovies() {
//     const response = await fetch("https://kineticzephyr.onrender.com/periodictable/");
//     const movies = await response.json();
//     console.log(movies);
//   }