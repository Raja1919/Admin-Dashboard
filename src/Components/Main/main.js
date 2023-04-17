import './main.css'
import Data from '../Data/data'

const main=(props)=>{
    const {products}=props
    return(
        <div className='row'>
            <div className=' col Main mt-3'>
       {
        products.map((products,i)=>{
            return <Data product={products} i={i}/>
        })
       }
       
       </div>
        </div>
       
       
    )
}
export default main