function displaytext(){
    let text = document.getElementById("textField");
    let btnimg = document.getElementById("btnimg");
    if (text.style.display === "none") {
        text.style.display = "block";
        btnimg.src = "/project/FAQ/assets/images/icon-minus.svg" ;
       
    } else {
        text.style.display = "none"; 
        btnimg.src = "/project/FAQ/assets/images/icon-plus.svg" ;
        
    }

    
}
function displaytext2(){
    let text = document.getElementById("textField2");
    let btnimg = document.getElementById("btnimg2");
    if (text.style.display === "none") {
        text.style.display = "block"; 
        btnimg.src = "/project/FAQ/assets/images/icon-minus.svg" ;
    } else {
        text.style.display = "none"; 
        btnimg.src = "/project/FAQ/assets/images/icon-plus.svg" ;
    }
}
function displaytext3(){
    let text = document.getElementById("textField3");
    let btnimg = document.getElementById("btnimg3");
    if (text.style.display === "none") {
        text.style.display = "block";
        btnimg.src = "/project/FAQ/assets/images/icon-minus.svg" ; 

    } else {
        text.style.display = "none";
        btnimg.src = "/project/FAQ/assets/images/icon-plus.svg" ; 
    }
}
function displaytext4(){
    let text = document.getElementById("textField4");
    let btnimg = document.getElementById("btnimg4");
    if (text.style.display === "none") {
        text.style.display = "block";
        btnimg.src = "/project/FAQ/assets/images/icon-minus.svg" ; 
    } else {
        text.style.display = "none";
        btnimg.src = "/project/FAQ/assets/images/icon-plus.svg" ; 
    }
}
