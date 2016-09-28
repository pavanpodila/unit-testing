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
        expect(obj.greeting).toEqual('hello world');
    });

    it('should greet the person', () => {
        const greeting = obj.greet('fannie');

        expect(greeting).toMatch('hello fannie');
    });


    it('should greet lazily default duration', (done) => {
        obj.lazyGreet('fannie', (greeting)=>{
            expect(greeting).toMatch('hello fannie');
            done();
        });

    });

    describe('when greeting lazily, using jasmine.clock()', () => {

        beforeEach(() => {
            jasmine.clock().install();
        });

        afterEach(() => {
            jasmine.clock().uninstall();
        });

        it('should greet after longer durations', (done) => {
            obj.lazyGreet('fannie', (greeting)=>{
                expect(greeting).toMatch('hello fannie');
                done();
            }, 10000);

            jasmine.clock().tick(10000);
        });

    });


});
