function Card(){
    return <div className="card">
        <div className="favorite">
            <img src="/img/heart-unlike.svg" alt="unliked"/>
        </div>
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="1sn"/>
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
}

export default Card


