# Frost-UI Documentation

A lightweight, customizable menu library for creating interactive user interfaces in userscripts.

## Table of Contents

-   [Installation](#installation)
-   [Menu Creation](#menu-creation)
-   [Components](#components)
-   [Themes](#themes)
-   [Toasts](#toasts)

## Installation

Add to your userscript header:

```javascript
// @require https://raw.githubusercontent.com/FrozenProductions/Frost-UI/main/scripts/Library.js
```

## Menu-Creation

### Creating a Menu

The `addMenu` method creates a new menu instance:

```javascript
const menu = window.frostManager.addMenu(
    "uniqueId", // Unique identifier for the menu
    "Menu Title", // Display title
    { x: 100, y: 100 }, // Initial position (optional)
    "ShiftRight" // Toggle key (optional, defaults to 'ShiftRight')
);
```

### Categories

Categories help organize menu items:

```javascript
menu.addCategory("Combat") // Creates a collapsible section
    .addCategory("Movement") // Chain multiple categories
    .addCategory("Render"); // Each category can contain multiple items
```

## Components

### Toggle Switch

Creates a toggle with optional keybind:

```javascript
menu.addToggle(
    "Combat", // Category name
    "KillAura", // Toggle name
    (enabled, key) => {
        // Callback function
        console.log(`KillAura ${enabled ? "enabled" : "disabled"}`);
        console.log(`Current keybind: ${key}`);
    },
    "KeyK" // Optional keybind (uses KeyboardEvent.code format)
);
```

### Slider

Creates a numeric slider:

```javascript
menu.addSlider(
    "Combat", // Category name
    "Range", // Slider name
    3, // Minimum value
    6, // Maximum value
    4, // Default value
    (value) => {
        // Callback function
        console.log(`Range set to ${value}`);
    }
);
```

### Color Picker

Creates a color input with preview:

```javascript
menu.addColorInput(
    "Render", // Category name
    "ESP Color", // Input name
    "#7289DA", // Default color (hex format)
    (color) => {
        // Callback function
        console.log(`Color changed to ${color}`);
    }
);
```

### Multi-Select

Creates a dropdown with multiple selectable options:

```javascript
menu.addMultiSelect(
    "Combat", // Category name
    "Target Types", // Select name
    [
        // Available options
        "Players",
        "Animals",
        "Monsters",
    ],
    ["Players"], // Default selected values
    (selected) => {
        // Callback function
        console.log("Selected targets:", selected);
    }
);
```

### Radio Group

Creates mutually exclusive options:

```javascript
menu.addRadioGroup(
    "Combat", // Category name
    "Target Mode", // Group name
    [
        // Available options
        "Single",
        "Multiple",
        "Switch",
    ],
    "Single", // Default selected value
    (selected) => {
        // Callback function
        console.log(`Mode changed to ${selected}`);
    }
);
```

### Page Selector

Creates a paginated interface:

```javascript
menu.addPageSelector(
    "Settings", // Category name
    "Mode", // Selector name
    [
        // Page names
        "Normal",
        "Advanced",
        "Custom",
    ],
    0, // Default page index
    (page) => {
        // Callback function
        console.log(`Switched to ${page} mode`);
    }
);
```

### Buttons

Creates clickable buttons with different styles:

```javascript
menu.addButton(
    "Settings", // Category name
    "Save Config", // Button text
    () => {
        // Click callback
        saveConfig();
    },
    "primary" // Button variant ('default', 'primary', 'destructive')
);
```

## Themes

Frost-UI comes with a built-in theme system and several preset themes:

-   Dark (default)
-   Midnight
-   Nord

```javascript
const menuElement = document.querySelector(".frost-menu");

menuElement.setTheme("Dark");
menuElement.setTheme("Midnight");
menuElement.setTheme("Nord");
menuElement.setTheme("Custom");
```

### Custom Themes

You can create custom themes by defining CSS variables. Here's how to create and use a custom theme:

```css
.frost-theme-custom {
    --frost-bg-primary: rgba(20, 25, 35, 0.95); /* Main background */
    --frost-bg-secondary: rgba(25, 30, 40, 0.6); /* Secondary elements */
    --frost-bg-tertiary: rgba(30, 35, 45, 0.4); /* Interactive elements */
    --frost-text-primary: rgba(255, 255, 255, 0.9); /* Main text */
    --frost-text-secondary: rgba(255, 255, 255, 0.7); /* Secondary text */
    --frost-accent-color: #ff7675; /* Primary accent color */
    --frost-accent-hover: #e66767; /* Accent color for hover states */
    --frost-border-color: rgba(255, 255, 255, 0.1); /* Borders */
    --frost-shadow-color: rgba(0, 0, 0, 0.2); /* Shadows */
    --frost-ripple-color: rgba(255, 255, 255, 0.7); /* Click effects */
}
```

Apply your custom theme:

```javascript
const menuElement = document.querySelector(".frost-menu");

menuElement.setTheme("Custom");
```

Theme variables and their usage:

-   `--frost-bg-primary`: Main background color for containers
-   `--frost-bg-secondary`: Background for interactive elements
-   `--frost-bg-tertiary`: Background for hover states
-   `--frost-text-primary`: Main text color
-   `--frost-text-secondary`: Secondary text (labels, descriptions)
-   `--frost-accent-color`: Primary accent color for buttons, sliders, etc.
-   `--frost-accent-hover`: Accent color for hover states
-   `--frost-border-color`: Color for borders and separators
-   `--frost-shadow-color`: Color for box shadows
-   `--frost-ripple-color`: Color for click/ripple effects

Example themes:

```css
.frost-theme-emerald {
    --frost-bg-primary: rgba(20, 30, 25, 0.95);
    --frost-bg-secondary: rgba(25, 35, 30, 0.6);
    --frost-bg-tertiary: rgba(30, 40, 35, 0.4);
    --frost-text-primary: rgba(255, 255, 255, 0.9);
    --frost-text-secondary: rgba(255, 255, 255, 0.7);
    --frost-accent-color: #2ecc71;
    --frost-accent-hover: #27ae60;
    --frost-border-color: rgba(255, 255, 255, 0.1);
    --frost-shadow-color: rgba(0, 0, 0, 0.2);
    --frost-ripple-color: rgba(255, 255, 255, 0.7);
}

.frost-theme-ocean {
    --frost-bg-primary: rgba(20, 25, 35, 0.95);
    --frost-bg-secondary: rgba(25, 30, 45, 0.6);
    --frost-bg-tertiary: rgba(30, 35, 55, 0.4);
    --frost-text-primary: rgba(255, 255, 255, 0.9);
    --frost-text-secondary: rgba(255, 255, 255, 0.7);
    --frost-accent-color: #3498db;
    --frost-accent-hover: #2980b9;
    --frost-border-color: rgba(255, 255, 255, 0.1);
    --frost-shadow-color: rgba(0, 0, 0, 0.2);
    --frost-ripple-color: rgba(255, 255, 255, 0.7);
}
```

These variables affect various UI components:

-   Buttons use accent colors for primary actions
-   Sliders use accent colors for the thumb and filled track
-   Dropdowns and menus use background colors for layering
-   Text elements use text colors for proper contrast
-   All interactive elements use accent colors for hover states

## Toasts

Creates temporary notifications with different styles and actions:

Basic Usage:

```javascript
// Simple notification
window.frostManager.showToast("Operation completed");

// With type and duration (5 seconds)
window.frostManager.showToast({
    message: "Settings saved",
    type: "success",
    duration: 5000
});`
```

Action Toasts:

```javascript
window.frostManager.showToast({
    message: "Changes will be lost",
    type: "warning",
    variant: "action",
    action: {
        text: "Undo",
        onClick: () => restoreChanges(),
        type: "primary"
    }
});`
```

Toast Types:

-   success: Green checkmark for successful operations
-   error: Red X for errors
-   warning: Yellow exclamation for warnings
-   info: Blue info icon for information (default)

Options:

-   message: Text to display
-   type: 'success' | 'error' | 'info' | 'warning' | 'undefined'
-   duration: Time in milliseconds (default: 3000, 0 for persistent)
-   variant: 'default' | 'action'
-   action: Optional button configuration
    -   text: Button label
    -   onClick: Click handler
    -   type: 'primary' | 'destructive'

Notes:

-   Toasts appear in top-right corner
-   Hover pauses auto-dismiss
-   Click X to dismiss manually
-   Action variant adds interactive button
-   Duration 0 creates persistent toast

For more implementation examples, see the example userscript in the repository.
