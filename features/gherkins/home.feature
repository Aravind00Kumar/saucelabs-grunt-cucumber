Feature: What todo application
 In order to add todo list
 As a user
 I want a home page with todo list
 So that I can add remove todo items

 Scenario Outline: Open application and navigate to all pages 
  Given What todo loaded
   When I navigate to <page>
   Then I can see <title> in <page> page 
  Examples:
|   page   |   title  |
|  "home"  | "Office" |
|"settings"|"Settings"|
|  "help"  |  "Help"  |
|  "about" |  "About" |
