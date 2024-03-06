import jitter from '../avatars/jitter.PNG'
import imagined from '../avatars/imagined.PNG'
import imani from '../avatars/imani.PNG'
import defaultImg from '../avatars/default.PNG'
import snake from '../avatars/snake.PNG'
import highwire from '../avatars/highwire.PNG'

const AvatarList = () => {

    const avatarArr = [jitter, imagined, imani, defaultImg, snake, highwire]

    return (
        <div className='container'>
            <h3> Choose An Avatar</h3>
            {avatarArr.map(avatar => (
                <img src={avatar} className='avatar-img margin'></img>
            ))}
        </div>
    )
}

export default AvatarList