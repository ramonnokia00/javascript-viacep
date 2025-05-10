

function buscarCep() {
    try {
        let cepValue = document.querySelector("#cep").value;
        

        fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
               document.querySelector("#endereco").value = data.logradouro || ""; 
               document.querySelector("#bairro").value = data.bairro || ""; 
               document.querySelector("#cidade").value = data.uf || ""; 
               document.querySelector("#estado").value = data.estado || ""; 
            })
            .catch(error => {
                alert(error, "errou ai ne migão vamo colocar um cep certo");
            })
          

    }
        catch (error) {
        console.error("Erro inesperado:", error);
        alert("Erro inesperado ao buscar o CEP.");
    }
}
        