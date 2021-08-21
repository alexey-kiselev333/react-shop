
import './App.scss';
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer";
import * as React from "react";




function App() {

    const [cartOpened,setCartOpened] = React.useState(false);
    const [items,setItems] = React.useState([])
    const [cartItems,setCartItems] = React.useState([])


    React.useEffect(() =>fetch('https://6120b6c424d11c001762ed52.mockapi.io/items')
        .then(res=> res.json())
        .then(res=>setItems(res)),[])

    const onAddToCart = () => {
        console.log('Нажали плюс')
    }

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}

            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content distance-pad">
                <div className="d-flex align-center mb-40 justify-between ">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="поиск..."/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items.map((item) => (
                        <Card title={item.name} price={item.price} imageUrl={item.imageUrl}
                              onFavorite={() => console.log('Добавили в закладки')}
                              onPlus={(obj) => console.log(obj) }/>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
