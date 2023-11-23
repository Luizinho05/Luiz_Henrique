const input = document.querySelector('input')

function copieOnumero(){
    navigator.clipboard.writeText(input.value).then(() => {
        alert('Copiado para área de Transferência!')
    })
}