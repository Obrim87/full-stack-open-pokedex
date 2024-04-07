describe('Pokedex', function () {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5001');
    cy.contains('ivysaur').click();
    cy.contains('overgrow');
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    );
  });
});

// upto Three options are used:
// actions failing in github, find errors and fix them and get cypress working on CI/CD
