let angle = 0;
let w = 24;
let magicAngle;
let maxD;

function setup() {
    createCanvas(800, 800, WEBGL);
    magicAngle = atan(1/sqrt(2));
    maxD = dist(0, 0, 400, 400);
}

function draw() {
    background(175);
    ortho(-width, width, height, -height, 0, 5000);
    directionalLight(226, 226, 136, -1, 0, 0)
    directionalLight(108, 241, 251, 0, -1, 0)

    translate(0, 50, -100);
    rotateX(QUARTER_PI);
    rotateY(magicAngle);

    rectMode(CENTER);


    let offset = 0;
    for(let z = 0; z < height; z += w) {
        for(let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width / 2, height / 2);
            let offset = map(d, 0, maxD, -PI, PI);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 200, 700);
            ambientMaterial(255);
            translate(x - width / 2, 0, z - height / 2);
            box(w, h , w);
            // rect(x - width / 2 + w / 2, 0, w - 2, h);
            pop();
        }  
    } 

    angle -= 0.06;
}
