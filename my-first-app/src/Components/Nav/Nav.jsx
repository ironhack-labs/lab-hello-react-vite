
export default function Nav({src1,src2}) {
  return (
        <div className='nav-container'>
            <nav className="nav-bar" >
                <img src={src1}>
                </img>
                <img src={src2}>
                </img>
            </nav>
            <h1 >Say hello to<br/> react JS</h1>
            <h3>
                You will learn to use how use most used library
            </h3>
            <button>Awesome!</button>
            

        </div>
  )
}
