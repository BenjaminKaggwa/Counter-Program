# Counter Program

A tiny, friendly counter web app with three buttons: decrease, reset and increase.

It demonstrates basic DOM manipulation and styling using plain HTML, CSS and JavaScript.

## Files

- `index.html` — markup for the numeric display and control buttons.
- `style.css` — styles for layout, centered display and attractive background.
- `index.js` — simple click handlers that update the displayed count.
- `README.md` — this file.

## Features

- Click `decrease` to decrement the count.
- Click `reset` to set the count back to `0`.
- Click `increase` to increment the count.
- Responsive, centered UI with pleasant styling and hover effects on buttons.


## Code overview

The JavaScript (`index.js`) uses simple element lookups and assigns `onclick` handlers:

- `decreaseBtn.onclick` decrements the `count` variable and updates the `#screen` label.
- `resetBtn.onclick` sets `count` to `0`.
- `increaseBtn.onclick` increments the `count`.

The CSS centers the UI and applies an attractive background. 

## License

Use and adapt freely.
