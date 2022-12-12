import { describe, it } from 'mocha'
import SingupPage from '../pages/SingupPage.js'
import singup from '../pages/SingupPage.js' //importanto uma instancia da classe
import SingupFactory from './Factories/SingupFactory.js'

describe('Cadastro', () => {

    /*before(function() {
        cy.log('Tudo aqui é executado uma única vez ANTES de todos os casos de teste')
    })

    beforeEach(function () {
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
        cy.fixture('entregador').then((e) => {
            this.entregador = e
        })
    })
    
        after(function() {
            cy.log('Tudo aqui é executado uma única vez DEPOIS de todos os casos de teste')
        })
    
        afterEach(function() {
            cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
        })*/

    it('Usuário deve se tornar um entregador', function () { //criação do caso de teste

        var entregador = SingupFactory.entregador()

        singup.go()
        singup.fillForm(entregador)
        singup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incorreto', function () { //criação do caso de teste

        var entregador = SingupFactory.entregador()

        entregador.cpf = '000000000AA'

        singup.go()
        singup.fillForm(entregador)
        singup.submit()

        singup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('E-mail Incorreto', function () { //criação do caso de teste

        var entregador = SingupFactory.entregador()

        entregador.email = 'ricardo.gmail.com'

        singup.go()
        singup.fillForm(entregador)
        singup.submit()

        singup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Campos Obrigatórios', function() {

        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'numero', output: 'É necessário informar o número do endereço'},
            {field: 'metodo_entrega', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        beforeEach(function() {
            singup.go()
            singup.submit()
        })

        messages.forEach(function(msg) {
            it(`${msg.field} is required`, function() {
                singup.alertMessageShouldBe(msg.output)
            })
        })
    })

    /*it('Campos obrigatórios', function() {
        singup.go()
        singup.submit()
        singup.alertMessageShouldBe('É necessário informar o nome')
        singup.alertMessageShouldBe('É necessário informar o CPF')
        singup.alertMessageShouldBe('É necessário informar o email')
        singup.alertMessageShouldBe('É necessário informar o CEP')
        singup.alertMessageShouldBe('É necessário informar o número do endereço')
        singup.alertMessageShouldBe('Selecione o método de entrega')
        singup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })*/

})