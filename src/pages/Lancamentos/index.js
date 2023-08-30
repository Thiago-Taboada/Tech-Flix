import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './lancamentos.css';
import '../styles.css';

function Lancamentos(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/upcoming", {
                params:{
                    api_key: "a5e392e03ce076f6916518aa1a3302c3",
                    language: "pt-BR",
                    page: 1
                }
            });
            setFilmes(response.data.results.slice(0, 15))
            setLoading(false);
        }

        loadFilmes();
    }, [])

    if (loading){
        return(
            <div className="loading">
                <h3>Carregando...</h3><br/>

            </div>
        )
    }

    return(
        <div className='container'>
            <h1>Filmes em Lançamento</h1>
            <div className='lista-filmes'>
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <Link to={`/filme/${filme.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            </Link>
                            <strong>{filme.title}</strong>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Lancamentos;