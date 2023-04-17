// new produk
$(()=>{
    $('.new-produk').slice(0, 3).show()
    $('.load-more').click(function(e){
      e.preventDefault()
      $('.new-produk:hidden').slice(0, 3).slideDown()
    })
})

// navbar 
var nav = document.querySelector("nav")
window.addEventListener("scroll",()=>{
  if (document.documentElement.scrollTop > 20){
    nav.classList.add("stiky");
  }else{
    nav.classList.remove("stiky");
  }
})