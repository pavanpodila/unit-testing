export default class LoansService {
    static $inject = ['$http', 'env'];

    constructor($http, env) {
        this.http = $http;
        this.apiUrl = env.apiUrl;
    }

    getAll() {
        return this.http.get(`${this.apiUrl}/loans`)
            .then(response=>response.data);
    }

    get(id) {
        return this.http.get(`${this.apiUrl}/loans/${id}`)
            .then(response=>response.data);
    }

    addLoan(loan) {
        const data = Object.assign({
            id: `${Date.now()}`,
            progress: 10,
            created: new Date()
        }, loan);

        return this.http.post(`${this.apiUrl}/loans`, data);
    }
}
