function envio(){
    let valorArmazenado = document.getElementById('nome').value;
    localStorage.setItem('numero', valorArmazenado)
}
console.log('numero armazenado')
