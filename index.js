class caracteristicaHeroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }


    atacar() {
        let ataque = ""
            switch (this.tipoHeroi){
                case "mago":
                    ataque = "magia"
                    break
                case "guerreiro":
                    ataque = "espada"
                    break
                case "monje":
                    ataque = "arte marcial"
                    break
                case "ninja":
                    ataque = "shuriken"
                    break
                default:
                    ataque = "com a cabeça"
            }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)           
        }
}   
    
let primeiroHeroi = new caracteristicaHeroi("Mohg", "28", "mago")
let segundoHeroi = new caracteristicaHeroi("Mohg", "28", "guerreiro")
let terceiroHeroi = new caracteristicaHeroi("Mohg", "28", "monje")
let quartoHeroi = new caracteristicaHeroi("Mohg", "28", "ninja")

primeiroHeroi.atacar()
segundoHeroi.atacar()
terceiroHeroi.atacar()
quartoHeroi.atacar()