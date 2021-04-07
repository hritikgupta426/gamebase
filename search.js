(function(){

var storeItems= document.querySelectorAll('.card ');
var searchb=document.querySelector('#search');

searchb.addEventListener('keyup',(f)=>{
  var searchFilter=f.target.value.toLowerCase().trim()

  storeItems.forEach((item)=>{
    if(item.textContent.includes(searchFilter)){
      item.style.display='block';
    }
    else{
      item.style.display='none';
    }
  })
})
})();
(function(){

var storeItemss= document.querySelectorAll('.text-capitalize ');
var searchbb=document.querySelector('#searchh');

searchbb.addEventListener('keyup',(e)=>{
  var searchFilterr=e.target.value.toLowerCase().trim()

  storeItemss.forEach((itemm)=>{
    if(itemm.textContent.includes(searchFilterr)){
      itemm.style.display='block';
    }
    else{
      itemm.style.display='none';
    }
  })
})
})();
