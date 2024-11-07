class Material {
    constructor(codMaterial, descMaterial, qtdeEstoque = 0) {
        this.codMaterial = codMaterial;
        this.descMaterial = descMaterial;
        this.qtdeEstoque = qtdeEstoque;
    }

    entrarMaterial(qtd) {
        this.qtdeEstoque += qtd;
        alert("Entrada do material realizada com sucesso!");
    }

    sairMaterial(qtd) {
        if (this.qtdeEstoque >= qtd) {
            this.qtdeEstoque -= qtd;
            alert("Saída do material realizada com sucesso!");
        } else {
            alert("Não há estoque suficiente!");
        }
    }

    consultar() {
        return `Código: ${this.codMaterial}, Descrição: ${this.descMaterial}, Quantidade disponível: ${this.qtdeEstoque}`;
    }
}

let material;

function menu() {
    while (true) {
        let opcao = prompt("Escolha: \n1- Cadastrar material\n2- Entrada de material\n3- Saída de material\n4- Consultar saldo em estoque\n5- Encerrar");

        if (opcao === '5') {
            alert("Programa Encerrado!");
            break;
        }

        if (opcao === '1') {
            material = new Material(prompt("Código:"), prompt("Descrição:"), +prompt("Quantidade:"));
            alert("Material cadastrado!");
        } else if (material) {
            if (opcao === '2') {
                material.entrarMaterial(+prompt("Quantidade de material a ser adicionada:"));
            } else if (opcao === '3') {
                material.sairMaterial(+prompt("Quantidade de material a ser retirada:"));
            } else if (opcao === '4') {
                alert(material.consultar());
            } else {
                alert("Opção incorreta!");
            }
        } else {
            alert("Nenhum material cadastrado!");
        }
    }
}

menu();
