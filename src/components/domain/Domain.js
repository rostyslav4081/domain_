import React, {Component} from 'react';
import {DomainFlagService} from "../../services/DomainFlagService";
import Info from "../info/Info";





class Domain extends Component {
domainFlagService = new  DomainFlagService()
state = {
    info:[],
    isReady: false
}
    render() {
        let {item} = this.props;
        console.log(this.state.info);

        return (
            <div>
                <br/>

                    <div>{item.FQDN}</div>

                {this.state.isReady&&(<Info info={this.state.info[0]} key={this.state.info[0].id}/>)}
            </div>
        );
    }
    componentDidMount() {
    this.domainFlagService.getDomainFlagByKey(this.props.item.id).then(value => this.setState({info:value,isReady:true}));
    }

}

export default Domain;