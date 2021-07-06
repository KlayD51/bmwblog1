import {Link} from 'react-router-dom';


const SideBar = () => {
    return (
        <div className='sideBar'>
            
            <nav>
            <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/Builds'>BUILDS</Link></li>
            <li><Link to='/Community'>COMMUNITY</Link></li>
            </ul>
            
            </nav>

        </div>
    )
}

export default SideBar
