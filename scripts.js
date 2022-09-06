
<script>
// Code for Safari 3.1 to 6.0
document.getElementById("mySidenav").addEventListener("webkitTransitionEnd", myFunction);

// Standard syntax
document.getElementById("mySidenav").addEventListener("transitionend", myFunction);

function myFunction() {
  this.innerHTML = "transitionend event occured - The transition has completed";
  this.style.backgroundColor = "pink";
}
</script>



<script>
function myFunction() {
  var x = document.getElementById("mySidenav");
  x.style. = "red";
}
</script>