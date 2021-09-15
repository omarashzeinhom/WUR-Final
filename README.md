# WuRatherGame

Would you Rather Game is a built from scratch
Project utilizing react,& redux js .

Game was built using 

    npx create-react-app wurathergame

# Requirements 
This is Just a Brief of the requirements please
Check https://review.udacity.com/#!/rubrics/1567/view
For the Full Project Rubric

## Application Setup
### StartBy 
          npm install
          npm start
1. Application is Easy to install
   Using npm install and npm start to install and launch

2. Included README.MD

## Log-In Flow
### Application LogIN-LogOut 


   1. There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)

   2. The application works correctly regardless of which user is selected.

   3. The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.

   4. Once the user logs in, the home page is shown.

   5. Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

## Application Functionality 

   1. The answered and unanswered polls are both available at the root.
   
   2. The user can alternate between viewing answered and unanswered polls.
    
   3. The unanswered questions are shown by default.
    
   4. The name of the logged in user is visible on the page.
   
   5. The user can navigate to the leaderboard.
   
   6.  The user can navigate to the form that allows the user to create a new poll.




## Structure and paths 

1. App.js ----> exact path = "/" 
2. WURLogin.js 
3. WURNavBar.js
4. WURMainPage.js
5. WURUserCard.js ---> /questions/:question_id
6. WURQsPreview.js
7. WURQs.js  ---> questions
8. WURVoteResults.js
9. WURNewVote.js
10. WURVote404.js ---> questions/bad_id
11. WURLeaderBoard.js

## Actions and Makers for action 
1. wuRatherAuthUser.js
2. wuRatherQuestions.js
3. wuRatherUsers.js
4. wuRatherSharedData.js

### Data Elements
1. Users Data
2. Questions Data
3. AuthUser Data
4. TextData for (NewVotes)
5. OptionData for (Answered Votes)

#### Store Props Consists of These DataTables

1.      ---------------->    ,{users,
2.      Store = --------->      questions,
3.      ---------------->     authedUser}


## Changes Done in ./public

1. Changed index.html favico.ico to wurather-main-icon.ico which is a custom logo created in svg and converted to .ico with . Chosen 32x32 width and height to be suitable for all browsers (Microsoft, 2016)

2. Changed Page title from index.html


## Changes Done in ./src 

1. Added state and views for the components mentioned above in the structure.
   
2. Added action, middle ware, utilties , and reducers 
   
3. Changed UI using semantic-ui and semantic min css elements 

4.  Added CSS Elements using plain JS Aswell.

## Changes Done ./css files

1. Changed font-size to vw , and alligning center to be more responsive
   
2. Changed BackGroundColor and text Colors to LinearGradients

3. Button Radius was set to 90% 


## Requirements 

Node >= 10.16 and npm >= 5.6 


## UI 
        npm install semantic-ui-react semantic-ui-css



# References



1. (A, Mittal , 2021 ) Prop types in React and TypeScript - From : https://amanhimself.dev/blog/prop-types-in-react-and-typescript/


2. (StackOverFlow , 2011) - Does a favicon have to be 32×32 or 16×16? - From : https://stackoverflow.com/questions/4014823/does-a-favicon-have-to-be-32%C3%9732-or-16%C3%9716
   

3. (Microsoft, 2016) - Customizing the Site Icon - From : https://docs.microsoft.com/en-gb/previous-versions/windows/internet-explorer/ie-developer/samples/gg491740(v=vs.85)

4. (Sphere360, 2021)- Make Your HTML-Website Suitable for Mobile Devices - © 2021 Autodesk, Inc. From : https://www.instructables.com/Make-your-HTML-Website-suitable-for-Mobile-Devices/
   
5. (D.Abramov and Redux Authors , 2015) - Copyright (c) 2015-present Dan Abramov and the Redux documentation authors.- Tutorial: Using the connect API - From: https://react-redux.js.org/tutorials/connect
   
6. (D.Abramov and Redux Authors , 2015) - Copyright (c) 2015-present Dan Abramov and the Redux documentation authors.- Redux Fundamentals, Part 5: UI and React - From: https://redux.js.org/tutorials/fundamentals/part-5-ui-react
   
7. (J.Priest , 2018) - React ND Project 2 - Would You Rather - From : https://james-priest.github.io/reactnd-project-would-you-rather/
   
8. (Vercel , 2021)  Semantic UI React -
The official Semantic-UI-React integration - Copyright © 2021 Vercel Inc. All rights reserved. - From : https://react.semantic-ui.com/

9. (D.Abramov and Redux Authors , 2015) - combineReducers(reducers)- Copyright (c) 2015-present Dan Abramov and the Redux documentation authors. - From: https://redux.js.org/api/combinereducers/
    
10. (StakOverFlow , 2021) From : https://stackoverflow.com/questions/39198644/simply-replacing-icons-for-progressive-web-app-leads-to-error-in-manifest
    
11. (D.Abramov and Redux Authors , 2015) - applyMiddleware(...middleware) - Copyright (c) 2015-present Dan Abramov and the Redux documentation authors -  https://redux.js.org/api/applymiddleware
    
12. (D, Ceddia , 2020) -What the heck is a 'thunk'? - https://daveceddia.com/what-is-a-thunk/'
    
13. (Facebook Inc , 2021) - Callback Refs  - Copyright © 2021 FacebookInc. - From : https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
     
14. (Facebook Inc , 2021) -Lifting
State Up - Copyright © 2021 FacebookInc. - From : https://reactjs.org/docs/lifting-state-up.html

15. (Facebook Inc , 2021) - Refs and the DOM - Copyright © 2021 FacebookInc. - From : https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    
16. (Facebook Inc , 2021) Create a New React App - 
   Copyright © 2021 FacebookInc. - From 
   https://reactjs.org/docs/create-a-new-react-app.html

    
17. (A.Maurya, L.Shifter ,L.Thomason, 2019) - 
Semantic-UI-React/docs/src/layouts/LoginLayout.js / - From :https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/LoginLayout.js
    
18. (CanvasJS, 2016) https://canvasjs.com/docs/charts/chart-options/data/color/
    
19. (Hope, 2021) - HTML color codes - © 2021 Computer Hope - From : https://www.computerhope.com/cgi-bin/htmlcolor.pl?c=CD7F32
    
20. (MDN,2021) Array.prototype.concat() - © 2005-2021 Mozilla and individual contributors. Content is available under these licenses. - From : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    
21. (P.Stanley & F.PenLin,2021) -a vataaars generator- From : https://getavataaars.com/
    
22. (NicBright, 2011)- What is the difference between null and undefined in JavaScript? - https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
    
23. (W3schools,2021) - How TO - Clickable Dropdown - https://www.w3schools.com/howto/howto_js_dropdown.asp
    
24. (Vercel,2021) - Get Started -  https://react.semantic-ui.com/usage/
    
25. (Duporge , 2019) https://stackoverflow.com/questions/47190223/prop-is-marked-as-required-in-component-but-its-value-is-undefined
    
26. https://codesandbox.io/s/k52jl1y2jr

27. https://github.com/axios/axios

28. https://www.jquery-az.com/html-img-src-image-source-attribute-with-path-possibilities-5-examples/

29. https://codesandbox.io/s/github/edwdeapri/udacity-would-you-rather?file=/src/components/Login.js

30. https://codesandbox.io/s/9yl2lznry?file=/src/components/AddQuestion.js:0-1924

31. https://cssgradient.io/blog/css-gradient-text/

32. https://react.semantic-ui.com/collections/menu/#content-sub-menu

33. https://www.w3schools.com/howto/howto_css_image_center.asp

    
