var txt = document.getElementById("txt")
var pt = document.getElementById("pt")
var foto = document.getElementById("img")
var frase = document.getElementById("res")
function procurar(){
    frase.innerHTML=(`Cidade: ${txt.value}`)
    if(txt.value =="Porto" || txt.value == "porto"){
        foto.src = "porto.png"
    }else if(txt.value =="Lisboa" || txt.value =="lisboa"){
        foto.src = "lisboa.jpg"
    }else if(txt.value =="Algarve" || txt.value =="algarve"){
        foto.src = "algarve.jpg"
    }else if(txt.value =="Coimbra" || txt.value =="coimbra"){
        foto.src = "coimbra.jpg"
    }else if(txt.value =="Aveiro" || txt.value == "aveiro"){
        foto.src = "aveiro.jpg"
    }else if(txt.value.length==0){
        window.alert("Tens que preencher o campo em branco.")
        frase.innerHTML=("")
        txt.value=("")
        txt.focus()
    }else{
        window.alert("Cidade inválida.")
        frase.innerHTML=("")
        txt.value=("")
        txt.focus()
    }
}