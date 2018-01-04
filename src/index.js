import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Icon extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			service1:"",
			service2:"",
			service3:"",
			service4:"",
			service5:"",
			url1:"",
			url2:"",
			user1:"",
			user2:"",
		}
	}

	componentDidMount(){
		this.setState({
			service1:"github",
			service2:"pivotal",
			service3:"codeship",
			service4:"papertrail",
			service5:"sentry",
			url1:null,
			url2:"https://github.com/",
			user1:true,
			user2:false
		});
	}
	render(){
		return (
			<div class="container">
				<div class="row">
					<Logo service={this.state.service1} url= {this.state.url1} userAccess= {this.state.user2}/>
					<Logo service={this.state.service1} url= {this.state.url2} userAccess= {this.state.user1}/>
					<Logo service={this.state.service1} url= {this.state.url2} userAccess= {this.state.user2}/>
				</div>
				<div class="row">
					<Logo service={this.state.service2} url= {this.state.url1} userAccess= {this.state.user2}/>
					<Logo service={this.state.service2} url= {this.state.url2} userAccess= {this.state.user1}/>
					<Logo service={this.state.service2} url= {this.state.url2} userAccess= {this.state.user2}/>
				</div>
				<div class="row">
					<Logo service={this.state.service3} url= {this.state.url1} userAccess= {this.state.user2}/>
					<Logo service={this.state.service3} url= {this.state.url2} userAccess= {this.state.user1}/>
					<Logo service={this.state.service3} url= {this.state.url2} userAccess= {this.state.user2}/>
				</div>
				<div class="row">
					<Logo service={this.state.service4} url= {this.state.url1} userAccess= {this.state.user2}/>
					<Logo service={this.state.service4} url= {this.state.url2} userAccess= {this.state.user1}/>
					<Logo service={this.state.service4} url= {this.state.url2} userAccess= {this.state.user2}/>
				</div>
				<div class="row">
					<Logo service={this.state.service5} url= {this.state.url1} userAccess= {this.state.user2}/>
					<Logo service={this.state.service5} url= {this.state.url2} userAccess= {this.state.user1}/>
					<Logo service={this.state.service5} url= {this.state.url2} userAccess= {this.state.user2}/>
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
//como concatenar {props.service} en medio del path

class Favicon extends React.Component {
	render(){
		const service = this.props.service;
		const initialPath = "/images/";
		const finalPath = ".png";
		const source = initialPath + service + finalPath;
		console.log(source);

		return <img class={this.props.style} src={source} />		
	}
}


class NoProject extends React.Component {
  render(){
  	return (

  		<div class="col-lg-4 col-mg-4 text-center">
  			<a href="#" class="disabled">
  				<Favicon service={this.props.service} style="disabled-icon"/>
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
					<Favicon service={this.props.service} style="no-access"/>
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
					<Favicon service={this.props.service} style="full-access"/>
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
