# 03 Javascript: Password Generator

## Summary 

The purpose of the assignment was to create an application that generates a random password based on a set of user-selected criteria. The application developed is accessed via the user's browser and includes HTML and CSS code that is dynamically udpated through JavaScript elements as well as a polished UI that is repsonsive to multiple screen sizes.

```
User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Site Picture
![Site](/password-generator-example.png)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles HTML elements on page
- Bootstrap - CSS framework directed at responsive, mobile first front-end web development
- JavaScript - provides dynamic interactivity on HTML documents
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Code Snippet

Below is an example of a block of code in the HTML file where I leveraged the Bootstrap and the Grid system to create, style, and place a responsive card with an image and text inside on the web page.

```html
<div class="container-responsive border bg-light py-5 m-0">
    <div class="row">
      <div class="card bg-white py-4 col-lg-9 col-md-10 col-sm-10 ml-5">
        <div class="h1 text-info">About Me
          <hr>
        </div>
        <div class="card-body">
          <div class="row">
            <img class="col-md-6 col-xs-12 py-2 card-img-top img-responsive"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHK-_3mwh2xEQ/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=JlwObXlYCOBQY-927XEvpJ9wJ2F1QOlarYh8RRSq78Y"
              alt="Card image cap">
            <p class="col-md-6 col-xs-12 py-2 card-text text-dark">
              My name is Will Gibson and I'm originally from a town called Danville. After graduating from USC I spent
              2.5 years as a financial analyst for Apple until recently when I decided to learn to code!
            </p>
            <div class="row py-4">
              <p class="col-md-12 col-xs-12 py-2 card-text text-dark">
                After the class is over I hope to use my skills to get a role in Product Management so I can be closer
                to the development of technology!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-"> </div>
    </div>
</div>
```

## Author Links

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson/1-code-refactor)

Special thanks to Mahisha Gunasekaran, Kerwin Hy, and Jeremy Cantwell for their input and assistance with the assignment!
