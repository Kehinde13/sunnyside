const dropdown = document.getElementById("dropdown");
const burger = document.getElementById("burger");

burger.addEventListener('click', () => {
   if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    } 
})