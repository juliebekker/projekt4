function myFunction() {
  let x = document.getElementById("nummer").value;
  let text;
  if (isNaN(x) || x < 7 || x > 203) {
    text = "Koden er ikke gyldig";
  } else {
    text = "Koden er korrekt"
    x.style.display = "none";
  }
  document.getElementById("indtastkode").innerHTML = text;
}
