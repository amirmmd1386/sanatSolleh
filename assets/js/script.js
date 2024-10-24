const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const searchComp = document.getElementById('collapseExample')
  

window.addEventListener("resize",()=>{

  if(window.innerWidth < 700){
    console.log("amir");
    
    searchComp.classList.remove("show")
  }
  else{
    searchComp.classList.add("show")
  
  }
})

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location)
    toastBootstrap.show()
  })
}