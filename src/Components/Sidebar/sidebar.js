import './sidebar.css'

const sidebar=()=>{
    return(
        <div className='sidebar d-flex flex-column'>
        <ul  className="navbar-nav  sidebar text-center ">
            
            <a  className="sidebar-brand d-flex align-items-center " href="#">
                <i  className="fas fa-laugh-wink text-white fa-3x mt-2 mb-3"></i>
                <span  className='text-white fs-3 p-2'>Raja</span>
            </a>

            <hr  className="sidebar-divider my-0"/>

            <li  className="nav-item  mt-2">
                <a  className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                <i  className="fas fa-fw fa-tachometer-alt symbol"></i>          
                <span  className='item'>Components</span>
                </a>
                
            </li>
            <hr  className="sidebar-divider my-0"/>

            <div  className="sidebar-heading text-center">
                Interface
            </div>


            <li  className="nav-item  mt-2">
                <a  className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                <i  className="fas fa-fw fa-cog symbol "></i>
                    <span  className='item'>Components</span>
                </a>
                
            </li>

            <li  className="nav-item ">
                <a  className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i  className="fas fa-fw fa-wrench symbol"></i>
                    <span  className='item'>Utilities</span>
                </a>
                
            </li>

            <hr  className="sidebar-divider"/>

            <div  className="sidebar-heading text-center">
                Addons
            </div>

            <li  className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder symbol"></i>
                    <span className='item'>Pages</span>
                </a>
                
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                   aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-chart-area symbol"></i>
                   
                    <span className='item'>Charts</span>
                </a>
                
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                   aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-table symbol"></i>
                    <span className='item'>Tables</span>
                </a>
                
            </li>

            <hr className="sidebar-divider d-none d-md-block"/>

        </ul>
        
        
        </div>
    )
}
export default sidebar