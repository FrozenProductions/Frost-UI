# Frost-UI Documentation

A lightweight, customizable menu library for creating interactive user interfaces in userscripts.

## Table of Contents
- [Installation](#installation)
- [Basic-Usage](#basic-usage)
- [Menu-Manager](#menu-manager)
- [Examples](#examples)

## Installation

Add the following to your userscript header:

```js
// @require https://raw.githubusercontent.com/FrozenProductions/Frost-UI/main/scripts/Library.js
```

## Basic-Usage

The library exposes a global `fcpManager` object that you can use to create and manage menus:

```js
const menu = window.fcpManager.addMenu('myMenu', 'My Menu', { x: 100, y: 100 }, 'ShiftRight');

menu.addCategory('Settings')
    .addToggle('Settings', 'Enable Feature', (enabled) => {
        console.log(`Feature ${enabled ? 'enabled' : 'disabled'}`);
    })
    .addSlider('Settings', 'Speed', 1, 10, 5, (value) => {
        console.log(`Speed set to ${value}`);
    });
```

## Menu-Manager

The MenuManager class provides methods for creating and managing menus:

### Methods

- `addMenu(id: string, title: string, position?: { x: number, y: number }, toggleKey?: string): FCPMenu`
- `updateKeybind(menuId: string, category: string, name: string, key: string): void`

## Examples

### Basic Menu
```js
const menu = window.fcpManager.addMenu('basic', 'Basic Menu', { x: 100, y: 100 });

menu.addCategory('General')
    .addToggle('General', 'Enable Feature')
    .addSlider('General', 'Speed', 0, 100, 50);
```

### Complex Menu with Multiple Categories
```js
const menu = window.fcpManager.addMenu('advanced', 'Advanced Menu');

menu.addCategory('Combat')
    .addToggle('Combat', 'KillAura', (enabled, key) => {
        // Callback
    }, 'KeyK')
    .addSlider('Combat', 'Range', 3, 6, 4);

menu.addCategory('Movement')
    .addToggle('Movement', 'Speed')
    .addSlider('Movement', 'Speed Value', 1, 3, 1);

menu.addCategory('Render')
    .addToggle('Render', 'ESP')
    .addColorInput('Render', 'ESP Color', '#7289DA');
```

### Menu with MultiSelect and PageSelector
```js
menu.addCategory('Settings')
    .addMultiSelect('Settings', 'Target Types', [
        'Players',
        'Animals',
        'Monsters'
    ], ['Players'])
    .addPageSelector('Settings', 'Mode', [
        'Normal',
        'Advanced',
        'Custom'
    ], 0);
```

## Notes

- All menus are draggable by default
- Keybinds are automatically managed by the MenuManager
- Components support callbacks for real-time updates
- Configuration can be saved using GM_setValue/GM_getValue
- Menus can be toggled with assigned keys (default: ShiftRight)
