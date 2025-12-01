Feature: Checkout Flow
  As a user with items in cart
  I want to complete checkout
  So that I can purchase my items

  @smoke
  Scenario: Complete checkout flow
    Given I have 1 item in the cart
    When I proceed to checkout and enter details
    Then I should see the order confirmation message