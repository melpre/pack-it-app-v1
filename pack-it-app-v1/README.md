# The Pack-It-App!

## 28 June 2023

This is a personal project in which I experiment further into front end development using React and Bootstrap. The purpose of this project is to build on my knowledge and skills in front end development, whilst creating a useful travel app that assists you with packing by providing an easy-to-use checklist. Currently, this is in the first phase of development, meaning I am aiming for a minimum viable product of a home page with a form and a list results page. Interactive features of the app will include storing input state to render dynamic elements based on input given. 

## 13 July 2023

Finally got a few items checked off on my to-do list for this project. I tinkered around a little with the Bootstrap library and learned a little more about how flex box design works, which I find very useful in terms of not worrying about how to position the various elements on the page. The main components are App.js, NewForm.js and List.js. App.js is the parent component to NewForm.js and List.js. I included react-router to currently display two pages: the starting page is an input form that remembers a user's search parameters for the travel packing list. The second page is the resulting packing list with 4 categories: Clothes, Toiletries, Carry On, and Misc. I also worked on the form functionality to keep track of state changes from user input. The hardest challenge came this week when I was struggling to come up with a solution for displaying data from button clicks of the different list categories. Frankly I'm a bit rusty with React, but a few blog posts on how state and props determine rendering of components helped enormously and I was able to figure out a solution. It was a simple matter of keeping track of the state change associated with the button clicks in my List component and including that state change inside a function that retrieves certain parts of my data to render on the page. The header for each item category now also renders dynamically based on which button was clicked and what category of data is displayed.

The second phase of this project will entail the display of tabs to represent the number of people to pack for (for example, if you need a master packing list for a family of four).

## 26 July 2023

I updated the app to include a simple navigation bar which will route to the home page, the checklist page as well as an additonal 'About' page which will describe what the application is and how to use it.



### `watch this space!`


