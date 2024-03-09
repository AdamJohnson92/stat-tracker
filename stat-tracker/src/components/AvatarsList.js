import { useState } from 'react'

import jitter from '../avatars/jitter.PNG'
import imagined from '../avatars/imagined.PNG'
import imani from '../avatars/imani.PNG'
import defaultImg from '../avatars/defaultImg.PNG'
import snake from '../avatars/snake.PNG'
import highwire from '../avatars/highwire.PNG'

const AvatarList = ({avatar, setAvatar}) => {

    const [avatarBorderStyling, setAvatarBorderStyling] = useState('no-border')

    const avatarArr = ['defaultImg','jitter','imagined','imani','snake','highwire']

    // const avatarArr = [{img: defaultImg, name: 'defaultImg'}, {img: jitter, name: 'jitter'}, {img: imagined, name:'imagined'}, {img: imani, name:'imani'},  {img: snake, name:'snake'}, {img: highwire, name:'highwire'}]



    function chooseAvatar(event) {
        for (let i=0; i<avatarArr.length;i++) {
            const avatar = avatarArr[i]
            if (event.target.matches(`#${avatar}`)) {
                setAvatar(avatar)
                setAvatarBorderStyling('gold-border')
            }
        }
        console.log(avatar)
        
    }

    return (
        <div className='container container'>
            <h3 className='padding-top'> Choose An Avatar</h3>
            {avatarArr.map(avatar => (
                <img key={avatar}src={require(`../avatars/${avatar}.PNG`)}  className={`avatar-img margin avatar-selection ${avatarBorderStyling}`} onClick={chooseAvatar} id={avatar} tabIndex={'0'}></img>
            ))}
        </div>
    )
}

export default AvatarList