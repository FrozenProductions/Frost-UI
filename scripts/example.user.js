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
            abilities: [],
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

    const search = new window.FrostSearch({
        "Combat Menu": combatMenu,
        "Movement Menu": movementMenu,
        "Render Menu": renderMenu,
        "World Menu": worldMenu
    }, "k")

    //search.setTheme("nord")

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
        .addGridSelector(
            'Movement',
            'Movement Abilities',
            [
                {
                    id: "flight",
                    icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
                    label: "Flight"
                },
                {
                    id: "bhop",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>circle arrow up 2</title><g fill="#ffffff" class="nc-icon-wrapper"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm4.451,11.717A.5.5,0,0,1,16,12H13v5a1,1,0,0,1-2,0V12H8a.5.5,0,0,1-.391-.812l4-5a.517.517,0,0,1,.782,0l4,5A.5.5,0,0,1,16.451,11.717Z" fill="#ffffff"></path></g></svg>`,
                    label: "Bunny Hop"
                },
                {
                    id: "longjump",
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><title>arrow trend up</title><g fill="#ffffff" class="nc-icon-wrapper"><path d="m17,6l-7.293,7.293c-.391.391-1.024.391-1.414,0l-2.586-2.586c-.391-.391-1.024-.391-1.414,0l-2.293,2.293" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-color="color-2"></path><polyline points="17 13 17 6 10 6" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></g></svg>`,
                    label: "Long Jump"
                }
            ],
            config.movement.abilities,
            (selected) => {
                config.movement.abilities = selected;
                saveConfig();
            },
            1
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
        .addChart("World", "Entities", {
            width: 260,
            height: 100,
            maxDataPoints: 100,
            series: [
                {
                    label: "Players",
                    color: "#ff4757",
                },
                {
                    label: "Mobs",
                    color: "#2ed573",
                }
            ],
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
    // simulate data
    let playerCount = 50;
    let mobCount = 30;

    setInterval(() => {
        const chart = worldMenu.getCategories().get("World")?.items.get("Entities");
        if (chart) {
            playerCount = Math.max(0, Math.min(100, playerCount + (Math.random() - 0.5) * 10));
            mobCount = Math.max(0, Math.min(100, mobCount + (Math.random() - 0.5) * 8));

            chart.addDataPoint(0, playerCount);
            chart.addDataPoint(1, mobCount);
        }
    }, 100);
})();