# Development

### Link to Deployed Website
If you used the stencil code, this is `https://sonnysnoop.github.io/cs1300-development`

### Goal and Value of the Application

This is a fun website where you get to purchase some of your favorite cartoon animal (or animal-like creatures) as pets. The goal of the website is to list out the options in a visually pleasing way where the user is not overwhelmed and sorting/filtering is made intuitive. The value is fun.

### Usability Principles Considered

I wanted the UI to model one of my favorite web apps -- Notion. I often feel like shopping webpages are cluttered so I used a lot of whitespace to allow the user to focus on what is important to them.

I also implemented clear organization on the page. Left side clearly sectioned off and labeled as the menu while the items are all displayed on the right in a grid.

### Organization of Components

There were two main components I used. The main App component had the header page and kept the overall state of the webpage. This component would render a bunch of ItemCard child components that each represented a pet.

### How Data is Passed Down Through Components

I used props to pass data from the App Component to each ItemCard child component. The data passed down was the data of the pet the item card represented. I also passed functions down from App to ItemCard that allows for the ItemCard component to pass data to the App component. The two functions were for adding and removing from "Favorites".

### How the User Triggers State Changes

The user triggers state changes by either manipulating the radio/checkbox buttons on the leftside "Menu" section or clicking the "Add/Remove from favorites" button on each item card. There is also a "Reset" button in the Menu section that restores the webpage to its initial state.

