let main = document.getElementById("main");
let arr =
[   "https://i.pinimg.com/736x/ca/c6/d8/cac6d852725aa673ffe24f9f955e6ba1.jpg",
    "https://i.pinimg.com/736x/be/62/c6/be62c6d1b478fb178e25900bcd2a2da6.jpg",
    "https://i.pinimg.com/736x/62/37/8b/62378bdaefee18d29163c9c88afdff3a.jpg",
    "https://i.pinimg.com/736x/f2/e6/69/f2e66957562f29212191ebdb08a66d05.jpg",
    "https://i.pinimg.com/736x/1d/1f/b4/1d1fb434e8977a693c1227dd2bae9c2e.jpg",
    "https://i.pinimg.com/1200x/59/5e/e3/595ee3d43f0bac56e4209d2b1e20c245.jpg",
    "https://i.pinimg.com/736x/d8/15/c2/d815c22ab5160420b55b42d8210624a8.jpg",
    "https://i.pinimg.com/736x/d8/f6/d7/d8f6d7779c55dd390e74d869a359c864.jpg",
    "https://i.pinimg.com/originals/43/42/97/434297168b4e0c357a151270335540f3.png",
    "https://i.pinimg.com/736x/35/48/35/3548357337902e2d9d7a79b1a6a166bc.jpg"
];
let s = "";
for(let i = 1; i <= 44; i++){
    let r = Math.floor(Math.random()*10);
    s+=`<div class="card">
            <img src=${arr[r]}>
        </div>`;
}

main.innerHTML = s;