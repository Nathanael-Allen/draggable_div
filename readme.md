
### Draggable HTML Element

I spent the day reading over some documentation on JQuery and getBoundingClientRect() method in order to teach myself how to create a draggable UI element. I know there are plenty of libraries that will do this for you but it was a fun challenge and I learned a lot.

### How it Works

Clicking on an element with class 'draggable' will fire a callback. The position of the element is then set every time the mouse is moved and is calculated by taking the mouse position relative to the parent element. In order to position the mouse in the center of the element I am using the position of the mouse - the element width and height / 2. The if statements check the position of the element and if it ever escapes the bounds of the parent element it is reset to just inside the boundry. The positon stops reseting as soon as the mouse leaves the parent element or the mouse button is released. 

### To Do

I would love to refactor this code at some point to make it more modular! Turning a lot of this code into individual functions would make things a lot easier to implement in other code bases.