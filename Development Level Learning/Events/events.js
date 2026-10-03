    document.getElementById('image-list').addEventListener('click', function(e){alert("Owl Clicked once"); e.stopPropagation()},false)
    document.getElementById('img-1').addEventListener('click', function(){alert("Owl Clicked");},false)

    document.getElementById('google').addEventListener('click',(e)=>{e.preventDefault();
    alert("Google clicked")},false)

    document.querySelector(".image-gallery").addEventListener('click',(e)=>
    {
      let removeit = e.target.parentNode;
      removeit.remove();
    })

const targetImage = document.getElementById('img-1');
targetImage.addEventListener('mouseover', () => targetImage.style.border = '5px solid red');
targetImage.addEventListener('mouseout', () => targetImage.style.border = 'none');
