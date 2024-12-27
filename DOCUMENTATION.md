# Frost-UI Documentation

A lightweight, customizable menu library for creating interactive user interfaces in userscripts.

## Table of Contents
- [Installation](#installation)
- [Menu Creation](#menu-creation)
- [Components](#components)
- [Toasts](#toasts)

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
    'uniqueId',          // Unique identifier for the menu
    'Menu Title',        // Display title
    { x: 100, y: 100 }, // Initial position (optional)
    'ShiftRight'        // Toggle key (optional, defaults to 'ShiftRight')
);
```

### Categories
Categories help organize menu items:

```javascript
menu.addCategory('Combat')     // Creates a collapsible section
    .addCategory('Movement')   // Chain multiple categories
    .addCategory('Render');    // Each category can contain multiple items
```

## Components

### Toggle Switch
Creates a toggle with optional keybind:

```javascript
menu.addToggle(
    'Combat',           // Category name
    'KillAura',         // Toggle name
    (enabled, key) => { // Callback function
        console.log(`KillAura ${enabled ? 'enabled' : 'disabled'}`);
        console.log(`Current keybind: ${key}`);
    },
    'KeyK'             // Optional keybind (uses KeyboardEvent.code format)
);
```

### Slider
Creates a numeric slider:

```javascript
menu.addSlider(
    'Combat',           // Category name
    'Range',            // Slider name
    3,                  // Minimum value
    6,                  // Maximum value
    4,                  // Default value
    (value) => {        // Callback function
        console.log(`Range set to ${value}`);
    }
);
```

### Color Picker
Creates a color input with preview:

```javascript
menu.addColorInput(
    'Render',           // Category name
    'ESP Color',        // Input name
    '#7289DA',         // Default color (hex format)
    (color) => {        // Callback function
        console.log(`Color changed to ${color}`);
    }
);
```

### Multi-Select
Creates a dropdown with multiple selectable options:

```javascript
menu.addMultiSelect(
    'Combat',           // Category name
    'Target Types',     // Select name
    [                   // Available options
        'Players',
        'Animals',
        'Monsters'
    ],
    ['Players'],        // Default selected values
    (selected) => {     // Callback function
        console.log('Selected targets:', selected);
    }
);
```

### Radio Group
Creates mutually exclusive options:

```javascript
menu.addRadioGroup(
    'Combat',           // Category name
    'Target Mode',      // Group name
    [                   // Available options
        'Single',
        'Multiple',
        'Switch'
    ],
    'Single',          // Default selected value
    (selected) => {    // Callback function
        console.log(`Mode changed to ${selected}`);
    }
);
```

### Page Selector
Creates a paginated interface:

```javascript
menu.addPageSelector(
    'Settings',         // Category name
    'Mode',             // Selector name
    [                   // Page names
        'Normal',
        'Advanced',
        'Custom'
    ],
    0,                  // Default page index
    (page) => {         // Callback function
        console.log(`Switched to ${page} mode`);
    }
);
```

### Buttons
Creates clickable buttons with different styles:

```javascript
menu.addButton(
    'Settings',         // Category name
    'Save Config',      // Button text
    () => {            // Click callback
        saveConfig();
    },
    'primary'          // Button variant ('default', 'primary', 'destructive')
);
```

I'll add a Toasts section to the documentation. Here's the addition that should go under the Components section:

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
- success: Green checkmark for successful operations
- error: Red X for errors
- warning: Yellow exclamation for warnings
- info: Blue info icon for information (default)

Options:
- message: Text to display
- type: 'success' | 'error' | 'info' | 'warning' | 'undefined'
- duration: Time in milliseconds (default: 3000, 0 for persistent)
- variant: 'default' | 'action'
- action: Optional button configuration
  - text: Button label
  - onClick: Click handler
  - type: 'primary' | 'destructive'

Notes:
- Toasts appear in top-right corner
- Hover pauses auto-dismiss
- Click X to dismiss manually
- Action variant adds interactive button
- Duration 0 creates persistent toast

For more implementation examples, see the example userscript in the repository.
