function randomNumber(){
    return Math.floor(Math.random()*10)
}
const message =(number) =>{
    switch(number){
        case 0:
            return "Reliance Industeries"
            break
        case 1: 
            return "NMDC"
            break
        case 2:
            return "HDFC"
            break
        case 3:
            return "BTC"
            break
        case 4:
            return "ETH"
            break
        case 5:
            return "SOL"
            break
        case 6:
            return "DOGE"
            break
        case 7:
            return "AAPL"
            break
        case 8:
            return "GOOGL"
            break
        case 9:
            return "KNR"
            break
        default:
            return "Other"
            break
    }
}
const num = randomNumber()
console.log(num + message(num))

