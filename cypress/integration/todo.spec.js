/// <reference types="cypress" />
import { mount } from '@cypress/react'
import Posts from '@/components/posts'

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example', () => {
  beforeEach(() => {
    mount(<Posts />)
  })

  it('displays a message', () => {
    cy.get("[data-testid=post-message]").contains("Hello")
  })
})
