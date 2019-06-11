# React Memory Game
Memory game using REACT.

[LIVE APP](https://vincent440.github.io/react-memory-game/)

This games is split into components within a stateful container, using props passed to stateless components.

12 images are loaded up each time a user loads the page. 

A characters array holds ID's and images that gets displayed every render randomly using the [Durstenfeld shuffle ES6 Sorting algorithm](https://gist.github.com/webbower/8d19b714ded3ec53d1d7ed32b79fdbac)

on a click the ID of that image gets added to a clicked array in the Containers state, which is then used on every click event to determine either to Increase Score or to reset the game if it has already been clicked. 

![Mobile responsive REACT application](./reactclicker.png)

### Check Out My Profile & Portfolio Here!

Please go to my [Github Profile](https://github.com/Vincent440) to see my repositories.

[Click here](https://vincent440.github.io/) to view the live version of this page on github.