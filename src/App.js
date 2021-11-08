import React, {Component} from 'react';
import './App.css'
import {DomainService} from "./services/DomainService";

import AllDomains from "./components/all-domains/AllDomains";


class App extends Component {
  domainService = new DomainService();

  state = {
    domains:[],
    isReady:false
  }


  render() {

    return (
        <div>

          {this.state.isReady&&(<AllDomains domains={this.state.domains}/>)}


        </div>
    );
  }
  componentDidMount() {
    this.domainService.getAllDomains().then(value => this.setState({domains: value,isReady:true}));
  }

}

export default App;