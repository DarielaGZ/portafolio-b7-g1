let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Dariela García')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora')
  .typeString('<strong> <span style="color: #0d6efd;">FRONTEND</span> junior!</strong>')
  .pauseFor(1000)
  .start();