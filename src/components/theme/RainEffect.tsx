"use client"

import * as dat from 'dat.gui'

import { useEffect, useState, useRef } from 'react'

export default function RainEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    let mouse = { X: 0, Y: 0 }
    let particules: any[] = []
    let gouttes: any[] = []

    const requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        (window as any).webkitRequestAnimationFrame ||
        (window as any).mozRequestAnimationFrame ||
        (window as any).oRequestAnimationFrame ||
        (window as any).msRequestAnimationFrame ||
        function (callback: FrameRequestCallback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    })()

    const onResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)

      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    const onMouseMove = (event: MouseEvent) => {
      mouse.X = event.clientX
      mouse.Y = event.clientY
    }

    const Rain = (X: number, Y: number, nombre: number) => {
      if (!nombre) {
        nombre = 2; // default value, adjust as needed
      }
      while (nombre--) {
        particules.push({
          vitesseX: Math.random() * 0.25,
          vitesseY: Math.random() * 9 + 1,
          X: X,
          Y: Y,
          alpha: 1,
          couleur: `hsla(${controls.color}, ${controls.saturation}%, ${controls.lightness}%, ${controls.opacity})`,
        });
      }
    };

    const explosion = (X: number, Y: number, couleur: string, nombre: number) => {
      if (!nombre) {
        nombre = 5; // default value, adjust as needed
      }
      while (nombre--) {
        gouttes.push({
          vitesseX: Math.random() * 4 - 2,
          vitesseY: Math.random() * -4,
          X: X,
          Y: Y,
          radius: 0.65 + Math.floor(Math.random() * 1.6),
          alpha: 1,
          couleur: couleur,
        });
      }
    };

    const renderCanvas = () => {
      // implementation...
    }

    const update = () => {
      // implementation...
    }

    const screenshot = () => {
      if (canvas) {
        window.open(canvas.toDataURL())
      }
    }

    const guiSetup = (gui: any) => {
      // GUI setup...
    }

    window.onload = () => {
      const gui = new dat.GUI()
      guiSetup(gui)
      requestAnimFrame(boucle)
    }

    const boucle = () => {
      requestAnimFrame(boucle)
      update()
      renderCanvas()
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)

    onResize() // Initial setup

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} />
}

