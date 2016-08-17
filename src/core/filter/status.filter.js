import status from '../service/status';

export default ()=> {
    return (input)=> status(input).label;
};
