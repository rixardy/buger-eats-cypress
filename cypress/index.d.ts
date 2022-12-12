/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Altere esse texto dizendo o que seu comando personalizado faz
       * @example
       * cy.nomeDoSeuComando()
       * 
       */
      nomeDoSeuComando(): Chainable<any>
  
    }
  }