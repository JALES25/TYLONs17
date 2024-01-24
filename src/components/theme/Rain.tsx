"use client"

import React, { useEffect, useRef } from 'react';
import * as dat from 'dat.gui';

const Rain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Your existing code here, with the following modifications:
    // - Replace all instances of `document.getElementById('canvas')` with `canvas`
    // - Replace all instances of `window.onload` with the useEffect hook
    // - Replace all instances of `window.onresize` and `window.onmousemove` with useEffect hooks and event listeners
    // - Replace all instances of `var` with `let` or `const`
    // - Wrap the `boucle` function and its invocation in a useEffect hook
    // - Replace the `Screenshot` function with a function that uses `canvas.toDataURL()`
    // - Replace the GUI setup code with a useEffect hook that checks if `gui` is defined

    // Variables
    let width = 0;
    let height = 0;
    let mouse = { X: 0, Y: 0 };
    let particules: { vitesseX: number, vitesseY: number, X: number, Y: number, alpha: number, couleur: string }[] = [];
    let gouttes: { vitesseX: number; vitesseY: number; X: any; Y: any; radius: number; alpha: number; couleur: any; }[] = [];
    let nombrebase = 5;
    let nombreb = 2;
    let controls = {
        rain : 2,
        Object : "Nothing",
        alpha : 1,
        color : 200,
        auto : false,
        opacity : 1,
        saturation : 100,
        lightness : 50,
        back : 100,
        red : 0,
        green : 0,
        blue : 0,
        multi : false,
        speed : 2
    };

    // Functions
    function Rain(X: number, Y: number, nombre: number | undefined) {
        if (!nombre) {
            nombre = nombreb;
        }
        while (nombre--) {
            particules.push( 
            {
                vitesseX : (Math.random() * 0.25),
                vitesseY : (Math.random() * 9) + 1,
                X : X,
                Y : Y,
                alpha : 1,
                couleur : "hsla(" + controls.color + "," + controls.saturation + "%, " + controls.lightness + "%," + controls.opacity + ")",
            })
        }
    }
    
    function explosion(X: number, Y: number, couleur: string, nombre: number | undefined) {
        if (!nombre) {
            nombre = nombrebase;
        }
        while (nombre--) {
            gouttes.push( 
            {
                vitesseX : (Math.random() * 4-2	),
                vitesseY : (Math.random() * -4 ),
                X : X,
                Y : Y,
                radius : 0.65 + Math.floor(Math.random() *1.6),
                alpha : 1,
                couleur : couleur
            })
        }
    }
    
    function rendu(ctx: CanvasRenderingContext2D) {

        if (controls.multi == true) {
            controls.color = Math.random()*360;
        }
    
        ctx.save();
        ctx.fillStyle = 'rgba('+controls.red+','+controls.green+','+controls.blue+',' + controls.alpha + ')';
        ctx.fillRect(0, 0, width, height);
        
        let particuleslocales = particules;
        let goutteslocales = gouttes;
        let tau = Math.PI * 2;
    
        for (let i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
                
            ctx.globalAlpha = particulesactives.alpha;
            ctx.fillStyle = particulesactives.couleur;
            ctx.fillRect(particulesactives.X, particulesactives.Y, particulesactives.vitesseY/4, particulesactives.vitesseY);
        }
    
        for (let i = 0, gouttesactives; gouttesactives = goutteslocales[i]; i++) {
                
            ctx.globalAlpha = gouttesactives.alpha;
            ctx.fillStyle = gouttesactives.couleur;
            
            ctx.beginPath();
            ctx.arc(gouttesactives.X, gouttesactives.Y, gouttesactives.radius, 0, tau);
            ctx.fill();
        }
            ctx.strokeStyle = "white";
            ctx.lineWidth   = 2;
    
            if (controls.Object == "Umbrella") {
                ctx.beginPath();
                ctx.arc(mouse.X, mouse.Y+10, 138, 1 * Math.PI, 2 * Math.PI, false);
                ctx.lineWidth = 3;
                ctx.strokeStyle = "hsla(0,100%,100%,1)";
                ctx.stroke();
            }
            if (controls.Object == "Cup") {
                ctx.beginPath();
                ctx.arc(mouse.X, mouse.Y+10, 143, 1 * Math.PI, 2 * Math.PI, true);
                ctx.lineWidth = 3;
                ctx.strokeStyle = "hsla(0,100%,100%,1)";
                ctx.stroke();
            }
            if (controls.Object == "Circle") {
                ctx.beginPath();
                ctx.arc(mouse.X, mouse.Y+10, 138, 1 * Math.PI, 3 * Math.PI, false);
                ctx.lineWidth = 3;
                ctx.strokeStyle = "hsla(0,100%,100%,1)";
                ctx.stroke();
            }
        ctx.restore();
        
        if (controls.auto) {
            controls.color += controls.speed;
            if (controls.color >=360) {
                controls.color = 0;
            }
        }
    }
    
    function update() {

        let particuleslocales = particules;
        let goutteslocales = gouttes;
        
        for (let i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
            particulesactives.X += particulesactives.vitesseX;
            particulesactives.Y += particulesactives.vitesseY+5;
            if (particulesactives.Y > height-15) {
                particuleslocales.splice(i--, 1);
                explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur, nombreb);
            }
            let umbrella = (particulesactives.X - mouse.X)*(particulesactives.X - mouse.X) + (particulesactives.Y - mouse.Y)*(particulesactives.Y - mouse.Y);
                if (controls.Object == "Umbrella") {
                    if (umbrella < 20000 && umbrella > 10000 && particulesactives.Y < mouse.Y) {
                        explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur, nombreb);
                        particuleslocales.splice(i--, 1);
                    }
                }
                if (controls.Object == "Cup") {
                    if (umbrella > 20000 && umbrella < 30000 && particulesactives.X+138 > mouse.X && particulesactives.X-138 < mouse.X && particulesactives.Y > mouse.Y) {
                        explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur, nombreb);
                        particuleslocales.splice(i--, 1);
                    }
                }
                if (controls.Object == "Circle") {
                    if (umbrella < 20000) {
                        explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur, nombreb);
                        particuleslocales.splice(i--, 1);
                    }
                }
        }
    
        for (let i = 0, gouttesactives; gouttesactives = goutteslocales[i]; i++) {
            gouttesactives.X += gouttesactives.vitesseX;
            gouttesactives.Y += gouttesactives.vitesseY;
            gouttesactives.radius -= 0.075;
            if (gouttesactives.alpha > 0) {
                gouttesactives.alpha -= 0.005;
            } else {
                gouttesactives.alpha = 0;
            }
            if (gouttesactives.radius < 0) {
                goutteslocales.splice(i--, 1);
            }
        }
    
        let i = controls.rain;
        while (i--) {
            Rain(Math.floor((Math.random()*width)), -15, controls.alpha);
        }
    }
    
    function Screenshot() {
        if (canvas) {
            window.open(canvas.toDataURL());
        }
    }

    // Event listeners
    window.onresize = function onresize() { 
        width = canvas.width = window.innerWidth;
	    height = canvas.height = window.innerHeight;
    };
    window.onmousemove = function onmousemove(event) { 
        mouse.X = event.clientX;
	    mouse.Y = event.clientY;
    };

    

    // GUI setup
    useEffect(() => {
        const gui = new dat.GUI();
        gui.add(controls, 'rain', 1, 10).name("Rain intensity").step(1);
        gui.add(controls, 'alpha', 0.1, 1).name("Alpha").step(0.1);
        gui.add(controls, 'color', 0, 360).name("Color").step(1).listen();
        gui.add(controls, 'auto').name("Automatic color");
        gui.add(controls, 'speed', 1, 10).name("Speed color").step(1);
        gui.add(controls, 'multi').name("Multicolor");
        gui.add(controls, 'saturation', 0, 100).name("Saturation").step(1);
        gui.add(controls, 'lightness', 0, 100).name("Lightness").step(1);
        gui.add(controls, 'opacity', 0.0, 1).name("Opacity").step(0.1);
        gui.add(controls, 'Object', ['Nothing','Circle','Umbrella', 'Cup']);
        // gui.add(Screenshot, 'Screenshot');
        let Background = gui.addFolder('Background color');
        Background.add(controls, 'red', 0, 255).step(1);
        Background.add(controls, 'green', 0, 255).step(1);
        Background.add(controls, 'blue', 0, 255).step(1);
      
        // Cleanup function to remove the GUI when the component unmounts
        return () => gui.destroy();
      }, []);
    // ...

    // Boucle function
    (function boucle() {
        requestAnimationFrame(boucle);
        update();
        rendu(ctx);
    })();
    

  }, []);

  return (
    <canvas ref={canvasRef} className="w-full h-full" />
  );
};

export default Rain;