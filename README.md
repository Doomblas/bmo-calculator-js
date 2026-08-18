# 🤖 BMO Calculator

An interactive calculator inspired by **BMO from Adventure Time**, built from scratch using **HTML, CSS and JavaScript**.

The project combines calculator functionality with a custom animated interface where BMO reacts to different operations and user interactions.

> A small project created to practice JavaScript, DOM manipulation, event handling and CSS animations.

---

## ✨ Features

### 🧮 Calculator

- Basic arithmetic operations:
  - Addition `+`
  - Subtraction `−`
  - Multiplication `×`
  - Division `÷`
- Decimal number support.
- Chained operations such as `5 × 5 − 3`.
- Continue calculating using the previous result.
- Division-by-zero and invalid-expression handling.
- Clear calculator with `C`.
- Delete individual characters with `←`.

### 🎮 Editable expressions

The calculator includes a custom cursor system that allows expressions to be edited before calculating them.

The BMO directional pad can be used to:

- `◀` Move the cursor left.
- `▶` Move the cursor right.
- `←` Delete the character before the cursor.
- Insert numbers or operators at the current cursor position.

This allows expressions to be corrected without clearing the entire calculation.

### 😊 BMO reactions

BMO's face dynamically reacts to calculator actions.

Some reactions include:

- 😛 Multiplication — BMO sticks out its tongue.
- 😉 Division — BMO winks.
- 😐 Subtraction — BMO changes expression.
- 😄 Addition / successful calculations — happy reaction.
- 🤔 Calculation — thinking expression before displaying the result.
- 😮 Large results — surprised expression.
- 😵 Invalid calculations — error expression with `X` eyes.
- 😗 Long expressions — BMO reacts when the operation becomes too long.
- 👀 Automatic blinking while idle.

The animations are created entirely with **CSS and JavaScript**, without animation libraries.

---

## 🛠️ Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

No frameworks or external JavaScript libraries are required.

---

## 📁 Project Structure

```text
CalculadoraBMO/
│
├── index.html
│
└── static/
    ├── css/
    │   └── style.css
    │
    ├── image/
    │   └── BMO.webp
    │
    └── js/
        └── main.js
```

### `index.html`

Contains the calculator structure, BMO screen, directional controls and calculator buttons.

### `style.css`

Handles the complete visual design and animations, including BMO's different facial expressions.

### `main.js`

Contains the calculator logic, expression editing, cursor navigation, calculations and BMO's reaction system.

---

## 🚀 Running the project

No installation or dependencies are required.

Clone the repository:

```bash
git clone <YOUR-REPOSITORY-URL>
```

Open the project folder and launch:

```text
index.html
```

You can also run it using an extension such as **Live Server** or **Live Preview** in Visual Studio Code.

---

## 🧠 What I practiced

This project was created as part of my JavaScript learning process.

While building it, I practiced:

- DOM manipulation.
- Event listeners.
- JavaScript functions.
- String manipulation.
- Application state management.
- Dynamic CSS classes.
- Expression parsing.
- Cursor position management.
- Error handling.
- CSS transitions.
- CSS keyframe animations.
- Separation between interface, styles and application logic.

One of the main goals was to go beyond a traditional calculator and make the interface react dynamically to user actions.

---

## 🔮 Possible future improvements

The current version is considered **v1.0**, but possible future improvements include:

- Keyboard support.
- Sound effects.
- More BMO expressions and animations.
- Calculation history.
- Responsive design improvements.
- Mobile interaction improvements.
- Additional mathematical operations.

---

## 🎯 Project Status

**Version 1.0 — Completed**

The core calculator logic, editable cursor system and BMO reaction animations are implemented and functional.

---

## 👨‍💻 Author

**Douglas Andrey Carreño Pardo**

Computer Science Engineering student.

---

### 💚 BMO Calculator

Built as a small JavaScript project focused on learning by creating something interactive, functional and fun.
