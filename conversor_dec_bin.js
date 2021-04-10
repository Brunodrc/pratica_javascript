let entrada = 27
let total = []
while (entrada >= 2) {
    resto = entrada % 2
    div_interia = Number.parseInt(entrada / 2)
    total.push(resto)
    entrada = div_interia
}
console.log(total.reverse())
