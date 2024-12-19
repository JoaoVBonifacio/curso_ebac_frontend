/// <reference types="cypress" />

describe('Teste para pagina de canditatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Levar o Usuário até o fomulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('João Bonifácio')
        cy.get('input[name="email"]').type('jboni@teste.com')
        cy.get('input[name="telefone"]').type('11 1345678910')
        cy.get('input[name="endereco"]').type('Rua Cypress, são paulo-SP')
        cy.get('select[name=escolaridade').select('outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})