document.getElementById('startGame').addEventListener('click', function() {
    alert("добро пожаловать в змейку");

    const size = 5;
    let x = 2, y = 2; 
    let score = 0;
    let alive = true;

    function randomPosition() {
        return [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
    }

    let [candyX, candyY] = randomPosition(); 

    function drawField() {
        let field = "";
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i === y && j === x) {
                    field += "🐍"; 
                } else if (i === candyY && j === candyX) {
                    field += "🍬"; 
                } else {
                    field += "⬜"; 
                }
            }
            field += "\n";
        }
        return field;
    }

    if (!confirm("начать игру?")) {
        alert("ты вышел из игры.");
    } else {
        while (alive) {
            alert(`текущая позиция:\n${drawField()}`);
            let move = prompt("куда двигаем змейку? (вверх, вниз, влево, вправо)", "").toLowerCase();

            while (!["вверх", "вниз", "влево", "вправо"].includes(move)) {
                move = prompt("некорректный ввод, введи: вверх, вниз, влево или вправо.", "").toLowerCase();
            }

            if (move === "вверх") y--;
            if (move === "вниз") y++;
            if (move === "влево") x--;
            if (move === "вправо") x++;

            if (x < 0 || x >= size || y < 0 || y >= size) {
                alert("змейка врезалась в стену((((");
                alive = false;
            } else {
                if (x === candyX && y === candyY) {
                    score += 5;
                    [candyX, candyY] = randomPosition(); 
                    alert("ты съел конфету! +5 очков 🎉");
                } else {
                    score++;
                }
            }
        }

        alert(`игра окончена, твой счет: ${score}`);
    }
});
