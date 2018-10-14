import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Iframe from 'react-iframe'
class IframePage extends React.Component {
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
                <Iframe url="https://demo.docusign.net/signing/emails/v2-c76b390f6f8a4c7b824b7cc0ff1a73cdedffca612f54485a912c6960c473f229833ad4264e304c03904957c725c422f1"
                position="absolute"
                width="100%"
                id="myId"
                className="myClassname"
                height="100%"
                styles={{height: "800px"}}
                allowFullScreen/>
            </div>
		);
	}
}

export default IframePage;
