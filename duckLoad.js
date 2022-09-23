let duckBR = []
let duckVR = []
let duckRR = []

let duckBL = []
let duckVL = []
let duckRL = []

let duckBDR = []
let duckVDR = []
let duckRDR = []

let duckBDL = []
let duckVDL = []
let duckRDL = []

let duckBF = []
let duckVF = []
let duckRF = []

for(let i = 0; i < 4; i++){
    duckBR[i] = new Image()
    duckBR[i].src = `individual-assets/duck-flight-b-h-${i+1}.png`

    duckVR[i] = new Image()
    duckVR[i].src = `individual-assets/duck-flight-v-h-${i+1}.png`

    duckRR[i] = new Image()
    duckRR[i].src = `individual-assets/duck-flight-r-h-${i+1}.png`

    duckBDR[i] = new Image()
    duckBDR[i].src = `individual-assets/duck-flight-b-d-${i+1}.png`

    duckVDR[i] = new Image()
    duckVDR[i].src = `individual-assets/duck-flight-v-d-${i+1}.png`

    duckRDR[i] = new Image()
    duckRDR[i].src = `individual-assets/duck-flight-r-d-${i+1}.png`

    duckBL[i] = new Image()
    duckBL[i].src = `individual-assets/flip/duck-flight-b-h-${i+1}.png`

    duckVL[i] = new Image()
    duckVL[i].src = `individual-assets/flip/duck-flight-v-h-${i+1}.png`

    duckRL[i] = new Image()
    duckRL[i].src = `individual-assets/flip/duck-flight-r-h-${i+1}.png`

    duckBDL[i] = new Image()
    duckBDL[i].src = `individual-assets/flip/duck-flight-b-d-${i+1}.png`

    duckVDL[i] = new Image()
    duckVDL[i].src = `individual-assets/flip/duck-flight-v-d-${i+1}.png`

    duckRDL[i] = new Image()
    duckRDL[i].src = `individual-assets/flip/duck-flight-r-d-${i+1}.png`

    duckBF[i] = new Image()
    duckBF[i].src = `individual-assets/duck-flight-b-f-${i+1}.png`

    duckVF[i] = new Image()
    duckVF[i].src = `individual-assets/duck-flight-v-f-${i+1}.png`

    duckRF[i] = new Image()
    duckRF[i].src = `individual-assets/duck-flight-r-f-${i+1}.png`
}

let duckBS = []
let duckVS = []
let duckRS = []

duckBS[0] = new Image()
duckBS[0].src = `individual-assets/duck-flight-b-s-1.png`

duckVS[0] = new Image()
duckVS[0].src = `individual-assets/duck-flight-v-s-1.png`

duckRS[0] = new Image()
duckRS[0].src = `individual-assets/duck-flight-r-s-1.png`

const brownDuck = [duckBR, duckBL, duckBDR, duckBDL, duckBS, duckBF]
const violetDuck = [duckVR, duckVL, duckVDR, duckVDL, duckVS, duckVF]
const redDuck = [duckRR, duckRL, duckRDR, duckRDL, duckRS, duckRF]

const ducksImgs = [brownDuck, violetDuck, redDuck]
console.log(ducksImgs[1][4][0])