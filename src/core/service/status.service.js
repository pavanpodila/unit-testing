export default (input)=> {
    const value = parseFloat(input, 10);

    if (input >= 0 && input < 20) {
        return {
            label: 'Initiated',
            className: 'progress-danger'
        };

    }

    if (input >= 20 && input < 40) {
        return {
            label: 'Processing',
            className: 'progress-warning'
        };
    }

    if (input >= 40 && input < 60) {
        return {
            label: 'Approving',
            className: 'progress-info'
        };
    }

    return {
        label: 'Finalizing',
        className: 'progress-success'
    };

};