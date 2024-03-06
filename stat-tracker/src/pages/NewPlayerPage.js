import players from "../seed-data"
import { useState } from "react"
import ajoImg from '../avatars/A-Jo.PNG'
import annathekate14Img from '../avatars/annathekate14.PNG'
import fishbone22Img from '../avatars/fishbone22.PNG'
import jamagram11Img from '../avatars/jama_gram11.PNG'
import jpdiddleImg from '../avatars/JPDiddle.PNG'
import mrHappyImg from '../avatars/Mr_Happy.PNG'

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
                avatarSrc: jamagram11Img,
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

                <button className="col-4 btn margin" onClick={addPlayer} disabled={
                    name === '' || gamerTag === ''}
                >Submit Player</button>
            </form>
        </>

    )
}

export default NewPlayerPage