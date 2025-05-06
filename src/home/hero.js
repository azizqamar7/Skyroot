import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// Function to create and append a canvas to the .home_hero element
function createCanvas() {
 
  // Create a canvas element
  const canvas = document.createElement('canvas')
  const canvasContainer = document.querySelector('[data-webgl-scene="example-scene"]')

  // Add any necessary attributes and classes
  canvas.id = 'home_canvas'
  canvas.className = 'home_canvas'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.maxWidth = '100%'
  // Style the canvas if needed
  canvas.style.display = 'block'
  canvas.style.position = 'absolute'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.zIndex = '1000'

  // Append the canvas to the home_hero element
  canvasContainer.appendChild(canvas)

  // Return the canvas reference for further use with THREE.js
  return canvas
}

export const sectionHero = () => {
  const width = window.innerWidth,
    height = window.innerHeight

  // init
  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10)
  camera.position.z = 3 // Moved camera back to see the model better

  const scene = new THREE.Scene()

  const canvas = createCanvas()
  let renderer

  // Initialize THREE.js with the canvas
  if (canvas && typeof THREE !== 'undefined') {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    console.log('THREE.js renderer initialized successfully')
  }

  renderer.setSize(width, height)
  renderer.setAnimationLoop(animate)

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  // Load GLTF model
  const loader = new GLTFLoader()
  let model

  loader.load(
    'https://skyroot-assets.netlify.app/rocket.glb', // Replace with your model path
    (gltf) => {
      model = gltf.scene
      
      // Center the model
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)
      
      // Scale the model if needed
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim
      model.scale.multiplyScalar(scale)
      
      scene.add(model)
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    },
    (error) => {
      console.error('An error happened loading the model:', error)
    }
  )

  // animation
  function animate(time) {
    if (model) {
      model.rotation.y += 0.005 // Optional: Add some rotation to the model
    }
    renderer.render(scene, camera)
  }
}
