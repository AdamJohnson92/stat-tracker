import jitter from '../avatars/jitter.PNG'
import imagined from '../avatars/imagined.PNG'
import imani from '../avatars/imani.PNG'
import defaultImg from '../avatars/default.PNG'
import snake from '../avatars/snake.PNG'
import highwire from '../avatars/highwire.PNG'

const AvatarList = ({avatarChoice, setAvatar}) => {

    const avatarArr = [defaultImg, jitter, imagined, imani,  snake, highwire]

    function chooseAvatar(event) {
        console.log(event.target.src)
        setAvatar()
    }

    return (
        <div className='container'>
            <h3 className='padding-top'> Choose An Avatar</h3>
            {avatarArr.map(avatar => (
                <img src={avatar} className='avatar-img margin avatar-selection' onClick={chooseAvatar}></img>
            ))}
        </div>
    )
}

export default AvatarList