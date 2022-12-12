//padrão de projeto pageObject
class SingupPage {
    
    go() {
        cy.viewport(1440, 900) //define a resolução da janela do navegador
        cy.visit('https://buger-eats-qa.vercel.app') //acessar URL alvo do teste
        cy.get('#page-home > div > main > a').click()
        cy.get('#page-deliver > form > h1')
            .should('have.text', 'Cadastre-se para  fazer entregas')//verifico se estou na tela correta, buscando uma informação especifica
    }

    fillForm(entregador) {
        //localizo os campo do entregador e preencho os dados
        var images = 'cypress/fixtures/'

        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(2) > input[type=button]').click()
        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(4) > div:nth-child(1) > input[type=text]')
            .type(entregador.endereco.numero)
        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(4) > div:nth-child(2) > input[type=text]')
            .type(entregador.endereco.complemento)

        cy.get('#page-deliver > form > fieldset:nth-child(3) > div.field > input[type=text]').should('have.value', entregador.endereco.rua)
        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(5) > div:nth-child(1) > input[type=text]').should('have.value', entregador.endereco.bairro)
        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(5) > div:nth-child(2) > input[type=text]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains(',delivery-method li', entregador.metodo_entrega).click()

        cy.get('#page-deliver > form > div > p').selectFile(images+entregador.cnh, { action: 'drag-drop' })
    }

    submit() {
        cy.get('form button[type=submit]').click()
    }
    
    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')//caso teste vários campos com a mesmma classe
    }
}

export default new SingupPage; //exportando uma nova instancia da classe