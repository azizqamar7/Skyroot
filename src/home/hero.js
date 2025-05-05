import * as THREE from 'three'

// Function to create and append a canvas to the .home_hero element
function createCanvas() {
  // Find the home_hero container
  const homeHero = document.querySelector('.home_hero')

  // Check if the home_hero element exists
  if (!homeHero) {
    console.error('Could not find .home_hero element in the DOM')
    return
  }

  // Create a canvas element
  const canvas = document.createElement('canvas')

  // Add any necessary attributes and classes
  canvas.id = 'home_canvas'
  canvas.className = 'home_canvas'
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // Style the canvas if needed
  canvas.style.display = 'block'
  canvas.style.position = 'absolute'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.zIndex = '1000'

  // Append the canvas to the home_hero element
  homeHero.appendChild(canvas)

  // Return the canvas reference for further use with THREE.js
  return canvas
}

export const sectionHero = () => {
  const width = window.innerWidth,
    height = window.innerHeight

  // init

  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10)
  camera.position.z = 1

  const scene = new THREE.Scene()

  const textureLoader = new THREE.TextureLoader()
  //   const texture = textureLoader.load('/cat3.jpg')

  const geometry = new THREE.PlaneGeometry(0.2, 0.2)
  const material = new THREE.MeshBasicMaterial({
    // map: texture,
    color: 'red',
    side: THREE.DoubleSide,
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  //   const renderer = new THREE.WebGLRenderer({
  //     antialias: true,
  //     canvas: '.home_canvas',
  //   })

  const canvas = createCanvas()
  let renderer

  // Initialize THREE.js with the canvas (if needed)
  if (canvas && typeof THREE !== 'undefined') {
    // Example: Initialize THREE.js renderer with the canvas
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })

    // Now you can safely use the renderer and canvas
    console.log('THREE.js renderer initialized successfully')
  }

  renderer.setSize(width, height)
  renderer.setAnimationLoop(animate)
  document.body.appendChild(renderer.domElement)

  // animation

  function animate(time) {
    renderer.render(scene, camera)
  }
}
