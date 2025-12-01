Feature: Add to Cart
  As a logged in user
  I want to add products to my cart
  So that I can purchase them

  @smoke
  Scenario: Add product to cart
    Given I am logged in as "standard_user"
    When I add the product "Sauce Labs Backpack" to the cart
    Then the cart icon badge should show "1"