const handleclick = () => {
  const body = document.querySelector("body");
  body.classList.toggle("light");

    if(body.classList.contains( "light")) {
        document.querySelector('img').src = "/PortifolioProjects/assets/avatar-light.png";
    } else  {  
        document.querySelector('img').src = "/PortifolioProjects/assets/Avatar.png";
    }
      
}
