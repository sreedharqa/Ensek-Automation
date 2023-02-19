# ABOUT ENSEK

This is the Test Framework to verify the ENSEK page, and these tests are covering the E2E Funcitonal testing, also validating the User Interface.

Functionalities covering from the tests (Test Plan):

1. Access the URL - https://ensekautomationcandidatetest.azurewebsites.net/ and make sure that User is landed on the ENSEK Home Page
2. Make sure that ENSEK home page contains top menu links - Home, About, Contact, Register, Login
3. Verify the top menu links are working fine
4. Verify User Registration functionality
5. Veirfy User login functionality
6. Verify Find out more link is working fine
7. Veirfy Buy Energy link is working fine
8. Veirfy user is able to access Buy Energy page and processing Buy Energy
9. Verify Sell Energy link is working fine
10. Verify user can able to access the Sell Energy page

# SET UP

Clone the repository down, Then at the root directory run the following command in the terminal to install all the necssary packages

> npm i

This will install all the packages you need to get going.

# CYPRESS INSTALL

Run following command to install Cypress

> npm install cypress --save-dev


# RUN

Now run the following command in the internal to launch cypress and run the tests (This can be run by using any IDE)

> npm run cy:open

Note: If you are getting any errors like unable to read the npm packages, then please update your local environment variables path with nodejs
