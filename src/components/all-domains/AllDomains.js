import React, {Component} from 'react';
import Domain from "../domain/Domain";




class AllDomains extends Component {

    render() {
    let {domains} = this.props;
        return (
            <div>
                {domains.map(domain=><Domain item={domain} key={domain.id}></Domain>)}
            </div>
        );
    }

}

export default AllDomains;