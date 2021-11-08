import React, {Component} from 'react';




class Info extends Component {

    render() {
        let { info } = this.props;
        console.log(info);
        return (
            <div>
                <div>{info.type}</div>
                <div>{info.Validfrom}</div>
                <div>{info.ValidUntil}</div>
                <div>{info.domain}</div>
            </div>
        );
    }
}

export default Info;