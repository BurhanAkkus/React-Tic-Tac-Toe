# React Tic-Tac-Toe

A simple Tic-Tac-Toe game built with React, demonstrating component-based architecture, state management with hooks, and game logic implementation.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Game Logic](#game-logic)
- [Debugging](#debugging)
- [Contributing](#contributing)
- [License](#license)

## Demo



## Features

- Interactive 3×3 Tic-Tac-Toe board
- Clickable squares with `X` and `O` turns
- Win detection for rows, columns, and diagonals
- Game-over state with winner announcement
- Built using React functional components and hooks (`useState`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BurhanAkkus/React-Tic-Tac-Toe.git
   cd React-Tic-Tac-Toe
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000/`.

## Usage

- Click on an empty square to place your mark (`X` starts first).
- Players alternate between `X` and `O`.
- The game detects a win and displays a congratulatory message.
- No further moves can be made once the game is over.

## Project Structure

```
React-Tic-Tac-Toe/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js        # Main App component
│   ├── Board.js      # Board and game logic
│   ├── Square.js     # Square component
│   ├── index.js      # Render entry point
│   ├── styles.css    # Basic styles
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Game Logic

- The `Board` component maintains an array of 9 squares in state.
- On each click, it:
  1. Places `X` or `O` depending on the turn.
  2. Checks for a winner by evaluating all rows, columns, and diagonals.
  3. Updates the game-over state and winner flag if a three-in-a-row is found.

## Debugging


## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

