import HomeStyle from '../css/home.module.css';

function NavBar(){
    return(
        <nav className={HomeStyle.navbar}>
            <div>
                <p className={HomeStyle.nav_title}>Venus</p>
            </div>
            <div>
                <span className={HomeStyle.navbar_btn}>
                    <i className="fa-solid fa-video"></i>&nbsp;
                    QuickMeeting&nbsp;|&nbsp;
                </span>
                <span className={HomeStyle.navbar_btn}>
                    ログアウト
                </span>
            </div>
        </nav>
    )
}

export default NavBar;