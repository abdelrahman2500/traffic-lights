var colorArr = ["#F44336", "#ffeb3b", "#009688"]
var stepArr = ["stop", "steady", "go"]
var spans = document.querySelectorAll("span")
var pe = document.querySelector("p")
var i =0;


function changeColor(){
    for (var index = 0; index < spans.length; index++) {
        spans[index].style.backgroundColor = "grey";
    }
    spans[i].style.backgroundColor = colorArr[i]
    pe.innerHTML = stepArr[i]
    pe.style.color =colorArr[i]

    i++
    if(i>2){
        i = 0;
    }

}

setInterval("changeColor()", 2000)