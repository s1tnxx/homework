//задание 1
let arr = [
    {
        key:" robots",
        key2: 230
    },
    {
        key: "robots2",
        key2: 310
    },
    {
       key: "robots3",
       key2: 440
    },
    {
        key: "robots4",
        key2: 500
    },
    {
        key: "robots5",
        key2: 180
    }
]

const filtered = arr.filter(user => user.key2 > 310 )
console.log(filtered);


//задание 2
for(let i = 0; i < 21; i++) {
    if(i == 5 || i == 10 || i == 15) continue;
    console.log(i);
}


//доп. задание
