import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css';
import '../styles.css';

function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const fimesLista = localStorage.getItem("@techflix");
        setFilmes(JSON.parse(fimesLista) || [ ]);
    }, [])


    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme)=> {
            return (filme.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@techflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido da lista!");
    }
    return(
        <div className="lista-favoritos">
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você ainda não possui nenhum filme salvo :( </span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={()=>excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Favoritos;