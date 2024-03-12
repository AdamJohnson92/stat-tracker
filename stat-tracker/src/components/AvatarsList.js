import { useState } from 'react'
const AvatarList = ({setAvatar}) => {

    const [avatarBorderStyling, setAvatarBorderStyling] = useState('no-border')

    const avatarArr = ['defaultImg','jitter','imagined','imani','snake','highwire', 'monkey', 'vampire', 'fish', 'mizuki' ]



    function chooseAvatar(event) {
        for (let i=0; i<avatarArr.length;i++) {
            const avatar = avatarArr[i]
            if (event.target.matches(`#${avatar}`)) {
                console.log(avatar)
                setAvatar(avatar)
                setAvatarBorderStyling('gold-border')
            }
        }
        
    }

    return (
        <div className='container container'>
            <h3 className='padding-top'> Choose An Avatar</h3>
            {avatarArr.map(avatar => (
                <img key={avatar} src={require(`../avatars/${avatar}.PNG`)}  className={`avatar-img margin avatar-selection ${avatarBorderStyling}`} onClick={chooseAvatar} id={avatar} tabIndex={'0'}></img>
            ))}
        </div>
    )
}

export default AvatarList