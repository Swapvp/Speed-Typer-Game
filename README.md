# Speed Type Game

## Description

Speed Type is a simple typing game where users test their typing speed and accuracy by quickly typing displayed words. The game features a countdown timer, a scoring system, and a restart option to reset the score and timer.

## Features

- **Dynamic Word Generation**: Random words are displayed for the user to type.
- **Countdown Timer**: A 10-second countdown for each word.
- **Scoring System**: Tracks and displays the user's score.
- **Restart Game**: Resets the score and timer, and starts a new game session.
- **Local Storage**: Preserves the score during the game session.

## Technologies Used

- **HTML**: Structure of the game interface.
- **CSS**: Styling provided by TailwindCSS.
- **JavaScript**: Game logic and interactivity.

## File Structure

## How to Play

1. Open `index.html` in a browser.
2. A word will be displayed on the screen.
3. Type the word exactly as it appears in the input field.
4. If the word matches:
   - The score increases by 1.
   - A new word appears, and the timer resets to 10 seconds.
5. If the timer reaches 0:
   - The game ends.
   - A "Game Over" message is displayed along with the final score.
   - A "Restart" button appears.
6. Click "Restart" to reset the score and start a new game.

## Installation and Setup

1. Clone the repository or download the project files.
2. Ensure you have an internet connection for TailwindCSS via CDN.
3. Open `index.html` in a browser to start playing.

## Code Overview

### `index.html`

Defines the structure and layout of the game. Contains:

- Timer and score display.
- Word display and input field.
- Restart button dynamically generated via JavaScript.

### `script.js`

Implements game functionality, including:

- Countdown timer logic.
- Score tracking and local storage.
- Word generation using the `words` array from `data.js`.
- Restart functionality.

### `data.js`

Contains an array of words used in the game. Words range from simple to complex, ensuring a varied typing experience.

## Future Enhancements

- Add difficulty levels (e.g., increase timer speed).
- Include a leaderboard to save high scores.
- Enhance the UI for better user
