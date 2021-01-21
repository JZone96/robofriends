import React, {Component} from 'react';

class ErrorBoundry extends Component{
	constructor(props){ //this is to allow access to this.props in the constructor
		super(props);
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(error, info){//method to catch errors, and do what's inside
		this.setState({hasError:true});
	}

	render(){
		if (this.state.hasError){
			return <h1> Something went wrong ¯\_(ツ)_/¯</h1>
		}
		return this.props.children;
	}
}
export default ErrorBoundry;