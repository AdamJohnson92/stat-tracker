import players from "../seed-data"
import { useState } from "react"
import AvatarList from "../components/AvatarsList"
import jitter from '../avatars/jitter.PNG'
import imagined from '../avatars/imagined.PNG'
import imani from '../avatars/imani.PNG'
import defaultImg from '../avatars/default.PNG'
import snake from '../avatars/snake.PNG'
import highwire from '../avatars/highwire.PNG'

const NewPlayerPage = () => {

    const [name, setName] = useState('')
    const [gamerTag, setGamerTag] = useState('')


    function addPlayer(event) {

        event.preventDefault()

        // console.log(gamer)
        // console.log(`elims: ${eliminations}`)
        // console.log(`assists: ${assists}`)
        // console.log(`accuracy: ${accuracy}%`)

        // for (let i = 0; i < players.length; i++) {

        //     if (name === '' || gamerTag === '' ) {
        //         window.alert('All fields must be filled')
        //     }

        //         // setGamer('Select a Gamer')
        //         // setEliminations('')
        //         // setAssists('')
        //         // setAccuracy('')
        //         // setHits('')
        //     }

        players.push(
            {
                name: name,
                gamerTag: gamerTag,
                avatarSrc: defaultImg,
                games: []
            }
        )

        setName('')
        setGamerTag('')
    }




    return (
        <>
            <h2 className="padding-top">New Player Form</h2>
            <form className="padding-top column container">
                <div className="form-group">
                    <label>
                        <input
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}>
                        </input>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input
                            placeholder="Gamer Tag"
                            value={gamerTag}
                            onChange={e => setGamerTag(e.target.value)}>
                        </input>
                    </label>
                </div>
                <AvatarList/>

                <button className="col-4 btn margin" onClick={addPlayer} disabled={
                    name === '' || gamerTag === ''}
                >Submit Player</button>
            </form>
        </>

    )
}

export default NewPlayerPage