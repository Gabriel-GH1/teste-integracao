function pagamento(valor) {
    if (valor > 0) {
        return "Pagamento aprovado";
    } else {
        return "Erro: valor inválido";
    }
}

function carrinho(produtos) {
    if (produtos.length === 0) {
        return "Carrinho vazio";
    }
    return pagamento(produtos.length * 10);
}

// Driver simulando a interface
console.log(carrinho(["produto1", "produto2"]));
console.log(carrinho([]));
