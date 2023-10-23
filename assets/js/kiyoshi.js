let k = document.getElementById('kiyoshi')

document.addEventListener("keydown", function (event) {
    switch(event.key){
        case "k":
            k.style.display = "block"
            setTimeout(function(){
                k.style.display = 'none'

            }, 4800)
        break;
    }
})