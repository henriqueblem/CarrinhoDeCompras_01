let valorTotal;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let somaProduto = quantidade * valorUnitario;
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${somaProduto}</span>
        </section>`

    valorTotal = valorTotal + somaProduto;
    let campototal = document.getElementById('valor-total');
    campototal.textContent = `R$ ${valorTotal},00`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0,00';
}
