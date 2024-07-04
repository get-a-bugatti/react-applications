
function Card() {

    return(
        <>
        <div className="card">
            <div className="image-container">
                <img className="card-image" src="../miyamoto-musashi.jpg" alt="The Legendary Swordsman" />
            </div>
            
            <h2 className="card-title">Miyamoto Musashi</h2>
            <p className="card-text">Miyamoto Musashi was a renowned Japanese swordsman, philosopher, and strategist, famous for his unique double-bladed swordsmanship and undefeated record in his 61 duels. Born in 1584, Musashi's martial prowess and innovative techniques set him apart as one of the greatest samurai in history.</p>
        </div>
        </>
    );
}

export default Card;