import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
  
class AboutPage extends React.Component {
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
            		<h3 class="ml-4">Secured Sign utilizes timer and Machine Learning to enhance reliability and security of E-Signiture. </h3>
      		</div>
		);
	}
}

export default AboutPage;
