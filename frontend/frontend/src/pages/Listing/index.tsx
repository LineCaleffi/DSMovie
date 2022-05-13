import MovieCard from "components/MovieCard";
import MovieScore from "components/MovieScore";
import MovieStars from "components/MovieStars";
import Pagination from "components/Pagination";

function Listing(){
    return(
        <><Pagination></Pagination>
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