export class DomainFlagService{
    url = "http://localhost:8000/domainFlag";
    getAllDomainFlags(){
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value;

            });
    }
    getDomainFlagByKey(id){
        return fetch(`${this.url}/?domain=${id}`).then(value => value.json()).then(value => value);
    }

}