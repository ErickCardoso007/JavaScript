const nickname = "KING"
//nickname = "Jonas" (erro!!)

const sigla = "OFF"
//const sigla = "ON" (erro!!)

const caracter = "zz"
//const caracter = "xxx" (erro!!)

const nicknameComplete = nickname.concat().concat(" ").concat(sigla).concat(" ").concat(caracter)
//const nicknameComplete = nickname + " " + sigla + " " + caracter 
//(O tipo de concatenação acima também funciona)

console.log(nicknameComplete);