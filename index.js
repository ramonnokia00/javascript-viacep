function buscarCep() {
    try {
     let cepValue = document.querySelector("#cep").value;
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })   
    .catch(error => {
        alert("errou ai ne migão vamo colocar um cep certo");
    })
    .finally(() => {
        alert("OK");
    })
    } catch (error) {
        alert("escreveu algo errado ai no codigo migão");
    }
    
}
