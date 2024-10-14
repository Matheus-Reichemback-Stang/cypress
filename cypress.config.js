const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // npm i --save-dev mochawesome - parte do reporter, reporterOptions
  reporter: 'mochawesome',
  reporterOptions: {
    // Diretório
    reportDir: 'cypress/relatorio',
    // Sobrescrever quando huver uma atualização
    overwrite: true,
    // Gerar relatórios HTML
    html: true,
    // Não gerar relatórios JSON
    json: false,
    // Arrumando o formato de dia/mês/ano_HORAS/MINUTOS/segundos
    timestamp: 'ddmmyyy_HHMMss'
  }
});
