console.log("java.js er fungerende...")

function myFunction() {
    let badgetoggle = document.getElementById("badge");
    if (badgetoggle.style.display === "none") {
        badgetoggle.style.display = "block";
      } else {
        badgetoggle.style.display = "none";
      }
    }

var unlockedbadges = ["badge1", "badge2", "badge3"];
