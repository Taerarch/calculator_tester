# Calculator Tester

Basically with this project I just wanted to build something simple and then implement as many relevant tests as I can think of.

The core technologies are React, Bootstrap and using react-testing-library along with jest to implement testing.


The set up has a React Class Component with multiple states simulating the display and stored information in a regular calculator. Most of the tests run through rendering the Component and then simulating button presses, checking the display for the expected value.

The main struggle I've had with this project was which technology to use for testing, Jest was easy enough but after initially trying enzyme I found out that it's latest version was no longer compatible with the latest version of React so I swapped to the inbuilt react testing library which worked smoothly.


Testing can be run through the terminal using 'npm run test'



Todos:
- More complex calculator functions eg. square root.
- Finalize design.
- Begin testing the formatting of the page, esp. for different screen sizes.
- Get the page hosted (But as the main objective was for testing which can only be done through the terminal this is a low priority.)
