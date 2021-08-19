import logo from './logo.svg';
import './App.scss';
import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

function App() {
    return (
        <div className="wrapper clear">

                <Drawer/>

            <Header/>
            <div className="content distance-pad">
                <div className="d-flex align-center mb-40 justify-between ">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="поиск..."/>
                </div>
                </div>
                <div className="stroka">
                <Card/>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg" alt="2sn"/>
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
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg" alt="3sn"/>
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
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg" alt="4sn"/>
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
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
);
}
export default App;
