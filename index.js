
let playerHealth = 100;
let playerAttack = 10;
let experience = 0;
let healthPotions = 3;
let potionHeal = 20;
let criticalChance = 0.2;

let monsters = [
    {name: "Гоблин", health: 30, attack: 5},
    {name: "Тролль", health: 50, attack: 10},
    {name: "Дракон", health: 100, attack: 20}
];

function encounterMonster(monster) {
    alert("Вы встретили " + monster.name + "!");

    while (monster.health > 0 && playerHealth > 0) {
        let action = prompt("Вы хотите атаковать, выпить зелье или убежать? (attack/potion/run)");
        
        if (action === "attack") {
            // Восстановите функцию атаки
        } else if (action === "potion") {
            // Восстановите логику использования зелья
        } else if (action === "run") {
            alert("Вы сбежали от " + monster.name);
            break;
        } else {
            alert("Неправильный выбор. Попробуйте снова.");
        }

        if (playerHealth <= 0) {
            alert("Вы погибли!");
            break;
        }
    }
}

function attackMonster(monster) {
    // Восстановите логику атаки монстра, учтите критический удар
}

function usePotion() {
    // Восстановите логику использования зелья
}

function victory(monster) {
    alert("Вы победили " + monster.name + "!");
    experience += 10;

    let upgrade = prompt("Вы победили монстра! Хотите улучшить здоровье или атаку? (health/attack)");
    if (upgrade === "health") {
        playerHealth += 10;
        alert("Ваше здоровье увеличилось до: " + playerHealth);
    } else if (upgrade === "attack") {
        playerAttack += 2;
        alert("Ваша атака увеличилась до: " + playerAttack);
    }
}

function startGame() {
    for (let i = 0; i < monsters.length; i++) {
        let monster = monsters[i];
        encounterMonster(monster);
        
        if (playerHealth <= 0) {
            break;
        }
    }

    alert("Игра окончена. Ваш опыт: " + experience);
}

startGame();