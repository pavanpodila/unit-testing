export default sessionService;

sessionService.$inject = ['$q', '$timeout'];
function sessionService($q, $timeout) {
    return {
        valid() {
            const defer = $q.defer();

            defer.resolve({
                valid: true
            });

            return defer.promise;
        },

        alive() {
            const defer = $q.defer();

            $timeout(()=> {
                defer.resolve(true);
            }, 500);

            return defer.promise;
        }
    };
};
