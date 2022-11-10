import AuthStyle from "./css/auth.module.css";

function LoginForm(){
    return(
        <div className={AuthStyle.form}>
            <div className={AuthStyle.form_parts}>
                <label htmlFor="user_id">メールアドレス</label>
                <input type="email" name="user_id" id="user_id" placeholder="example@sample.com"/>
            </div>
            <div className={AuthStyle.form_parts}>
                <label htmlFor="password">パスワード</label>
                <input type="password" name="password" id="password" />
            </div>
            <button type="submit" name="submit" id="submit">ログイン</button>
        </div>
    )
}

export default LoginForm;