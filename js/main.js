let aiguille = document.querySelector("#aiguille");




setInterval(function(){

    var now = new Date();

    var secondes = now.getSeconds();

    

    aiguille.style.transform = 'rotate('+secondes * 6 +'deg)'; 
    
    
},1000)


