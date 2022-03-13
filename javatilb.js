function myFunction() {
  let x = document.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 7 || x > 203) {
    text = "Koden er forkert";
  } else {
    text = "Koden er godkendt";
  }
  document.getElementById("demo").innerHTML = text;
}
