import "./style.css"

const Header = ({Title}:{Title:string}) => {
    return(
        <header className="header">
            <h3>{Title}</h3>
        </header>
        
    )
        
}

export default Header;