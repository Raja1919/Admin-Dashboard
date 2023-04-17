import './data.css'

const data=(props)=>{
     const {product}=props
    return(
<div className='container'>
        
          <div className='row'>
          <div className="col-lg-12 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                <h2>{product.name}</h2>
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                <h3>{product.price}</h3>
                                                </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
          </div>
       </div>
       
    )
}
export default data