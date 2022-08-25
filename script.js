function encontrarValor(p1,p2){
let numerosDiferentes =0

for(let i=0;i<p1.length;i++){
    if(p1[i] != p2){
        numerosDiferentes++
    }
}
return numerosDiferentes
}