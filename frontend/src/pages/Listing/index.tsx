import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing(){
    const [pageNumber, setPageNumber] = useState(0); //react

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });
    }, []);

    return(
        
        <>
        <p>{pageNumber}</p> 
        <Pagination></Pagination>
        {/*
            aparece vários na mesma tela, um do lado do outro, tipo tabela 
            controle de ajuste conforme a tela se "movimenta"
            mb-3 -> espaço entre os cards
        */}
        <div className="container">
            <div className="row"> {/*linha */}
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">{/*coluna 1 */}
                <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">{/*coluna 1 */}
                <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 ">{/*coluna 1 */}
                <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">{/*coluna 1 */}
                <MovieCard></MovieCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">{/*coluna 1 */}
                <MovieCard></MovieCard>
                </div>
               
            </div>
        </div>

        </>
    );
}

export default Listing;