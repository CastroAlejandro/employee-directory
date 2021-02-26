class Component {
	state = {}
	constructor() {
		this.componentDidMount()
		this.render()
		this.componentDidUnmount()
	}

	setState(val) {
		Object.entries(val).forEach(([k, v]) => state[k] = v)
		this.render()
	}
	componentDidMount() { }
	componentDidUnmount() { }
	render() { }
}

class App extends Component {
	componentDidMount() {
		console.log("CDM")
	}

	render() {
		console.log("Called render")
	}
}

new App()
