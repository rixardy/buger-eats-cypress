describe('home page', ()=>{
    it('app deve estar online',()=>{ //criação ode caso de teste
        cy.viewport(1440,900) //define a resolução da janela do navegador
        cy.visit('https://buger-eats.vercel.app') //acesssar URL alvo do teste
        cy.get('#page-home > div > main > h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //busca pelo elemento que tem o titulo da página
    })

})