/// <reference types="cypress" />

// npm run cypress open - Abre a janela
// npm run cypress run - Apenas mostra os resultados no console, produz vídeos e screenshots
// npm run cypress run --reporter mochawesone - chama o mochawesome
// npm i --save-dev mochawesome - Faz relatórios do Cypress em HTML 

describe('Testes para a Home', () => {
    beforeEach(() => {
        // Tem que visitar o site antes de fazer cada testes
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    // Os testes para o Cypress, é usado o it() ao invés de test() como no jest
    it('Deve renderzar 4 vagas', () => {
        // Com o get(seletor) é possível pegar todos os elementos da página que respondam ao seletor(que nem no CSS) 
        // should('textoDeComando', valor) - Deve
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('Deve filtrar por fullstack', () => {
        // type(texto, opções) - Serve para escrever em inputs e o {enter} é para dar enter ou você pode fazer o click no botão logo abaixo
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        // cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})