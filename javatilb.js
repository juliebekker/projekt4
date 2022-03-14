function myFunction() {
  let x = document.getElementById("nummer").value;
  let text;
  if (isNaN(x) || x < 7 || x > 203) {
    text = "Koden er ikke gyldig";
  } else {
    text = "Koden er korrekt"
  }
  document.getElementById("indtastkode").innerHTML = text;
}
