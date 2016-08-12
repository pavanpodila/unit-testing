export default class LoansService {
    static $inject = ['$http'];

    constructor($http) {
        this.http = $http;
    }

    getAll() {
        return this.http.get('http://localhost:3000/loans')
            .then(response=>response.data);
    }
}