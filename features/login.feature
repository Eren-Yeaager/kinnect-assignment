Feature: Login Functionality
  As a user
  I want to login to SauceDemo
  So that I can access the products

  @smoke
  Scenario: Successful Login
    Given I open the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the Products page

  @regression
  Scenario: Invalid Login
    Given I open the SauceDemo login page
    When I login with username "locked_out_user"
    Then I should see an error message