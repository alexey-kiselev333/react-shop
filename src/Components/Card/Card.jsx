import styles from './Card.module.scss'
import React from 'react'

function Card({onFavorite,title,imageUrl,price,onPlus}){

    const [isAdded,setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({title,imageUrl,price})
        setIsAdded(!isAdded)
    }



    return <div className={styles.card}>
        <div className={styles.favorite} onClick={onFavorite}>
            <img src="/img/heart-unlike.svg" alt="unliked"/>
        </div>
        <img width={133} height={112} src={imageUrl} alt="1sn"/>
        <h5>{title}</h5>
        <div className={styles.cardbottom}>
            <div className={styles.cardbottomplus}>
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg":"/img/btn-plus.svg"} alt="Plus"/>

        </div>
    </div>
}

export default Card


