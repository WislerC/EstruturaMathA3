describe('Test Automation Exercise - Search Products', () => {
    it('Accesses the site, searches for t-shirts, and views the product', () => {
      // Acessa o site
      cy.visit('https://automationexercise.com/');
  
      // Clica na aba "Products"
      cy.contains('Products').click();
  
      // Acessa o campo de pesquisa de produtos e insere "t-shirts"
      cy.get('#search_product').type('t-shirts');
      cy.get('#submit_search').click();
  
      // Seleciona o único item que aparece e clica em "View Product"
      cy.get('.product-overlay').first().click(); // Seleciona o produto
      cy.contains('View Product').click();        // Clica no botão "View Product"
    });
  });