# Frost-UI Documentation

A lightweight, customizable menu library for creating interactive user interfaces in userscripts.

## Table of Contents

-   [Installation](#installation)
-   [Basic Usage](#basic-usage)
    -   [Snap-to-Grid](#snap-to-grid)
-   [Components](#components)
    -   [Categories](#categories)
    -   [Toggle-Switch](#toggle-switch)
    -   [Slider](#slider)
    -   [Radio Group](#radio-group)
    -   [Select](#select)
    -   [Color Input](#color-input)
    -   [Multi Select](#multi-select)
    -   [Page Selector](#page-selector)
    -   [Buttons](#buttons)
    -   [Order List](#order-list)
    -   [Dual Slider](#dual-slider)
    -   [Grid Selector](#grid-selector)
    -   [Charts](#charts)
    -   [Search Menu](#search-menu)
    -   [Modal](#modal)
-   [Themes](#themes)
-   [Menu Manager](#menu-manager)

## Installation

Add to your userscript header:

```javascript
// @require https://raw.githubusercontent.com/FrozenProductions/Frost-UI/main/scripts/Library.js
```

## Basic Usage

### Creating a Menu

```javascript
const menu = window.frostManager.addMenu(
    "uniqueId", // Unique identifier for the menu
    "Menu Title", // Display title
    { x: 100, y: 100 }, // Initial position (optional)
    "ShiftRight" // Toggle key (optional)
);
```

### Snap-to-Grid

Menus support snap-to-grid functionality for easier alignment and positioning. When enabled, the menu will snap to grid points while dragging and optionally show a visual grid overlay.

```javascript
const menu = window.frostManager.addMenu(
    "uniqueId",
    "Menu Title",
    { x: 100, y: 100 },
    "ShiftRight",
    {
        enabled: true,    // Enable snap-to-grid
        gridSize: 20,     // Grid cell size in pixels
        showGrid: true    // Show grid overlay while dragging
    }
);
```

#### Grid Configuration Options

| Property | Type     | Default | Description                          |
| -------- | -------- | ------- | ------------------------------------ |
| `enabled`   | `boolean` | `false` | Enable snap-to-grid functionality    |
| `gridSize`  | `number`  | `20`    | Size of grid cells in pixels         |
| `showGrid`  | `boolean` | `true`  | Show grid overlay while dragging     |

#### Grid Methods

```javascript
// Get current grid configuration
const config = menu.getGridConfig();
console.log(config); // { enabled: true, gridSize: 20, showGrid: true }

// Update grid configuration
menu.setGridConfig({ gridSize: 40 });
menu.setGridConfig({ enabled: false, showGrid: false });

// Check if grid is enabled
const isEnabled = menu.isGridEnabled();

// Enable/disable grid snapping
menu.setGridEnabled(true);
menu.setGridEnabled(false);
```

## Components

### Categories

Categories help organize menu items:

```javascript
menu.addCategory("Combat") // Creates a collapsible section
    .addCategory("Movement") // Chain multiple categories
    .addCategory("Render"); // Each category can contain multiple items
```

### Toggle-Switch

Creates a toggle with optional keybind:

```javascript
menu.addToggle(
    "Combat", // Category name
    "KillAura", // Toggle name
    (enabled) => {
        console.log(`KillAura ${enabled ? "enabled" : "disabled"}`);
    },
    "KeyK" // Optional keybind
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
        console.log(`Range set to ${value}`);
    },
    0.5 // Optional step value
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
        console.log(`Mode changed to ${selected}`);
    }
);
```

### Select

The Select component creates a dropdown menu with single-item selection:

```javascript
// Basic usage with string array
menu.addSelect(
    "Settings", // Category name
    "Language", // Select name
    ["English", "Spanish", "French"], // Options
    "English", // Default value
    (selected) => {
        console.log(`Language changed to: ${selected}`);
    }
);

// Using key-value pairs
menu.addSelect(
    "Settings",
    "Theme",
    {
        dark: "Dark Mode",
        light: "Light Mode",
        system: "System Default",
    },
    "system",
    (selected) => {
        applyTheme(selected);
    }
);
```

#### Features

-   Smooth open/close animations
-   Keyboard navigation support
-   Search by typing
-   Custom styling per theme
-   Automatic positioning
-   Scrolling for many options

#### Methods

| Method                          | Description                             |
| ------------------------------- | --------------------------------------- |
| `getValue()`                    | Get the currently selected value        |
| `setValue(value: string)`       | Programmatically set the selected value |
| `setOptions(options: string[])` | Update the available options            |
| `disable()`                     | Disable the select                      |
| `enable()`                      | Enable the select                       |

### Color Input

Creates a color input with preview and hex/rgba support:

```javascript
menu.addColorInput(
    "Render", // Category name
    "ESP Color", // Input name
    "#7289DA", // Default color (hex format)
    (color) => {
        console.log(`Color changed to ${color}`);
    }
);
```

#### Features

-   Color picker with hue/saturation selection
-   Hex and RGBA input support
-   Live color preview
-   Copy/paste support
-   Theme-aware styling

#### Methods

| Method                    | Description                    |
| ------------------------- | ------------------------------ |
| `getValue()`              | Get the current color value    |
| `setValue(color: string)` | Set the color programmatically |
| `disable()`               | Disable the color input        |
| `enable()`                | Enable the color input         |

#### Advanced Usage

```javascript
// With RGBA values
menu.addColorInput(
    "Visual",
    "Overlay Color",
    "rgba(114, 137, 218, 0.5)", // Semi-transparent color
    (color) => updateOverlay(color)
);

// Get/Set programmatically
const colorInput = menu.addColorInput("Visual", "Theme Color", "#ff0000");
const currentColor = colorInput.getValue();
colorInput.setValue("#00ff00");
```

### Multi Select

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
        console.log("Selected targets:", selected);
    }
);
```

#### Features

-   Multiple item selection
-   Search/filter functionality
-   Checkbox indicators
-   Select all/none options
-   Keyboard navigation
-   Custom styling per theme

#### Methods

| Method                          | Description                          |
| ------------------------------- | ------------------------------------ |
| `getValues()`                   | Get array of selected values         |
| `setValues(values: string[])`   | Set selected values programmatically |
| `getOptions()`                  | Get available options                |
| `setOptions(options: string[])` | Update available options             |
| `selectAll()`                   | Select all options                   |
| `deselectAll()`                 | Deselect all options                 |
| `disable()`                     | Disable the multi-select             |
| `enable()`                      | Enable the multi-select              |

#### Advanced Usage

```javascript
// With key-value pairs
menu.addMultiSelect(
    "Settings",
    "Features",
    {
        esp: "ESP Overlay",
        tracers: "Tracers",
        boxes: "Bounding Boxes",
        health: "Health Bars",
    },
    ["esp", "health"],
    (selected) => updateFeatures(selected)
);

// Programmatic control
const multiSelect = menu.addMultiSelect("Combat", "Targets", options, []);
multiSelect.selectAll();
multiSelect.setValues(["Players", "Monsters"]);
const currentSelection = multiSelect.getValues();
```

### Page Selector

Creates a paginated interface for switching between different views:

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
        console.log(`Switched to ${page} mode`);
    }
);
```

#### Features

-   Smooth page transitions
-   Keyboard navigation support
-   Visual page indicators
-   Custom styling per theme
-   Automatic page management

#### Methods

| Method                   | Description             |
| ------------------------ | ----------------------- |
| `getCurrentPage()`       | Get current page index  |
| `setPage(index: number)` | Switch to specific page |
| `nextPage()`             | Go to next page         |
| `previousPage()`         | Go to previous page     |
| `disable()`              | Disable page selector   |
| `enable()`               | Enable page selector    |

#### Advanced Usage

```javascript
// Create page selector with custom configuration
const pageSelector = menu.addPageSelector(
    "Settings",
    "Configuration",
    ["Basic", "Advanced", "Expert", "Debug"],
    0,
    (page, index) => {
        console.log(`Switched to ${page} mode (index: ${index})`);
        updateConfigurationView(index);
    }
);

// Programmatic control
pageSelector.nextPage();
pageSelector.setPage(2);
const currentPage = pageSelector.getCurrentPage();
```

### Buttons

Creates clickable buttons with different styles and variants:

```javascript
menu.addButton(
    "Settings", // Category name
    "Save Config", // Button text
    () => {
        saveConfig();
    },
    "primary" // Button variant ('default', 'primary', 'destructive')
);
```

#### Features

-   Multiple button variants
-   Ripple effect on click
-   Loading state support
-   Custom styling per theme
-   Keyboard accessibility

#### Methods

| Method                         | Description                    |
| ------------------------------ | ------------------------------ |
| `click()`                      | Programmatically trigger click |
| `setLoading(loading: boolean)` | Set loading state              |
| `setText(text: string)`        | Update button text             |
| `disable()`                    | Disable button                 |
| `enable()`                     | Enable button                  |

#### Button Variants

```javascript
// Default button
menu.addButton("Settings", "Reset", resetSettings);

// Primary button
menu.addButton("Settings", "Save", saveSettings, "primary");

// Destructive button
menu.addButton("Settings", "Delete", deleteConfig, "destructive");

// With loading state
const button = menu.addButton("Settings", "Export", async () => {
    button.setLoading(true);
    await exportData();
    button.setLoading(false);
});
```

### Order List

Creates a draggable and reorderable list of items with smooth animations:

```javascript
menu.addOrderList(
    "Category", // Category name
    "Priority List", // List name
    [
        // Initial items
        "Item 1",
        "Item 2",
        "Item 3",
    ],
    (items) => {
        console.log("New order:", items);
    }
);
```

#### Features

-   Drag and drop reordering
-   Smooth animations
-   Up/down arrow buttons
-   Visual feedback during drag
-   Touch-friendly interface
-   Keyboard accessibility

#### Methods

| Method                                         | Description               |
| ---------------------------------------------- | ------------------------- |
| `getItems()`                                   | Get current items array   |
| `setItems(items: string[])`                    | Update list items         |
| `moveItem(fromIndex: number, toIndex: number)` | Move item to new position |
| `disable()`                                    | Disable reordering        |
| `enable()`                                     | Enable reordering         |

#### Advanced Usage

```javascript
// With configuration object
const config = {
    priority: ["High", "Medium", "Low"],
};

const orderList = menu.addOrderList("Priority", "Task Priority", config.priority, (items) => {
    config.priority = items;
    saveConfig();
});

// Programmatic control
orderList.moveItem(0, 2);
const currentOrder = orderList.getItems();
orderList.setItems(["Critical", "High", "Medium", "Low"]);
```

### Dual Slider

Creates a dual-handle slider for selecting a range of values:

```javascript
menu.addDualSlider(
    "Combat", // Category name
    "Distance Range", // Slider name
    3, // Minimum value
    10, // Maximum value
    4, // Default start value
    7, // Default end value
    (values) => {
        console.log(`Range set to ${values.start} - ${values.end}`);
    },
    0.5 // Optional step value
);
```

#### Features

-   Two draggable handles
-   Range selection
-   Smooth animations
-   Step value support
-   Visual range indicator
-   Touch-friendly interface

#### Methods

| Method                                  | Description              |
| --------------------------------------- | ------------------------ |
| `getValues()`                           | Get current range values |
| `setValues(start: number, end: number)` | Set range values         |
| `setMin(value: number)`                 | Update minimum value     |
| `setMax(value: number)`                 | Update maximum value     |
| `disable()`                             | Disable dual slider      |
| `enable()`                              | Enable dual slider       |

#### Advanced Usage

```javascript
// Create dual slider with configuration
const dualSlider = menu.addDualSlider(
    "Settings",
    "Price Range",
    0,
    1000,
    200,
    800,
    (values) => {
        updatePriceFilter(values.start, values.end);
    },
    50
);

// Programmatic control
dualSlider.setValues(300, 700);
const currentRange = dualSlider.getValues();
dualSlider.setMin(100);
dualSlider.setMax(2000);
```

### Grid Selector

Creates a grid of selectable items with optional icons and labels:

```javascript
menu.addGridSelector(
    "Combat", // Category name
    "Targets", // Selector name
    [
        // Grid items
        { id: "player", icon: "👤", label: "Players" },
        { id: "monster", icon: "👾", label: "Monsters" },
        { id: "animal", icon: "🦊", label: "Animals" },
        { id: "vehicle", icon: "🚗", label: "Vehicles" },
        { id: "item", icon: "📦", label: "Items" },
        { id: "block", icon: "⬛", label: "Blocks" },
    ],
    ["player", "monster"], // Default selected items
    (selected) => {
        console.log("Selected targets:", selected);
    },
    3 // Number of columns (optional)
);
```

#### Features

-   Grid layout with customizable columns
-   Icon and label support
-   Multiple item selection
-   Smooth hover animations
-   Keyboard navigation
-   Touch-friendly interface

#### Methods

| Method                        | Description           |
| ----------------------------- | --------------------- |
| `getSelected()`               | Get selected item IDs |
| `setSelected(ids: string[])`  | Set selected items    |
| `setItems(items: GridItem[])` | Update grid items     |
| `setColumns(count: number)`   | Update column count   |
| `disable()`                   | Disable grid selector |
| `enable()`                    | Enable grid selector  |

#### Advanced Usage

```javascript
// Create grid selector with custom configuration
const gridSelector = menu.addGridSelector(
    "Settings",
    "Quick Actions",
    [
        { id: "save", icon: "💾", label: "Save" },
        { id: "load", icon: "📂", label: "Load" },
        { id: "reset", icon: "🔄", label: "Reset" },
        { id: "export", icon: "📤", label: "Export" },
    ],
    ["save"],
    (selected) => updateQuickActions(selected),
    2
);

// Programmatic control
gridSelector.setSelected(["save", "load"]);
const currentSelection = gridSelector.getSelected();
gridSelector.setColumns(4);
```

### Charts

Creates real-time data visualization with smooth animations and multiple series support:

```javascript
menu.addChart(
    "Performance", // Category name
    "FPS Monitor", // Chart name
    {
        width: 260, // Optional, default: 260
        height: 150, // Optional, default: 150
        maxDataPoints: 100, // Optional, default: 100
        series: [
            {
                label: "FPS",
                color: "#2ecc71",
                data: [], // Initial data points
            },
            {
                label: "Frame Time",
                color: "#e74c3c",
                data: [], // Initial data points
            },
        ],
        minY: 0, // Optional, minimum Y-axis value
        maxY: 144, // Optional, maximum Y-axis value
    }
);
```

#### Features

-   Real-time data visualization
-   Multiple data series support
-   Interactive tooltips
-   Smooth animations
-   Auto-scaling Y-axis
-   Grid lines
-   Hover indicators

#### Methods

| Method                                             | Description         |
| -------------------------------------------------- | ------------------- |
| `addDataPoint(seriesIndex: number, value: number)` | Add new data point  |
| `clearData()`                                      | Clear all data      |
| `getValue()`                                       | Get current data    |
| `setMinY(value: number)`                           | Set minimum Y value |
| `setMaxY(value: number)`                           | Set maximum Y value |
| `disable()`                                        | Disable chart       |
| `enable()`                                         | Enable chart        |

#### Example with Real-time Updates

```javascript
// Create performance monitor
const chart = menu.addChart("Metrics", "System Performance", {
    series: [
        {
            label: "CPU Usage",
            color: "#3498db",
        },
        {
            label: "Memory Usage",
            color: "#e67e22",
        },
    ],
    minY: 0,
    maxY: 100,
});

// Update chart every second
setInterval(() => {
    chart.addDataPoint(0, Math.random() * 100); // CPU usage
    chart.addDataPoint(1, Math.random() * 100); // Memory usage
}, 1000);
```

### Search Menu

The Search component provides a macOS Spotlight-like search interface for finding items across one or multiple menus:

```javascript
// Basic usage with single menu
const menu = new FrostUI("myMenu", "My Menu");
const search = new window.FrostSearch(menu);

// With multiple menus
const search = new window.FrostSearch(
    {
        "Main Menu": mainMenu,
        Settings: settingsMenu,
    },
    "k"
); // Use Cmd/Ctrl+K to open search
```

#### Features

-   Real-time search through categories and items
-   Keyboard navigation (up/down/enter)
-   Visual highlighting of matches
-   Smooth scrolling to selected items
-   Theme synchronization with menus
-   Multiple menu support
-   Customizable keyboard shortcut

#### Methods

| Method                    | Description                  |
| ------------------------- | ---------------------------- |
| `setKeybind(key: string)` | Change keyboard shortcut key |
| `getKeybind()`            | Get current shortcut key     |
| `setTheme(theme: string)` | Set search menu theme        |
| `getTheme()`              | Get current theme            |
| `show()`                  | Show search menu             |
| `hide()`                  | Hide search menu             |
| `toggle()`                | Toggle visibility            |

#### Keyboard Controls

| Shortcut       | Action                |
| -------------- | --------------------- |
| `Cmd/Ctrl + K` | Open search (default) |
| `Escape`       | Close search          |
| `Arrow Up`     | Previous result       |
| `Arrow Down`   | Next result           |
| `Enter`        | Select result         |

#### Example with Theme Sync

```javascript
const mainMenu = new FrostUI("main", "Main Menu");
const settingsMenu = new FrostUI("settings", "Settings");

// Add items to menus
mainMenu.addCategory("General").addToggle("General", "Dark Mode").addSlider("General", "Volume", 0, 100, 50);

settingsMenu.addCategory("Preferences").addColorInput("Preferences", "Theme Color", "#ffffff");

// Create search with custom keybind
const search = new window.FrostSearch(
    {
        "Main Menu": mainMenu,
        Settings: settingsMenu,
    },
    "p"
); // Use Cmd/Ctrl+P to open

// Match search theme with menu theme
search.setTheme(mainMenu.getTheme());
```

### Modal

The Modal component provides centered dialog overlays for user confirmations, alerts, and custom interactions:

```javascript
const manager = window.frostManager;

// Basic modal with buttons
const result = await manager.showModal({
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed?',
    buttons: [
        { text: 'Cancel', variant: manager.buttonVariant.DEFAULT, result: 'cancel' },
        { text: 'Confirm', variant: manager.buttonVariant.PRIMARY, result: 'confirm' }
    ]
});
console.log(result); // 'cancel', 'confirm', or null (if dismissed)

// Info-only modal (no buttons)
await manager.showModal({
    title: 'Notice',
    message: 'Click outside to close',
    closeOn: [manager.modal.closeOn.BACKDROP]
});
```

#### Type Constants

Frost-UI provides type constants for better autocomplete and type safety:

```javascript
// Theme constants
manager.modal.themes.DARK      // 'dark'
manager.modal.themes.MIDNIGHT  // 'midnight'
manager.modal.themes.NORD      // 'nord'

// Close method constants
manager.modal.closeOn.BUTTON   // 'button'
manager.modal.closeOn.ESCAPE   // 'escape'
manager.modal.closeOn.BACKDROP // 'backdrop'
manager.modal.closeOn.ANY      // 'any'

// Button variant constants
manager.buttonVariant.DEFAULT     // 'default'
manager.buttonVariant.PRIMARY     // 'primary'
manager.buttonVariant.DESTRUCTIVE // 'destructive'

// Toast type constants
manager.toastType.SUCCESS // 'success'
manager.toastType.ERROR   // 'error'
manager.toastType.INFO    // 'info'
manager.toastType.WARNING // 'warning'
```

#### Modal Options

| Property | Type | Default | Description |
| -------- | ------ | ------- | ----------- |
| `title` | `string` | *required* | Modal title text |
| `message` | `string` | *required* | Modal content message |
| `buttons` | `ModalButton[]` | `[]` | Array of button objects (0-2 buttons) |
| `closeOn` | `ModalCloseMethod[]` | `[manager.modal.closeOn.ANY]` | How modal can be closed |
| `dim` | `boolean` | `true` | Enable backdrop darkening |
| `blur` | `boolean` | `true` | Enable backdrop blur effect |
| `theme` | `string` | *auto-detect* | Theme to apply (use `manager.modal.themes.*`) |

#### Modal Button

| Property | Type | Default | Description |
| -------- | ------ | ------- | ----------- |
| `text` | `string` | *required* | Button label |
| `variant` | `'default'` \| `'primary'` \| `'destructive'` | `manager.buttonVariant.DEFAULT` | Button style variant |
| `result` | `string` | *button text* | Value returned when this button is clicked |

#### Close Methods

| Method | Description |
| ------ | ----------- |
| `'button'` | Only close via button click |
| `'escape'` | Close on Escape key press |
| `'backdrop'` | Close on backdrop click |
| `'any'` | All of the above methods |

#### Return Value

The `showModal()` method returns a `Promise<string | null>`:
- Returns the `result` value of the clicked button
- Returns `null` if closed via Escape or backdrop click (when allowed)

#### Features

-   Promise-based API for async/await usage
-   0-2 button support with customizable variants
-   Flexible close behavior (button, escape, backdrop, or any combination)
-   Optional backdrop dimming and blur effects
-   Automatic theme detection or explicit theme setting
-   Keyboard accessibility (Escape key)
-   Smooth fade/slide animations

#### Examples

```javascript
// Confirmation dialog
const result = await manager.showModal({
    title: 'Delete Item',
    message: 'This action cannot be undone.',
    buttons: [
        { text: 'Cancel', variant: manager.buttonVariant.DEFAULT, result: 'cancel' },
        { text: 'Delete', variant: manager.buttonVariant.DESTRUCTIVE, result: 'delete' }
    ]
});
if (result === 'delete') {
    deleteItem();
}

// Force button choice (no escape/backdrop)
const choice = await manager.showModal({
    title: 'Required Choice',
    message: 'You must select an option:',
    buttons: [
        { text: 'Option A', result: 'a' },
        { text: 'Option B', result: 'b' }
    ],
    closeOn: [manager.modal.closeOn.BUTTON]
});
// choice is guaranteed to be 'a' or 'b', never null

// No visual effects
await manager.showModal({
    title: 'Subtle Notice',
    message: 'No backdrop effects applied',
    dim: false,
    blur: false
});

// Explicit theme
await manager.showModal({
    title: 'Themed Modal',
    message: 'Using midnight theme',
    buttons: [{ text: 'Close', result: 'close' }],
    theme: manager.modal.themes.MIDNIGHT
});

// Close on specific methods only
await manager.showModal({
    title: 'Escape or Backdrop',
    message: 'Close via Escape key or backdrop click',
    closeOn: [manager.modal.closeOn.ESCAPE, manager.modal.closeOn.BACKDROP]
});

// Single button
const confirmed = await manager.showModal({
    title: 'Welcome',
    message: 'Press Continue to proceed',
    buttons: [
        { text: 'Continue', variant: manager.buttonVariant.PRIMARY, result: 'continue' }
    ]
});
```

#### Advanced Usage

```javascript
// Async confirmation with error handling
try {
    const result = await manager.showModal({
        title: 'Save Changes',
        message: 'Do you want to save your changes before exiting?',
        buttons: [
            { text: "Don't Save", variant: manager.buttonVariant.DEFAULT, result: 'discard' },
            { text: 'Save', variant: manager.buttonVariant.PRIMARY, result: 'save' }
        ],
        closeOn: [manager.modal.closeOn.BUTTON, manager.modal.closeOn.ESCAPE]
    });

    if (result === 'save') {
        await saveChanges();
    } else if (result === 'discard') {
        // User chose to discard
    } else {
        // User pressed Escape - don't exit
        return;
    }

    exitApplication();

} catch (error) {
    console.error('Modal error:', error);
}

// With custom theme per modal
const themes = [manager.modal.themes.DARK, manager.modal.themes.MIDNIGHT, manager.modal.themes.NORD];
for (const theme of themes) {
    await manager.showModal({
        title: `${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme`,
        message: `This modal uses the ${theme} theme`,
        buttons: [{ text: 'Next', result: 'next' }],
        theme: theme
    });
}
```

## Themes

Frost-UI comes with a built-in theme system and several preset themes:

-   Dark (default)
-   Midnight
-   Nord
-   Cyber
-   Deep
-   Obsidian
-   Dusk

```javascript
const menuElement = document.querySelector(".frost-menu");
menuElement.setTheme("Dark");
menuElement.setTheme("Midnight");
menuElement.setTheme("Nord");
```

### Custom Themes

Create custom themes by defining CSS variables:

```css
.frost-theme-custom {
    --frost-bg-primary: rgba(20, 25, 35, 0.95); /* Main background */
    --frost-bg-secondary: rgba(25, 30, 40, 0.6); /* Secondary elements */
    --frost-bg-tertiary: rgba(30, 35, 45, 0.4); /* Interactive elements */
    --frost-text-primary: rgba(255, 255, 255, 0.9); /* Main text */
    --frost-text-secondary: rgba(255, 255, 255, 0.7); /* Secondary text */
    --frost-accent-color: #ff7675; /* Primary accent color */
    --frost-accent-hover: #e66767; /* Accent hover color */
    --frost-border-color: rgba(255, 255, 255, 0.1); /* Borders */
    --frost-shadow-color: rgba(0, 0, 0, 0.2); /* Shadows */
    --frost-ripple-color: rgba(255, 255, 255, 0.7); /* Click effects */
}
```

#### Theme Variables

| Variable                 | Description           |
| ------------------------ | --------------------- |
| `--frost-bg-primary`     | Main background color |
| `--frost-bg-secondary`   | Secondary background  |
| `--frost-bg-tertiary`    | Interactive elements  |
| `--frost-text-primary`   | Main text color       |
| `--frost-text-secondary` | Secondary text        |
| `--frost-accent-color`   | Primary accent        |
| `--frost-accent-hover`   | Hover state color     |
| `--frost-border-color`   | Border color          |
| `--frost-shadow-color`   | Shadow color          |
| `--frost-ripple-color`   | Click effect color    |

#### Example Themes

```css
/* Emerald theme */
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

/* Ocean theme */
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

## Menu Manager

The Menu Manager provides basic control over Frost-UI menus in your application:

```javascript
const manager = window.frostManager;

// Create a new menu
const menu = manager.addMenu(
    "uniqueId", // Unique identifier for the menu
    "Menu Title", // Display title
    { x: 100, y: 100 }, // Initial position (optional)
    "ShiftRight" // Toggle key (optional, defaults to 'ShiftRight')
);

// Update menu toggle key
manager.updateMenuToggleKey("uniqueId", "ShiftLeft");

// Update keybind for a specific toggle
manager.updateKeybind(
    "uniqueId", // Menu ID
    "Combat", // Category name
    "KillAura", // Toggle name
    "KeyK" // New keybind
);

// Show toast notification
manager.showToast("Operation completed");
// or with options (using constants for type safety)
manager.showToast({
    message: "Settings saved",
    type: manager.toastType.SUCCESS,
    duration: 3000,
});

// Show modal dialog (using constants)
const result = await manager.showModal({
    title: "Confirm Action",
    message: "Are you sure you want to proceed?",
    buttons: [
        { text: "Cancel", variant: manager.buttonVariant.DEFAULT, result: "cancel" },
        { text: "Confirm", variant: manager.buttonVariant.PRIMARY, result: "confirm" }
    ]
});
console.log(result); // 'cancel', 'confirm', or null
```

### Menu Instance Methods

Once you have a menu instance, you can use these methods:

```javascript
// Toggle menu visibility
menu.toggle();

// Check if menu is open
const isOpen = menu.isMenuOpen();

// Change toggle key
menu.setToggleKey("ShiftLeft");

// Change theme
menu.setTheme("dark"); // or "midnight", "nord", etc.

// Get menu container element
const container = menu.getContainer();

// Get all categories
const categories = menu.getCategories();

// Grid configuration methods
const gridConfig = menu.getGridConfig();     // Get grid config
menu.setGridConfig({ gridSize: 40 });        // Update grid config
menu.setGridEnabled(true);                   // Enable/disable grid
const isGridEnabled = menu.isGridEnabled();  // Check if grid is enabled
```

### Multiple Menus Example

```javascript
// Create multiple menus
const mainMenu = manager.addMenu("main", "Main Menu", { x: 100, y: 100 });
const settingsMenu = manager.addMenu("settings", "Settings", { x: 400, y: 100 });

// Create search that works with both menus
const search = new window.FrostSearch(
    {
        "Main Menu": mainMenu,
        Settings: settingsMenu,
    },
    "k"
); // Use Cmd/Ctrl+K to open search
```
