import "./Card.css"

export const Card = ({emoji, heading, detail}) => {
    return(
        <div className="card">
            <img src={emoji} height={120} alt=""/>
            <span>{heading}</span>
            <span>{detail}</span>
            {/* <button className="c-button">Learn More</button> */}
        </div>
    )
}