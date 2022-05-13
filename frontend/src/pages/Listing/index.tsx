import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing(){
    const [pageNumber] = useState(0); //react

    const[page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12, // deixa apenas 12 elementos por página
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    // useEffect() -> a função será executada depois que a renderização estiver disponível na tela. 
    // Pense em efeitos como um rota de fuga do mundo puramente funcional do React para o mundo imperativo.
    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`) // &sort=title -> organiza em ordem alfabetica por titulogit
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    return(
        
        <>
        <Pagination></Pagination>
        {/*
            aparece TODOS os filmes salvos no banco de dados ( 12 por página)
        */}
        <div className="container">
            <div className="row"> {/*linha */}
                {page.content.map(movie =>(
                    //em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key (atributo unico )
                    <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard movie={movie}></MovieCard>
                    </div>
                ))}
            </div>
        </div>

        </>
    );
}

export default Listing;