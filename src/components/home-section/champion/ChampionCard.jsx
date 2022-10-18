import { useRef } from 'react'
import './champion-card.scss'

const ChampionCard = props => {
    const item = props.item

    return (
        <div className="champion-card">
            <div className="frame">
                <div className="bg-image bg" style={{backgroundImage: `url(${item.bg})`}}></div>
            </div>
            <img src={item.img} alt="" />
            <div className="name">{item.name}</div>
        </div>
    )
}

export default ChampionCard