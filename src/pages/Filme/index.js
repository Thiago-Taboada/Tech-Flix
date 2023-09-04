import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import api from '../../services/api';
import './filme.css';
import '../styles.css';

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function loadFilme(){
            await api.get(`movie/${id}`, {
                params:{
                    api_key: "a5e392e03ce076f6916518aa1a3302c3",
                    language: "pt-BR"
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", { replace:true });
                return;
            })
        }
        loadFilme();

        return() =>{
            console.log("desmontado");
        }

    }, [id, navigate])

    function salvaFilme() {
        const fimesLista = localStorage.getItem("@techflix");

        let filmesSalvos = JSON.parse(fimesLista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Este filme ja esta na sua lista!");
            return
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@techflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    }

    if (loading){
        return(
            <div className="loading">
                <h3>Carregando...</h3><br/>

            </div>
        )
    }
    return(        
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className='area-buttons'>
                <button onClick={salvaFilme}>Salvar</button>
                <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} target='blank' rel='external'>Trailer</a>
            </div>
        </div>
    )

}
export default Filme;