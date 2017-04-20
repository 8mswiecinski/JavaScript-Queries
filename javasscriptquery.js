function samecolor(){
    const doc = document;
    let color = "#00aa00";

    let divs = doc.queryselectorAll("#samecolor div");
    for(let d=0; d<divs.length;d++){
        divs[d].style.backgroundcolor = color;
        divs[d].style.opacity += 0.25*d;
    }
}
