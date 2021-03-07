const modalCTA = document.querySelector(".modal-CTA");
const modalInterstitial = document.querySelector(".modal-interstitial");
const modalClose = document.querySelector(".close-button");

modalCTA.addEventListener("click", ()=>{
    modalInterstitial.classList.add("active");
    document.body.style.overflow = "hidden"
})

modalClose.addEventListener("click", ()=>{
    modalInterstitial.classList.remove("active");
    document.body.style.overflow = "visible"
})

