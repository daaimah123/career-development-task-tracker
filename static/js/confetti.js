// Confetti Generator
// Source: https://github.com/Agezao/confetti-js (modified for direct inclusion)
window.ConfettiGenerator = function(params) {
    //Default values
    var appstate = {
      target: 'confetti-canvas', // Id of the canvas
      max: 80, // Max itens to render
      size: 1, // prop size
      animate: true, // Should animate?
      respawn: true, // Should confettis be respawned when getting out of screen?
      props: ['circle', 'square', 'triangle', 'line'], // Types of confetti
      colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], // Colors to render confetti
      clock: 25, // Speed of confetti fall
      interval: null, // Draw interval holder
      rotate: false, // Whenever to rotate a prop
      start_from_edge: false, // Should confettis spawn at the top/bottom of the screen?
      width: window.innerWidth, // canvas width (as int, in px)
      height: window.innerHeight // canvas height (as int, in px)
    };
  
    //Setting all the params if received
    if(params) {
      if(params.target)
        appstate.target = params.target;
      if(params.max)
        appstate.max = params.max;
      if(params.size)
        appstate.size = params.size;
      if(params.animate !== undefined && params.animate !== null)
        appstate.animate = params.animate;
      if(params.respawn !== undefined && params.respawn !== null)
        appstate.respawn = params.respawn;
      if(params.props)
        appstate.props = params.props;
      if(params.colors)
        appstate.colors = params.colors;
      if(params.clock)
        appstate.clock = params.clock;
      if(params.start_from_edge !== undefined && params.start_from_edge !== null)
        appstate.start_from_edge = params.start_from_edge;
      if(params.width)
        appstate.width = params.width;
      if(params.height)
        appstate.height = params.height;
      if(params.rotate !== undefined && params.rotate !== null)
        appstate.rotate = params.rotate;
    }
  
    //Canvas and Context objects
    var cv = document.getElementById(appstate.target);
    var ctx = cv.getContext("2d");
  
    //Prop objects
    var particles = [];
  
    //Function to create a particle
    function particleFactory() {
      var p = {
        prop: appstate.props[Math.floor(Math.random() * appstate.props.length)],
        x: appstate.start_from_edge ? (Math.random() > 0.5 ? -10 : appstate.width + 10) : Math.random() * appstate.width,
        y: appstate.start_from_edge ? (Math.random() > 0.5 ? -10 : appstate.height + 10) : Math.random() * appstate.height,
        radius: Math.random() * 4 + 1,
        line_width: Math.random(),
        size: appstate.size,
        rotate: appstate.rotate,
        speed: {
          x: Math.random() * 10 - 5,
          y: Math.random() * 10 - 5
        },
        rotation: Math.PI * 2 * Math.random(),
        color: appstate.colors[Math.floor(Math.random() * appstate.colors.length)],
        rotation_speed: Math.random() * 0.2 - 0.1,
        tilt: Math.random() * Math.PI,
        tilt_speed: Math.random() * 0.1 - 0.05
      };
      return p;
    }
  
    //Function to draw a prop
    function drawProp(prop) {
      ctx.beginPath();
      ctx.lineWidth = prop.line_width;
      ctx.strokeStyle = 'rgb(' + prop.color[0] + ', ' + prop.color[1] + ', ' + prop.color[2] + ')';
      ctx.fillStyle = 'rgb(' + prop.color[0] + ', ' + prop.color[1] + ', ' + prop.color[2] + ')';
  
      if(prop.prop == 'circle'){
        ctx.arc(prop.x, prop.y, prop.radius * prop.size, 0, Math.PI * 2, true);
        ctx.fill();
      } else if(prop.prop == 'square'){
        ctx.save();
        ctx.translate(prop.x + prop.radius * prop.size, prop.y + prop.radius * prop.size);
        if(prop.rotate) {
          ctx.rotate(prop.rotation);
        }
        ctx.fillRect(-prop.radius * prop.size, -prop.radius * prop.size, prop.radius * 2 * prop.size, prop.radius * 2 * prop.size);
        ctx.restore();
      } else if(prop.prop == 'triangle'){
        ctx.save();
        ctx.translate(prop.x + prop.radius * prop.size, prop.y + prop.radius * prop.size);
        if(prop.rotate) {
          ctx.rotate(prop.rotation);
        }
        ctx.moveTo(-prop.radius * prop.size, prop.radius * prop.size);
        ctx.lineTo(0, -prop.radius * prop.size);
        ctx.lineTo(prop.radius * prop.size, prop.radius * prop.size);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      } else if(prop.prop == 'line'){
        ctx.save();
        ctx.translate(prop.x, prop.y);
        if(prop.rotate) {
          ctx.rotate(prop.rotation);
        }
        ctx.moveTo(-prop.radius * prop.size, 0);
        ctx.lineTo(prop.radius * prop.size, 0);
        ctx.stroke();
        ctx.restore();
      }
    }
  
    //Function to draw the confetti
    function draw() {
      ctx.clearRect(0, 0, appstate.width, appstate.height);
  
      for(var i = 0; i < particles.length; i++) {
        drawProp(particles[i]);
      }
  
      update();
    }
  
    //Function to update the confetti
    function update() {
      for(var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if(appstate.animate) {
          p.y += p.speed.y;
          p.x += p.speed.x;
          if(p.rotate) {
            p.rotation += p.rotation_speed;
          }
        }
  
        // Reverse if reached edges
        if(p.speed.y > 0 && p.y > appstate.height) {
          if(appstate.respawn) {
            particles[i] = particleFactory();
          } else {
            particles.splice(i, 1);
            i--;
          }
        } else if(p.speed.y < 0 && p.y < 0) {
          if(appstate.respawn) {
            particles[i] = particleFactory();
          } else {
            particles.splice(i, 1);
            i--;
          }
        } else if(p.speed.x > 0 && p.x > appstate.width) {
          if(appstate.respawn) {
            particles[i] = particleFactory();
          } else {
            particles.splice(i, 1);
            i--;
          }
        } else if(p.speed.x < 0 && p.x < 0) {
          if(appstate.respawn) {
            particles[i] = particleFactory();
          } else {
            particles.splice(i, 1);
            i--;
          }
        }
      }
  
      if(particles.length < appstate.max) {
        particles.push(particleFactory());
      }
    }
  
    return {
      render: function() {
        // Clear canvas
        cv.width = appstate.width;
        cv.height = appstate.height;
        ctx.clearRect(0, 0, appstate.width, appstate.height);
  
        // Create initial confetti
        for(var i = 0; i < appstate.max; i++) {
          particles.push(particleFactory());
        }
  
        // Start drawing
        appstate.interval = setInterval(draw, appstate.clock);
      },
  
      clear: function() {
        particles = [];
        clearInterval(appstate.interval);
        ctx.clearRect(0, 0, cv.width, cv.height);
      }
    };
  };