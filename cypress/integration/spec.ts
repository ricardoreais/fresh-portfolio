describe('Homepage', () => {
  it('contains information', () => {
    cy.visit('/')
    cy.contains('Ricardo Reais.')
    cy.contains('Software engineer.')
  })
})
