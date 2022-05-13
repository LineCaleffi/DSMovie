import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';



// Props podem ser entendidas como argumentos do componente React.

function Form( ){
    const params = useParams();

    return(
        <FormCard movieId = {`${params.movieId}`}/>
    );
}

export default Form;