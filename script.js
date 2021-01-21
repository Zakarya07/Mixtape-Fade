function scrollAppear(){
    var paragraphsToFade = document.querySelectorAll(".paragraphs_to_fade");
    var paragraphsPosition;
    for (let i = 0; i < paragraphsToFade.length; i++) {
      paragraphsPosition=paragraphsToFade[i].getBoundingClientRect().top;
      var screenSize=window.innerHeight;
      if(paragraphsPosition < screenSize && !paragraphsToFade[i].classList.contains("fadeInAnimation") ){
  
        paragraphsToFade[i].classList.add("fadeInAnimation");
            console.log('added class');
      }    
    }
  }
  window.addEventListener("scroll",scrollAppear);
  