import status from './status';

describe('Status', ()=> {

    const tests = [
        {
            title: 'should work for string values',
            input: '20',
            output: {
                label: 'Processing'
            }
        },
        {
            title: 'should work for numeric values',
            input: 20,
            output: {
                label: 'Processing'
            }
        },
        {
            title: 'should return the correct status for 20',
            input: 20,
            output: {
                label: 'Processing'
            }
        },
        {
            title: 'should return the correct status for 0',
            input: 0,
            output: {
                label: 'Initiated'
            }
        },
        {
            title: 'should return the correct status for 40',
            input: 40,
            output: {
                label: 'Approving'
            }
        },
        {
            title: 'should return the correct status for 60',
            input: 60,
            output: {
                label: 'Finalizing'
            }
        },
        {
            title: 'should return the correct status for 100',
            input: 100,
            output: {
                label: 'Finalizing'
            }
        }
    ].forEach(test=>{
        it(test.title, ()=> {
            pending();
        });

    });


    [
        {
            title: 'should throw for non-numeric values',
            input: 'abcd'
        },
        {
            title: 'should throw for < 0 as string',
            input: '-1'
        },
        {
            title: 'should throw for < 0>',
            input: -10
        },
        {
            title: 'should throw for > 100',
            input: 101
        }
    ].forEach(test=>{
        it(test.title, ()=> {
            pending();
        });
    });

});

