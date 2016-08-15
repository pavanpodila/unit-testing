export default ()=> {
    return (input)=> {
        const value = parseFloat(input, 10);

        if (input >= 0 && input < 20) {
            return 'Initiated';

        } else if (input >= 20 && input < 40) {
            return 'Processing';
        } else if (input >= 40 && input < 60) {
            return 'Approving';
        } else {
            return 'Finalizing';
        }
    };
};
