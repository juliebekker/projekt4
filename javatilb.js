document.getElementById('belønning').style.visibility='hidden';


function myFunction() {
  let x = document.getElementById("nummer").value;
  let text;
  if (isNaN(x) || x < 7 || x > 203) {
    document.getElementById('belønning').style.visibility='hidden';
    text = "Koden er ikke gyldig";
  } else {
    document.getElementById('belønning').style.visibility='visible';
    text = "Koden er korrekt";
  }
}
