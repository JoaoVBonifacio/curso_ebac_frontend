describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      
      cy.get('input[placeholder="Nome"]').type('Bonifácio');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('input[placeholder="E-mail"]').type('Bonicraft@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Bonifácio').should('exist');
      cy.contains('123456789').should('exist');
      cy.contains('Bonicraft@example.com').should('exist');
    });
  });
  describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      
      cy.get('input[placeholder="Nome"]').type('Regadas');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('input[placeholder="E-mail"]').type('REG@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Regadas').should('exist');
      cy.contains('123456789').should('exist');
      cy.contains('REG@example.com').should('exist');
    });
    describe('Agenda de Contatos - Inclusão', () => {
        it('Deve adicionar um novo contato', () => {
          cy.visit('https://agenda-contatos-react.vercel.app/');
          
          cy.get('input[placeholder="Nome"]').type('Abner');
          cy.get('input[placeholder="Telefone"]').type('123456789');
          cy.get('input[placeholder="E-mail"]').type('AAbner@example.com');
          
          cy.contains('button', 'Adicionar').click();
          
          cy.contains('Abner').should('exist');
          cy.contains('123456789').should('exist');
          cy.contains('AAbner@example.com').should('exist');
        });
      });
  });
  describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      
      cy.get('input[placeholder="Nome"]').type('Vitória');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('input[placeholder="E-mail"]').type('Cvitoria@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Vitória').should('exist');
      cy.contains('123456789').should('exist');
      cy.contains('Cvitoria@example.com').should('exist');
    });
  });
  describe('Agenda de Contatos - Alteração', () => {
    it('Deve editar o terceiro contato na lista', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.wait(1000);

        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('input[placeholder="Nome"]').clear().type('Luffy');
        cy.get('input[placeholder="E-mail"]').clear().type('Cvitoria@example.com');
        cy.get('input[placeholder="Telefone"]').clear().type('1234567890');
        
        cy.contains('button', 'Salvar').click();
        
        cy.contains('Luffy').should('exist');
        cy.contains('Cvitoria@example.com').should('exist');
        cy.contains('1234567890').should('exist');
    });
});


  
  describe('Agenda de Contatos - Remoção', () => {
    it('Deve remover o quinto contato na lista', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.wait(1000);

 
        cy.on('window:confirm', () => true);

     
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();

 
        cy.wait(1000);
        cy.contains('Nome do Contato').should('not.exist');
    });
});