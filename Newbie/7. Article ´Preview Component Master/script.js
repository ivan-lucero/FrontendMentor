const share = document.getElementsByClassName("share");
const btn = document.getElementById("button")
btn.addEventListener("click",function(){
    share.share.classList.toggle("active")
    this.classList.toggle("active")
    console.log(share)
})
console.log(share);
