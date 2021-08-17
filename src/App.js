import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div className="wrapper clear">
            <header>
                <div className="headerLeft">
                    <img width={40} height={40  } src="/img/logo.png"/>
                    <div className="headerInfo">
                        <h3 className="text-up">React Sneakers</h3>
                        <p className="opacity">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li className="distance">
                        <img width={18} height={18} src="/img/cart.svg"/>
                        <span>1285 руб</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg"/>
                    </li>
                </ul>
            </header>
            <div className="content distance-pad">
                <h1>Все кроссовки</h1>
                <div className="stroka">
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/1.jpg"/>
                    <div className="di">
                        <p>Мужские Кроссовки</p>
                        <p>Nike Blazer Mid Suede</p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-bottom-plus">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg"/>
                    <div className="di">
                        <p>Мужские Кроссовки</p>
                        <p>Nike Blazer Mid Suede</p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-bottom-plus">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg"/>
                    <div className="di">
                        <p>Мужские Кроссовки</p>
                        <p>Nike Blazer Mid Suede</p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-bottom-plus">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg"/>
                    <div className="di">
                        <p>Мужские Кроссовки</p>
                        <p>Nike Blazer Mid Suede</p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-bottom-plus">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg"/>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
);
}
export default App;
