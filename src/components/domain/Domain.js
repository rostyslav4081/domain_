import React, {Component} from 'react';






class Domain extends Component {

    render() {
        let {item} = this.props;


        return (
            <div>
                <br/>

                    <div>{item.FQDN}</div>


            </div>
        );
    }


}

export default Domain;