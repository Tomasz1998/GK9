// Biegun Tomasz
// Informatyka/4 semestr
// 22.05.2020


var glCanvas = document.getElementById("glcanvas");
var scena = new THREE.Scene({color: 0xffffff});
var perspCamera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Funkcja która wyświetla na scenie.
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scena, perspCamera);
}

// Światło na figure.
var dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-15, 10, 9);
perspCamera.add(dirLight);
scena.add(perspCamera);

// Kolor figury.
kolorFigury = new THREE.MeshPhongMaterial({color: 0xffffff,});

// Podstawa.
podstawaCylinder1 = new THREE.CylinderGeometry(0.8, 0.8, 0.25, 100);
podstawaDol = new THREE.Mesh(podstawaCylinder1, kolorFigury);

podstawaCylinder2 = new THREE.CylinderGeometry(0.7, 0.7, 0.35, 100);
podstawaGora = new THREE.Mesh(podstawaCylinder2, kolorFigury);

podstawaGora.position.y = 0.15;

var segment1_podstawa = new THREE.Group();
segment1_podstawa.add(podstawaDol);
segment1_podstawa.add(podstawaGora);

segment1_podstawa.position.set(0, -3.75, 0.2);
segment1_podstawa.scale.set(3, 2, 2);

size = 0.2;

// Człon - 2 grupa
czlonCylinder3 = new THREE.CylinderGeometry(1.1, 1.6, 2, 100);
upperBase2 = new THREE.Mesh(czlonCylinder3, kolorFigury);

upperBase2.position.set(0, -2, -0);
const czlonCylinder4 = new THREE.CylinderGeometry(0.85, 1.09, 2, 100);
const upperBase3 = new THREE.Mesh(czlonCylinder4, kolorFigury);

var group2 = new THREE.Group();
group2.add(upperBase2);
group2.add(upperBase3);


// grupa 3 - obrecz

const obreczCylinder5 = new THREE.CylinderGeometry(1.5, 1.5, 0.25, 100);
const upperBase4 = new THREE.Mesh(obreczCylinder5, kolorFigury);

const obreczCylinder7 = new THREE.CylinderGeometry(1.3, 1.3, 0.25, 100);
const upperBase6 = new THREE.Mesh(obreczCylinder7, kolorFigury);

upperBase6.position.set(0,0.15,0);

const obreczCylinder6 = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 100);
const upperBase5 = new THREE.Mesh(obreczCylinder6, kolorFigury);

var group4 = new THREE.Group();
group4.add(upperBase4);
group4.add(upperBase5);
group4.add(upperBase6);

group4.position.set(0, 1, 0);

// glowa

const ballGeometry = new THREE.SphereGeometry(Math.PI / 2, 100, 100, Math.PI,  2*Math.PI, 0, 0.6 * Math.PI);
kolorFigury.side = THREE.DoubleSide;
const ball = new THREE.Mesh(ballGeometry, kolorFigury);
ball.position.set(0, 1.5, 0);
ball.scale.set(1,-0.75,-1);


var head = new THREE.Group();
head.add(ball);
head.position.set(0,1.2,0);

var chessPawn = new THREE.Group();

chessPawn.add(segment1_podstawa, group2, group4, head);
scena.add(chessPawn);

perspCamera.position.z = 5;
animate();