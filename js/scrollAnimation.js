window.addEventListener('load', () => {
    const nav = document.getElementsByClassName('nav')[0];
    
   setInterval(() => {
      if(scrollY > 1){
        nav.style.opacity = 0.98;  
        nav.style.boxShadow = '2px 2px 8px rgba(0,0,0,0.5)';
      } else{
        nav.style.opacity = 0.8;  
        nav.style.boxShadow = 'none';
      }
   }, 10); 
});