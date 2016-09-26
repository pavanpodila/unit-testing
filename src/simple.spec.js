describe('Hello World', () => {

    let obj;

    beforeEach(() => {
        obj = {
            greeting: 'hello world',
            greet(name){
                return `hello ${name}`
            },

            lazyGreet(name, callback, delay=500) {
                setTimeout(()=>{
                    callback(this.greet(name));
                }, delay);
            }
        };
    });


    it('should have a greeting', () => {
        pending();
    });

    it('should greet the person', () => {
        pending();
    });


    it('should greet lazily default duration', (done) => {
        pending();
        done();
    });

    describe('when greeting lazily, using jasmine.clock()', () => {

        beforeEach(() => {
        });

        afterEach(() => {
        });

        it('should greet after longer durations', () => {
            pending();
        });

    });


});
