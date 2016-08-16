import status from '../service/status.service';

export default ()=> {
    return (input)=> status(input).label;
};
