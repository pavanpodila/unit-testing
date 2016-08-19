import status from '../service/status';

export default ()=> {
    return (input)=> {
        return input ? status(input).label : '';
    };
};
