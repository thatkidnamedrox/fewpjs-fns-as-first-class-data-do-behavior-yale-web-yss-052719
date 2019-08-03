/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str){
  let [hours,] = str.split(":");
  let h = parseInt(hours);
  if (h < 12) {
    return "Good Morning";
  } else if (h < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(content) {
  document.getElementById("greeting").innerText = content;
}
