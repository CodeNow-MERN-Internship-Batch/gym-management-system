import logoicon from '../assets/fitness-icon.svg';
function Header(){
    return(
        <header className="d-flex align-items-center px-4">
        <div className="d-flex align-items-center ">
          <label><img style={{width:'70px' ,  margin: '10px', height:'70px'}} src={logoicon} alt="" /></label>
          <h2 className="logo-content fs-2 fw-bold main-color ">Fitness GYM</h2>
        </div>
        <div className="navbar-brand d-flex gap-4 ms-auto px-5">
          <a className='main-nav-a fs-4 text-white' href="">Home</a>
          <a className='main-nav-a fs-4 text-white' href="">About</a>
          <a className='main-nav-a fs-4 text-white' href="">Membership</a>
          <a className='main-nav-a fs-4 text-white' href="">Contact</a>
          <button className='login-btn px-4 pt-1 pb-1 rounded-4'>
            <a className='text-decoration-none fs-4 text-white' href="">Login</a>
            <span className='text-white mx-2 fs-3'>/</span>
            <a className='text-decoration-none fs-4 text-white' href="">Register</a>
          </button>
        </div>
      </header>
    )
}
export default Header;