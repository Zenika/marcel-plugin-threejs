class ThreePlugin extends Marcel.Plugin {
    constructor() {
        super({
            defaultProps: {
                filename: "default.glb"
            },
        })

        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
        
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    propsDidChange(prevProps) {
        const {
            filename,
            ambientLight
        } = this.props

        const loader = new THREE.GLTFLoader()
        loader.load(filename,
            gltf => {
                this.scene.add(gltf.scene)
                this.camera = gltf.cameras[0]
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix()
            },
            
            xhr => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded')
            },
            
            error => {
                console.log('An error happened')
            }
        )
        this.scene.add(new THREE.AmbientLight(ambientLight))
    }

    render() {
        const {
            filename,
            ambientLight
        } = this.props

        const animate = () => {
            requestAnimationFrame(animate)
            this.renderer.render(this.scene, this.camera) 
        }
        animate()
    }
}

const instance = new ThreePlugin()

Marcel.Debug.changeProps({
    filename: "default.glb",
    ambientLight: 0x4E4E4E
})