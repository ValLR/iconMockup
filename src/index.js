import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Icon extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			url1:"",
			url2:"",
			user1:"",
			user2:"",
		}
	}

	componentDidMount(){
		this.setState({url1:null,url2:"github.com", user1:true, user2:false});
	}
	render(){
		return (
			<div>
				<Logo url= {this.state.url1} userAccess= {this.state.user2}/>
				<Logo url= {this.state.url2} userAccess= {this.state.user1}/>
				<Logo url= {this.state.url2} userAccess= {this.state.user2}/>
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
		return <a>Normal</a>
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
