let duckColor = ['b','v','r']
let duckDirection = ['h','d','s','f']
let assetNum = [3,3,1,4]
let duckB = []
let duckV = []
let duckR = []

for(let i = 0; i < 4; i++){
    duckB[i] = new Image()
    duckB[i].src = `individual-assets/duck-b-h-${i+1}.png`

    duckV[i] = new Image()
    duckV[i].src = `individual-assets/duck-v-h-${i+1}.png`

    duckR[i] = new Image()
    duckR[i].src = `individual-assets/duck-r-h-${i+1}.png`
}
