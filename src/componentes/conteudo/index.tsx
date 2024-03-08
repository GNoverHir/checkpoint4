import "./style.css"

type ParametrosPlayer = {
    Nick: string;
    Main: string;
    Img: string;
    Rank: string;
}

const Conteudo = ({Nick, Main, Img, Rank} : ParametrosPlayer)  => {

    return(
        <div className="Player">
            <h1>{Nick}</h1>
            <h3>{Main}</h3>
            <img src={Img}/>
            <h3>{Rank}</h3>
        </div>
    )
}

export default Conteudo;