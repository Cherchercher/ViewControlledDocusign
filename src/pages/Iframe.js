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
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
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
