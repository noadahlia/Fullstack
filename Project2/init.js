users = []
u = ["chana", "shifra", "noa", "dian", "efrat", "tamar", "yael", "rachel", "ester", "jacob", "nadav", "asher", "matan", "yossi", "yonatan"]
for (let i = 0; i < 15; i++) {
    let s = Math.floor(Math.random() * 15);
    let t = Math.floor(Math.random() * 15);
    let username = u[i];
    let email = username + "@gmail.com";
    let password = username + "100";
    const newUser = { userName: username, password: password, email: email, snake: s, wordGuessing: t }   
    users.push(newUser);
}

users = JSON.stringify(users);
localStorage.setItem("users", users);