function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    if(min<10){
        msg.innerHTML = `Agora são ${hora}:0${min}.`
    }else{
    msg.innerHTML = `Agora são ${hora}:${min}.`
    }
    
    if(hora>= 5 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#D98C4A'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#E5CDCD'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#0F2426'
    }
}
