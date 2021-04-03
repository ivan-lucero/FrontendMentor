bottom = document.querySelector(".share");
tooltip = document.querySelector(".tooltip");
console.log(bottom);
console.log(tooltip)

bottom.addEventListener("click", () => {
    tooltip.classList.toggle("active");
})