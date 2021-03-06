

function Header(props){
    return <header>
        <div className="headerLeft">
            <img width={40} height={40  } src="/img/logo.png" alt="Logo"/>
            <div className="headerInfo">
                <h3 className="text-up">Sneakers</h3>
                <p className="opacity">Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="headerRight">
            <li className="distance cu-p" onClick={props.onClickCart}>
                <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                <span>1285 руб</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" alt="user"/>
            </li>
        </ul>
    </header>
}

export default Header