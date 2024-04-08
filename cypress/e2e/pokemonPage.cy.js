describe('Pokedex', function () {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5001');
    cy.contains('ivysaur');
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    );
  });

  it('pokemon page can be navigated to', () => {
    cy.visit('http://localhost:5001');
    cy.contains('charmander').click();
    cy.contains('blaze');
  });
});
