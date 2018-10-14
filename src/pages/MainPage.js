import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';
class MainPage extends React.Component {
	constructor(){
		super();
		this.state = {
		};	
	}

	goTo(route) {
		this.props.history.replace(`/${route}`)
	  }
	async componentDidMount(){
	}

  
	render(){
		return(
		<div>
		<Navbar fluid>
		 <Navbar.Header>
		 <Button  class= "navbar-element"
		 		bsStyle="primary"
		 		className="btn-margin"
				 onClick={this.goTo.bind(this, 'iframe')}
		 >
			 Secured Sign
	 	</Button>
			 <Button  class= "navbar-element"
				 bsStyle="primary"
				 className="btn-margin"
				 onClick={this.goTo.bind(this, 'about')}
			 >
				 About
			 </Button>
		 </Navbar.Header>
		</Navbar>
 </div>
		);
	}
}

export default MainPage;
