import './App.css';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar'
import Main from './Components/Main/main'
function App() {

  const product=[
    {
      name:"Adidas",
      price:"$8000"
    },
    {
      name:"Puma",
      price:"$5000"
    },
    {
      name:"Nike",
      price:"$6000"
    },
    {
      name:"Reebok",
      price:"$3000"
    }
  ]






  return (
    <div className='d-flex'>
      <div className='w-auto'>
        <Sidebar/>
      </div>
      <div className='col'>
        <Header/>
        <Main products={product}/>
        <div>
          
        </div>
      </div>
   </div>
  );
}

export default App;
