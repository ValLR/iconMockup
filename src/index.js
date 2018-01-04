import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Icon extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			service:"",
			url1:"",
			url2:"",
			user1:"",
			user2:"",
		}
	}

	componentDidMount(){
		this.setState({service:"github",url1:null,url2:"https://github.com/", user1:true, user2:false});
	}
	render(){
		return (
			<div class="container">
				<div class="row">
					<Logo service={this.state.service} url= {this.state.url1} userAccess= {this.state.user2}/>
					<Logo service={this.state.service} url= {this.state.url2} userAccess= {this.state.user1}/>
					<Logo service={this.state.service} url= {this.state.url2} userAccess= {this.state.user2}/>
				</div>
			</div>
		)
	}

}


function Logo(props) {
	//const opciones = (this.props.url === "") ? console.log("grey no access") : console.log("normal")
	if(props.url !== null && props.userAccess !== false){
		return <Normal service={props.service} href={props.url}/>	
	}
	else if(props.url === null){
		return <NoProject service={props.service} />
	}
	else {
		return <NoAccess service={props.service} href={props.url}/>
	}

}
//this.props.service === github --->icon github

class NoProject extends React.Component {
  render(){
  	return (
  		<div class="col-lg-4 col-mg-4 text-center">
  			<a href="#" class="disabled">
  				<i class="fa fa-github fa-5x" aria-hidden="true"></i>
  			</a>
  		</div>
  	);
  }

}
class NoAccess extends React.Component {
	render(){
	  	return (
	  		<div class="col-lg-4 col-mg-4 text-center">
		  		<a href={this.props.href} class="noAccess">
		  			<i class="fa fa-github fa-5x" aria-hidden="true"></i>
		  			<br />
	  				<i class="fa fa-minus-circle" aria-hidden="true"></i>	  			
		  		</a>	  			
	  		</div>
	  	);		
	}
}
class Normal extends React.Component {
	render(){
	  	return (
	  		<div class="col-lg-4 col-mg-4 text-center">
	  			<a href={this.props.href} class="normal">
	  				<i class="fa fa-github fa-5x" aria-hidden="true"></i>
	  			</a>
	  		</div>
	  	);		
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
