import './App.css'
import Header from './componentes/header'
import Footer from './componentes/footer'
import Conteudo from './componentes/conteudo'


function App() {

  return (
    <>
    <Header Title= "Meu CP4"></Header>
    <div className='CaixaConteudo'>
      <Conteudo
        Nick= 'Cha Hae In#SLTA'
        Main= "Akali"
        Img = "https://th.bing.com/th/id/R.6c92be9e7cf09ba002c9069a986c939f?rik=8c0FaL93MFJBoA&pid=ImgRaw&r=0"
        Rank = "Diamond"
      />

      <Conteudo
        Nick= 'GNover#BR1'
        Main= "Akali"
        Img = "https://th.bing.com/th/id/R.6c92be9e7cf09ba002c9069a986c939f?rik=8c0FaL93MFJBoA&pid=ImgRaw&r=0"
        Rank = "Gold"
      />

    </div>
    <Footer Title="Pedro Lucca Medeiros Miranda - RM553873"></Footer>
    </>
  )
}

export default App
