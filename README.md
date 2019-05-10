# wanderlust

Live Link: https://satisfying-wanderlust.herokuapp.com/

Pitch: This is a yelp for study abroad programs using the MERN stack.

Google Slides: https://docs.google.com/presentation/d/1m3G-Ar9S4n45R_LdU50G9WJxbJpMkmwt9PS71Qu-3yM/edit#slide=id.g59eacd8858_6_97


## Introduction

Study abroad semesters can be incredible experiences. But with so many options, it can be overwhelming for students to find the trip that’s right for them. Introducing Wanderlust. Travel around the globe with the click of a mouse. Read real reviews from real students in the countries that you want to visit. Take a trip you trust with Wanderlust

We wanted to create an interactive website where people could share their experiences. For the design of our app, we planned to create an interactive, responsive map as our centerpiece. This map automatically updates whenever a review for a new country is added to our database. We hope this site could become a resource for study abroad offices at schools around the country

## User Guide
**Seeing a review:**
1. After navigating to our home page, go to the Map tab in the navigation bar.
2. On the map, countries that have active reviews in our database are indicated with a yellow/orange color. Click on any of these colored countries to see active reviews.
3. The app will display a list of summarized reviews. Click the button to see expanded details about the review.

**Posting a review:**
1. To leave a new review ("review" tab in navigation bar), the user must be logged in. Navigate to the "login" tab in the navigation bar or be redirected by clicking the "review" tab.
2. On the login page, use exisiting credentials or click the "Sign-up" link to register as a new user. After successfully registering as a new user, the app will redirect the user to the login page to use those new credientials to login. 
3. Use the "review" tab in the navigation bar to access the new review form.
4. Head any validation errors to successfully submit the form. Once submitted you will be able to see the review within the relevant country or your profile page.

**View User Profile:**
1. Succesfully login via "login" tab in navigation bar.
2. Click the "login/profile" tab in the navigation bar to view your user profile.
3. On this screen users can delete or make small edits to existing reviews.


## Core Technologies Used
**Front End:**
- React.js
- Redux
- Semantic UI
- AM Charts
- Axios
- Materialize CSS

**Back End:**
- Mongoose (ORM)
- Node.js
- Express.js
- Passport.js
- Bcrypt.js

**Database:**
MongoDB

**Deployment:**
Heroku

## Shout out 
- We found an amazing tutorial on how to install Redux and Passport.js https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

## Future Development

- Add the ability for users to comment on reviews. 
- Install a nofification system to email users when there are comments on their reviews.
- Add password reset functionality.
