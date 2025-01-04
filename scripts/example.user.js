// ==UserScript==
// @name         Frost-UI Menu Example
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Example usage of Frost-UI
// @author       FrozenProductions
// @match        https://*/*
// @require      https://raw.githubusercontent.com/FrozenProductions/Frost-UI/main/scripts/Library.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_log
// ==/UserScript==
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  NOTE: THIS IS JUST A SIMPLE EXAMPLE
 *━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

(() => {
    /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     *  Configuration Setup
     *━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

    const config = GM_getValue('menuConfig', {
        combat: {
            killAura: false,
            reach: 3,
            criticals: false,
            noJump: false,
            autoClicker: {
                enabled: false,
                cps: 12,
            },
            targetMode: 'Single',
            priority: 'Distance',
            targetTypes: ['Players'],
            targetPriority: ['Players', 'Monsters', 'Animals']
        },
        movement: {
            speed: false,
            speedValue: 1,
            flight: false,
            noFall: false,
            sprint: false,
            step: false,
            stepHeight: 1,
            stepMode: 'Normal',
        },
        render: {
            esp: false,
            tracers: false,
            nametags: false,
            fullbright: false,
            chams: false,
            opacity: 100,
            noWeather: false,
            clearSky: false,
            espColor: '#7289DA',
        },
        world: {
            timer: false,
            timerSpeed: 1,
            autoFish: false,
            autoMine: false,
            autoFarm: false,
            xray: false,
            caveFinder: false,
        },
    });

    const saveConfig = () => GM_setValue('menuConfig', config);

    /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     *  Menu Initialization
     *━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

    const combatMenu = window.frostManager.addMenu(
        'combat',
        'Combat Menu',
        { x: 100, y: 100 },
        'ShiftRight'
    );
    const movementMenu = window.frostManager.addMenu(
        'movement',
        'Movement Menu',
        { x: 420, y: 100 },
        'ShiftRight'
    );
    const renderMenu = window.frostManager.addMenu(
        'render',
        'Render Menu',
        { x: 740, y: 100 },
        'ShiftRight'
    );
    const worldMenu = window.frostManager.addMenu(
        'world',
        'World Menu',
        { x: 740, y: 400 },
        'ShiftRight'
    );

    /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     *  Combat Menu Setup
     *━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

    combatMenu
        .addCategory('Combat')
        .addToggle(
            'Combat',
            'KillAura',
            (enabled, key) => {
                config.combat.killAura = enabled;
                saveConfig();
            },
            'KeyK'
        )
        .addSlider('Combat', 'Reach', 3, 6, config.combat.reach, (value) => {
            config.combat.reach = value;
            saveConfig();
        })
        .addToggle(
            'Combat',
            'Criticals',
            (enabled) => {
                config.combat.criticals = enabled;
                saveConfig();
            },
            'KeyJ'
        )
        .addOrderList('Combat', 'Target Priority', config.combat.targetPriority, (items) => {
            config.combat.targetPriority = items;
            saveConfig();
        })
        .addSwitch(
            'Combat',
            'NoJump',
            config.combat.noJump,
            (enabled) => {
                config.combat.noJump = enabled;
                saveConfig();
            },
            'slim'
        )
        .addCategory('AutoClicker')
        .addToggle('AutoClicker', 'Enabled', (enabled) => {
            config.combat.autoClicker.enabled = enabled;
            saveConfig();
        })
        .addDualSlider(
            "AutoClicker",
            "CPS",
            0,
            20,
            10,
            15,
            ({ start, end }) => {
                console.log(`Price range: $${start} - $${end}`);
            }
        )
        .addCategory('Target')
        .addRadioGroup(
            'Target',
            'Target Mode',
            ['Single', 'Multiple', 'Switch'],
            config.combat.targetMode,
            (value) => {
                config.combat.targetMode = value;
                saveConfig();
            }
        )
        .addSelect(
            'Target',
            'Priority',
            ['Distance', 'Health', 'Angle'],
            config.combat.priority,
            (value) => {
                config.combat.priority = value;
                saveConfig();
            }
        )
        .addMultiSelect(
            'Target',
            'Target Types',
            ['Players', 'Animals', 'Monsters', 'Villagers', 'Invisibles'],
            config.combat.targetTypes,
            (selected) => {
                config.combat.targetTypes = selected;
                saveConfig();
            }
        )

    /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     *  Movement Menu Setup
     *━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

    movementMenu
        .addCategory('Movement')
        .addToggle('Movement', 'Speed', (enabled) => {
            config.movement.speed = enabled;
            saveConfig();
        })
        .addSlider('Movement', 'Speed Value', 1, 3, config.movement.speedValue, (value) => {
            config.movement.speedValue = value;
            saveConfig();
        })
        .addToggle('Movement', 'Flight', (enabled) => {
            config.movement.flight = enabled;
            saveConfig();
        })
        .addToggle('Movement', 'NoFall', (enabled) => {
            config.movement.noFall = enabled;
            saveConfig();
        })
        .addSwitch(
            'Movement',
            'Sprint',
            config.movement.sprint,
            (enabled) => {
                config.movement.sprint = enabled;
                saveConfig();
            },
            'pill'
        )
        .addCategory('Step')
        .addToggle('Step', 'Enabled', (enabled) => {
            config.movement.step = enabled;
            saveConfig();
        })
        .addSlider('Step', 'Height', 1, 4, config.movement.stepHeight, (value) => {
            config.movement.stepHeight = value;
            saveConfig();
        })
        .addPageSelector(
            'Step',
            'Step Mode',
            ['Normal', 'Jump', 'Spider', 'Matrix'],
            0,
            (value) => {
                config.movement.stepMode = value;
                saveConfig();
            }
        );

    /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     *  Render Menu Setup
     *━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

    renderMenu
        .addCategory('ESP')
        .addToggle('ESP', 'Players', (enabled) => {
            config.render.esp = enabled;
            saveConfig();
        })
        .addToggle('ESP', 'Tracers', (enabled) => {
            config.render.tracers = enabled;
            saveConfig();
        })
        .addToggle('ESP', 'Nametags', (enabled) => {
            config.render.nametags = enabled;
            saveConfig();
        })
        .addColorInput('ESP', 'ESP Color', '#7289DA', (color) => {
            config.render.espColor = color;
            saveConfig();
        })
        .addCategory('Visual')
        .addToggle('Visual', 'Fullbright', (enabled) => {
            config.render.fullbright = enabled;
            saveConfig();
        })
        .addToggle('Visual', 'Chams', (enabled) => {
            config.render.chams = enabled;
            saveConfig();
        })
        .addSlider('Visual', 'Opacity', 0, 100, config.render.opacity, (value) => {
            config.render.opacity = value;
            saveConfig();
        })
        .addCategory('Weather')
        .addToggle('Weather', 'No Weather', (enabled) => {
            config.render.noWeather = enabled;
            saveConfig();
        })
        .addToggle('Weather', 'Clear Sky', (enabled) => {
            config.render.clearSky = enabled;
            saveConfig();
        });

    /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     *  World Menu Setup
     *━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

    worldMenu
        .addCategory('Timer')
        .addToggle('Timer', 'Enabled', (enabled) => {
            config.world.timer = enabled;
            saveConfig();
        })
        .addSlider('Timer', 'Speed', 0, 5, config.world.timerSpeed, (value) => {
            config.world.timerSpeed = value;
            saveConfig();
        })
        .addCategory('Automation')
        .addToggle('Automation', 'Auto Fish', (enabled) => {
            config.world.autoFish = enabled;
            saveConfig();
        })
        .addToggle('Automation', 'Auto Mine', (enabled) => {
            config.world.autoMine = enabled;
            saveConfig();
        })
        .addToggle('Automation', 'Auto Farm', (enabled) => {
            config.world.autoFarm = enabled;
            saveConfig();
        })
        .addCategory('World')
        .addToggle('World', 'XRay', (enabled) => {
            config.world.xray = enabled;
            saveConfig();
        })
        .addToggle('World', 'Cave Finder', (enabled) => {
            config.world.caveFinder = enabled;
            saveConfig();
        })
        .addButton(
            'World',
            'Example',
            () => {
                window.frostManager.showToast({
                    message: 'Success',
                    type: 'success',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Error',
                    type: 'error',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Warning',
                    type: 'warning',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Info',
                    type: 'info',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Undefined',
                    type: 'undefined',
                    duration: 0,
                });
            },
            'primary'
        )
        .addButton(
            'World',
            'Example',
            () => {
                window.frostManager.showToast({
                    message: 'Success',
                    type: 'success',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Error',
                    type: 'error',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Warning',
                    type: 'warning',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Info',
                    type: 'info',
                    duration: 0,
                });
                window.frostManager.showToast({
                    message: 'Undefined',
                    type: 'undefined',
                    duration: 0,
                });
            },
            'destructive'
        );
})();