/*docpress input vars*/
let detail = document.getElementById('Nametxt');
let diag = document.getElementById('diagnose');
let tab1 = document.getElementById('med1');
let tab2 = document.getElementById('med2');
let tab3 = document.getElementById('med3');

/*patient view vars*/
let viewname = document.getElementById('first');
let viewdets1 = document.getElementById('second');
let viewdets2 = document.getElementById('third');


function savedata(){
    localStorage.setItem("dets", detail.value);
    localStorage.setItem("diagnosis", diag.avlue);
    localStorage.setItem("med1", tab1.value);
    localStorage.setItem("med2", tab2.value);
    localStorage.setItem("med3", tab3.value);
    // let x = detail.value;
    // let diagnosis = diag.value;
    // let med1 = tab1.value;
    // let med2 = tab2.value;
    // let med3 = tab3.value;
    console.log(x,diagnosis,med1,med2,med3);
    viewname.value = localStorage.getItem("dets");
    viewdets1.value = localStorage.getItem("diagnosis");
    viewdets2.value = localStorage.getItem("med1","med2","med3");
}

function prompter(){
    alert("Data Added Successfully!");
}

