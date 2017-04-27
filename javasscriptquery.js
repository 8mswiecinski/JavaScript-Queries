function samecolor(){
    const doc = document;
    let color = "#00aa00";

    let divs = doc.queryselectorAll("#samecolor div");
    for(let d=0; d<divs.length;d++){
              divs[d].style.opacity += 0.25*d;
    }
}


function diffcolor(){
  const doc = document;
  let yellow = "#aaaa00";
  let blue = "#00aaaa";

  let diffdivs = doc.querySelectorAll("#diffcolor div");
  for(let d=0; d<diffdivs.length;d=d+2){
    diffdivs[d].style.backgroundColor = yellow;
  }
  for(let d=1; d<diffdivs.length;d=d+2){
    diffdivs[d].style.backgroundColor = blue;
  }
}
