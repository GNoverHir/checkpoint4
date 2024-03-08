import "./style.css"

const Footer = ({Title} : {Title:string}) => {

    return(
        <footer className="footer">
            <h3>{Title}</h3>
        </footer>
    )
}

export default Footer