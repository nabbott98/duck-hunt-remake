let hitDuck = [true, false, true, false, false, false, false, false, false, false,]

   hitDuck.forEach((element, i) => {
    if(element){
        console.log('true: ', i * 10)
    }
})