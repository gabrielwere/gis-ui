const Header = ()=>{
    return(
        <header>
            <img src={require('../logo.png')} alt="logo" className="logo"/>
           <button onClick={()=>{
               window.scrollBy({
                top:130,
                left:0,
                behavior:'smooth',
            })
           }}>View Map</button>
        </header>
    )
}

export default Header