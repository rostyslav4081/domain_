export class DomainService{
    url = "http://localhost:8000/domain";
    getAllDomains(){
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value;

            });
    }
    getDomainByID(id){
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value);
    }

}