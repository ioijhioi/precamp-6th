let timer = 10
setInterval(()=> {
    if(timer >= 0){
        console.log(timer)
        timer = timer -1
    }
}, 1000)