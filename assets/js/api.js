const ChooseItemElm = document.getElementById('chooseItem')
const provinceElm = document.getElementById('province')
const backElm = document.getElementById('back')
// const chooseItemPlaceElm = document.getElementById('chooseItemPlace')
let loadFunc= (()=>{
  fetch('../../ostan.json') // Replace with your API call
  .then(response => response.json())
  .then(data => {
  
    data.forEach(element => {
        const newElement = document.createElement('option');
        newElement.value = element.name;
        newElement.textContent = element.name;
        provinceElm.insertAdjacentElement('beforeend', newElement);
    });
  });
})
let choozeItemFunc = (id)=>{
    fetch('../../shahrak.json') // Replace with your API call
  .then(response => response.json())
  .then(data => {
   ChooseItemElm.innerHTML=""
  
   
    data[id-1].shahrak.forEach(element => {
        const newElement = document.createElement('a');
        newElement.className = 'Sanatbutton hvr-rectangle-in long';
       newElement.setAttribute("href",`${window.location}شهرک-صنعتی/${element.location}/${element.name.split(" ").join("-")}`)
        newElement.textContent = element.name;
        ChooseItemElm.insertAdjacentElement('beforeend', newElement);

    });
     const buttonElement = document.createElement('button');
  buttonElement.className = "btn btn-outline-warning btn-lg rounded-10  text-dark";
  buttonElement.addEventListener(("click"),()=>{
    backToProvince()
   })
   buttonElement.textContent = "بازگشت";
   backElm.insertAdjacentElement('beforeend', buttonElement);
  });
 


    
}

let backToProvince =()=>{
    fetch('../../ostan.json') // Replace with your API call
    .then(response => response.json())
    .then(data => {
     ChooseItemElm.innerHTML=""
      data.forEach(element => {
          const newElement = document.createElement('a');
          newElement.className = 'Sanatbutton hvr-rectangle-in long';
         newElement.addEventListener(("click"),()=>{
          choozeItemFunc(element.id)
         })
          newElement.textContent = element.name;
          ChooseItemElm.insertAdjacentElement('beforeend', newElement);
      });
    });
     backElm.innerHTML=""
}