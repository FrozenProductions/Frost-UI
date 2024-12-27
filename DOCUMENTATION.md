# Frost-UI Documentation

A lightweight, customizable menu library for creating interactive user interfaces in userscripts.

## Table of Contents
- [Installation](#installation)
- [Menu Creation](#menu-creation)
- [Components](#components)
- [Notes](#notes)

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

## Notes
- All menus are draggable by default
- Keybinds use the KeyboardEvent.code format
- Components support real-time callbacks
- Configuration can be saved using GM_setValue/GM_getValue
- Menus can be toggled with assigned keys (default: ShiftRight)
- All styles use !important to prevent conflicts with page CSS

For more implementation examples, see the example userscript in the repository.
