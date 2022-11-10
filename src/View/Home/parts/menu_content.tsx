import HomeStyle from '../css/home.module.css';

function MenuContent(){
    return(
        <div className={HomeStyle.all_menu}>
            <div className={HomeStyle.menu}>
                <p className={HomeStyle.menu_header}>
                    カンファレンスルーム
                </p>
                <hr />
                <ul className={HomeStyle.menu_list}>
                    <li>
                        <div className={HomeStyle.room_details}>
                            <p>Sample Conference 1</p>
                            <small>これはサンプルのカンファレンスルームです。</small>
                        </div>
                    </li>
                    <li>
                        <div className={HomeStyle.room_details}>
                            <p>Sample Conference 2</p>
                            <small>これはサンプルのカンファレンスルームです。</small>
                        </div>
                    </li>
                    <li>
                        <div className={HomeStyle.room_details}>
                            <p>Sample Conference 3</p>
                            <small>これはサンプルのカンファレンスルームです。</small>
                        </div>
                    </li>
                    <li>
                        <div className={HomeStyle.room_details}>
                            <p>Sample Conference 4</p>
                            <small>これはサンプルのカンファレンスルームです。</small>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={HomeStyle.menu}>
                <p className={HomeStyle.menu_header}>
                    プライベートルーム
                </p>
                <hr />
            </div>
            <div className={HomeStyle.menu}>
                <p className={HomeStyle.menu_header}>
                    ToDo/予定
                </p>
                <hr />
                <ul className={HomeStyle.todo_list}>
                    <li>2022/11/10 13:00〜：株式会社A様とカンファレンス</li>
                </ul>
            </div>
        </div>
    )
}

export default MenuContent;