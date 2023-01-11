window.onload = function() {
  console.log("Script executing");
  const form = document.querySelector("form");
  
  form.onsubmit = function(event) {
    event.preventDefault();

    let aboveage = document.getElementById("aboveage");
    aboveage.setAttribute("class", "hidden");

    console.log("working");

    let belowage = document.getElementById("belowage");
    belowage.setAttribute("class", "hidden");
    
    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      aboveage.removeAttribute("class");
    } else {
      belowage.removeAttribute("class");
    }
  };
};