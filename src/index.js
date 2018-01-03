import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Icon extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			url:"",
			user:""
		}
	}

	componentDidMount(){
		this.setState({url:"yes", user:false});
	}
	render(){
		return (
			<div>
				<Logo url= {this.state.url} userAccess= {this.state.user}/>
				<Logo url= {this.state.url} userAccess= {this.state.user}/>
				<Logo url= {this.state.url} userAccess= {this.state.user}/>
			</div>
		)
	}

}


function Logo(props) {
	//const opciones = (this.props.url === "") ? console.log("grey no access") : console.log("normal")
	if(props.url !== null && props.userAccess !== false){
		return <Normal />	
	}
	else if(props.url === null){
		return <NoProject />
	}
	else {
		return <NoAccess />
	}

}

//noaccess
//nouser
//allgreat
class NoProject extends React.Component {
  render(){
  	return <a>noProject</a>
  }

}
class NoAccess extends React.Component {
	render(){
		return <a>noAccess</a>
	}
}
class Normal extends React.Component {
	render(){
		return <a>NormalLogo</a>
	}
}

class App extends React.Component {
	render() {
		return (
			<Icon />
		);
	}
}



ReactDOM.render(<App />, document.getElementById('root'));
