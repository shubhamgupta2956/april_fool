function myFunction() {
  idArray = new Array()
  idArray [1] = "First paragraph text"
  idArray [2] = "Second paragraph text"
  idArray [3] = "Third paragraph text"
  idArray [4] = "Fourth paragraph text"
  idArray [5] = "Fifth paragraph text"

  document.getElementById("button").onclick = myFunction;
  randomParagraph = Math.floor(Math.random()*5);
  document.getElementById("comments").innerHTML = idArray[randomParagraph + 1];       
  document.getElementById('welcomeDiv').style.display = "block";
}