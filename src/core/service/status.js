export default (input)=> {
    const value = parseFloat(input, 10);

    if (value >= 0 && value < 20) {
        return {
            label: 'Initiated',
            className: 'progress-danger'
        };

    }

    if (value >= 20 && value < 40) {
        return {
            label: 'Processing',
            className: 'progress-warning'
        };
    }

    if (value >= 40 && value < 60) {
        return {
            label: 'Approving',
            className: 'progress-info'
        };
    }

    if (value >= 60 && value <= 100) {
        return {
            label: 'Finalizing',
            className: 'progress-success'
        };
    }

    throw new Error('Invalid Input. Must be between 0-100');

};