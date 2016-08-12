export default class LoansService {
    static $inject = ['$http'];

    constructor($http) {
        this.http = $http;
    }

    getAll() {
        return this.http.get('http://localhost:3000/loans')
            .then(response=>response.data);
    }

    get(id) {
        return this.http.get(`http://localhost:3000/loans/${id}`)
            .then(response=>response.data);
    }
}