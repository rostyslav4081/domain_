import React, {Component} from 'react';
import {DomainFlagService} from "../../services/DomainFlagService";
import AllInfo from "../all-info/AllInfo";





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

                {this.state.isReady&&(<AllInfo items={this.state.info} key={this.state.info.id}/>)}
            </div>
        );
    }
    componentDidMount() {
    this.domainFlagService.getDomainFlagByKey(this.props.item.id).then(value => this.setState({info:value}));
    }

}

export default Domain;