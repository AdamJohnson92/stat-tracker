import players from "../seed-data"

const HomePage = () => {
    return (
        <>
            <h2>These Goons</h2>
            {players.map(player => (
                <>
                <h3>{player.gamerTag}</h3>
                <p>a.k.a. {player.name}</p>
                </>
            ))}
        </>
    )
}

export default HomePage