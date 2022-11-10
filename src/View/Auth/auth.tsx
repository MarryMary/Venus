import AuthStyle from './css/auth.module.css';
import LoginForm from "./login_form";

type LoggedInProps = {
    IsLoggedIn: boolean,
    setIsLoggedIn: Function
}

function Auth(props: LoggedInProps){
    return(
        <main>
            <div className={AuthStyle.auth_body}>
                <div className={AuthStyle.auth_card}>
                    <h1>Venus</h1>
                    <p>プロジェクト管理・コミュニケーションシステム</p>
                    <hr/>
                    <LoginForm />
                 </div>
            </div>
        </main>
    )
}

export default Auth;