/// <reference types="cypress" />

describe('Testes para a página de Candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        // first() - devido a classe conter mais de um elemento, foi colocado para selecionar o primeiro elemento dela
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        // Com cy.screenshot('nomeDoArquivo') é feito um print da tela 
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Teste da Silva')
        cy.get('input[name="email"]').type('teste@teste.com')
        cy.get('input[name="telefone"]').type('11 12345678')
        cy.get('input[name="endereco"]').type('Rua Jest com Javascript, Bairro Cypress, Virtual Studio Code - VSCode')
        // Testando um select que contém options
        // select(valor) - seleciona com base no value de opção
        cy.get('select[name="escolaridade"]').select('outros')
        // Testando inputs RADIO, para isso é preciso usar o id deles
        // check() - faz um check no checkbox do input radio
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        // cy.on - Ouve os eventos da página
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        // Tirando print
        cy.screenshot('tela-inscricao-preenchido')
    })
})