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
    });

    it('should greet the person', () => {
    });


    it('should greet lazily default duration', (done) => {
        done();
    });

    describe('when greeting lazily, using jasmine.clock()', () => {

        beforeEach(() => {
        });

        afterEach(() => {
        });

        it('should greet after longer durations', () => {
        });

    });


});
