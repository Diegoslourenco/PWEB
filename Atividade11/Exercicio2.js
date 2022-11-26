
function Conta(nomeCorrentista, nomeBanco, numConta, saldo) {

    this.nomeCorrentista = nomeCorrentista;
    this.nomeBanco = nomeBanco;
    this.numConta = numConta;
    this.saldo = saldo;

    this.setNomeCorrentista = function (nome) {
        nomeCorrentista = nome;
    }

    this.setNomeBanco = function (banco) {
        nomeBanco = banco;
    }

    this.setNumConta = function(conta) {
        numConta = conta;
    }

    this.setSaldo = function(vSaldo) {
        saldo = vSaldo;
    }
    this.getnomeCorrentista = function() {
        return nomeCorrentista;
    }

    this.getNomeBanco= function(){
        return nomeBanco;
    }

    this.getNumConta = function() {
        return numConta;
    }

    this.getSaldo = function () {
        return saldo;
    }
}

function Corrente (salEspecial) {

    this.salEspecial = salEspecial;

    this.setSalEspecial = function(valSaldoEsp) {
        salEspecial = valSaldoEsp;
    }

    this.getSalEspecial = function () {
        return salEspecial;
    }
}

function Poupanca (juros, dataVencimento) {

    this.juros = juros;
    this.dataVencimento = dataVencimento;


    this.setjuros = function (valJuros) {
        juros = valJuros;
    }
    
    this.setdataVencimento = function (dataVenc) {
        dataVencimento = dataVenc;
    }

    this.getjuros = function() {
        return juros;
    }

    this.getdataVencimento = function () {
        return dataVencimento;
    }
}

Corrente.prototype = new Conta();

var contaCorrente = new Corrente();

contaCorrente.setNomeCorrentista('Diego Lourenço');
contaCorrente.setNomeBanco('BANCO FATEC');
contaCorrente.setNumConta('3045-5');
contaCorrente.setSaldo('2000,00');
contaCorrente.setSalEspecial('500,00');

Poupanca.prototype = new Conta();

var contaPoupanca = new Poupanca();

contaPoupanca.setNomeCorrentista('Marcela Antony');
contaPoupanca.setNomeBanco('Banco Itaú');
contaPoupanca.setNumConta('25632-2');
contaPoupanca.setSaldo('30000,00');
contaPoupanca.setjuros('2,0%');
contaPoupanca.setdataVencimento("25/11/2022");


console.log("CONTA CORRENTE - Nome: " + contaCorrente.getnomeCorrentista() + "\n" + 
            "Banco: " + contaCorrente.getNomeBanco() + "\n" +
            "Número da conta: " + contaCorrente.getNumConta() + "\n" +
            "Saldo: R$ " + contaCorrente.getSaldo() + "\n" +
            "Saldo especial: R$ " + contaCorrente.getSalEspecial());

console.log("CONTA POUPANÇA - Nome: " + contaPoupanca.getnomeCorrentista() + "\n" + 
            "Banco: " + contaPoupanca.getNomeBanco() + "\n" +
            "Número da conta: " + contaPoupanca.getNumConta() + "\n" +
            "Saldo: R$ " + contaPoupanca.getSaldo() + "\n" +
            "Juros: R$ " + contaPoupanca.getjuros() + "\n" +
            "Data de Vencimento: R$ " + contaPoupanca.getdataVencimento());

          