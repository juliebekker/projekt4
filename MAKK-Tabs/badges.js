let unlockedbadges = ["badge1", "badge2", "badge3", "badge4"];
let lockedbadges = ["badge5", "badge6", "badge7", "badge8"];

var output=document.getElementById("out");
if (unlockedbadges[2]=="badge3"){
    console.log ("yes")
}else{
    console.log ("no")
}

document.getElementById("Laest").innerHTML = lockedbadges;
document.getElementById("Optjente").innerHTML = unlockedbadges;

    function openPage(pageName,elmnt,color) {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
      document.getElementById(pageName).style.display = "block";
      elmnt.style.backgroundColor = color;
    }
    
    document.getElementById("defaultOpen").click();