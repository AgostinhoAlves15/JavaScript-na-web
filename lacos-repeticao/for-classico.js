const notas = [10,8.5,5,6.5,8,7.5]


// //for clássico 
// for (let i=0; i<5; i++){
//     //bloco de código que sera repetido
//     alert(`i é igual a ${i}`)
//     //i==0 -> i==1 -> i==3 -> i==4 -> i==5
// }


let somadasnotas = 0

for (let indice = 0; indice<notas.length;indice++){
    // alert(`indice: ${indice} | nota: ${notas[indice]}`)
    somadasnotas =somadasnotas+notas[indice]
    alert(somadasnotas)
}
//media usando for
let media = somadasnotas/notas.length
alert(media)