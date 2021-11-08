import React, {Component} from 'react';




class Info extends Component {

    render() {
        let { info } = this.props;
        console.log(info);
        return (
            <div>
                <div>{info.Type}</div>
                <div>{info.ValidFrom}</div>
                <div>{info.ValidUntil}</div>
                <div>{info.domain}</div>
            </div>
        );
    }
}

export default Info;