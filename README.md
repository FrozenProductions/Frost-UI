<div align="center">

# Frost-UI

A modern, lightweight UI library crafted for userscripts

[![GitHub package.json version](https://img.shields.io/github/package-json/v/FrozenProductions/Frost-UI?style=flat-square&labelColor=%231c1c25&color=7289da)](https://github.com/FrozenProductions/Frost-UI/releases)
[![GitHub License](https://img.shields.io/github/license/FrozenProductions/Frost-UI?style=flat-square&logoColor=%237289da&labelColor=%231c1c25&color=7289da)](LICENSE)
[![GitHub code size in bytes](https://img.shields.io/github/size/FrozenProductions/Frost-UI/scripts%2FLibrary.js?style=flat-square&labelColor=%231c1c25&color=%237289da)](https://github.com/FrozenProductions/Frost-UI)
[![Documentation](https://img.shields.io/badge/docs-view%20here-7289da?style=flat-square&labelColor=%231c1c25)](DOCUMENTATION.md)

</div>

## 🌟 Overview

Frost-UI is an elegant and lightweight UI library designed specifically for userscripts. It provides a comprehensive suite of customizable components that help you create beautiful, interactive interfaces with minimal effort.

<div align="center">
<img src="assets/preview.png" alt="Menu Preview" width="600"/>
</div>

## ✨ Features

### Interactive Components

-   **Core Elements**

    -   Draggable Menus
    -   Toast Notifications
    -   Toggle Switches
    -   Sliders
    -   Buttons
    -   Radio Groups
    -   Themes

-   **Advanced Inputs**
    -   Keybind Controls
    -   Dropdown Selectors
    -   Multi-select Menus
    -   Color Pickers
    -   Page Navigation

### Smart Management

-   Organized Category System
-   Automatic Configuration Saving
-   Keyboard Shortcut Support
-   Intelligent DOM Cleanup

## 🚀 Getting Started

### Installation

```js
// @require https://raw.githubusercontent.com/FrozenProductions/Frost-UI/main/scripts/Library.js
```

### Quick Start

```javascript
const menu = window.frostManager.addMenu(
    "uniqueId", // Unique identifier for the menu
    "Menu Title", // Display title
    { x: 100, y: 100 }, // Initial position (optional)
    "ShiftRight" // Toggle key (optional, defaults to 'ShiftRight')
);
```

## 💡 Key Features

-   **Intuitive Controls**: Toggle menus with ShiftRight (customizable)
-   **Smart Keybinds**: Automatic keybind conflict resolution
-   **Event System**: Comprehensive callback support
-   **Clean Design**: Automatic resource management

## 📚 Resources

-   [Full Documentation](DOCUMENTATION.md)
-   [Example Script](https://raw.githubusercontent.com/FrozenProductions/Frost-UI/main/scripts/example.user.js)

<div align="center">

## 💖 Support

If you find Frost-UI helpful, consider giving it a ⭐️

<br/>

Made with ❄️ by [FrozenProductions](https://github.com/FrozenProductions)

</div>
