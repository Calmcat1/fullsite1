

function tabOpener(Pgname,color,elmnt){

let tablinks, tabcontent, i, links;

//removes elements
tabcontent = document.getElementsByClassName("tabcontent");

for(i=0; i<tabcontent.length ; i++){
  tabcontent[i].style.display = "none"

}

//removes bg color
tablinks = document.getElementsByClassName("tablinks")

for(i=0; i<tablinks.length; i++){
  tablinks[i].style.backgroundColor = "";
}


links = document.getElementsByClassName("links")

for(i=0; i<links.length; i++){
  links[i].style.backgroundColor = "";
}

//setbtn color
elmnt.style.backgroundColor = color;

//show elements 
document.getElementById(Pgname).style.display = "block";


//sets color
document.getElementById(Pgname).style.backgroundColor= `${color}`


}


document.getElementById("defaultOpen").click()




function openNav() {
  
  let links, i;


  document.getElementById("sidenavcontent").style.width = "250px";

  links = document.getElementsByClassName("links")

  for(i=0; i<links.length; i++){
    links[i].style.display = "block";
  }

  document.getElementById("closebtn").style.display = "block"

  
}


function closeNav() {
  document.getElementById("sidenavcontent").style.width = "0";
  

  links = document.getElementsByClassName("links")

  for(i=0; i<links.length; i++){
    links[i].style.display = "none";
  }
  
  document.getElementById("closebtn").style.display = "none"

}

