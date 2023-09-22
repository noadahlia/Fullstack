let url = localStorage.getItem("url");
document.getElementById('game_frm').src = url;
let game = localStorage.getItem("game");
let gameTitle = game.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })
document.getElementById("game_title").textContent = gameTitle;
document.getElementById('game_frm').focus();
let table = document.getElementById("score_table");
let cur_user = JSON.parse(localStorage.getItem("user"));



function loadTable() {
    table.innerHTML = "";
    let users = JSON.parse(localStorage.getItem("users"));
    users.sort((a, b) => { return b[game] - a[game] });
    users.forEach(element => {
        addRow(element);
    });

}

loadTable();


function addRow(user) {


    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    let username = user.userName;
    cell1.innerHTML = username;
    cell1.style.textAlign = "left";
    let cell2 = row.insertCell(1);
    cell2.innerHTML = user[game];
    cell2.style.textAlign = "right";

}

let scoreP = document.getElementById("score");
let interval = setInterval(updateScore, 500);

function updateScore() {
    let users = JSON.parse(localStorage.getItem("users"));

    let currentScore = localStorage.getItem("score");
    scoreP.innerHTML = currentScore;

    users.forEach(u => {
        if (u.userName == cur_user.userName) {
            if (currentScore > u[game]) {
                u[game] = currentScore;
                localStorage.setItem("users", JSON.stringify(users));
                loadTable();
            }
        }
    });
}

