import ajoImg from './avatars/A-Jo.PNG'
import annathekate14Img from './avatars/annathekate14.PNG'
import fishbone22Img from './avatars/fishbone22.PNG'
import jamagram11Img from './avatars/jama_gram11.PNG'
import jpdiddleImg from './avatars/JPDiddle.PNG'
import mrHappyImg from './avatars/Mr_Happy.PNG'

const players = [
    {
        name: 'Adam',
        gamerTag: 'A-Jo',
        avatarSrc: ajoImg,
        games: [
            {
                eliminations: 3,
                assists: 3,
                accuracy: 30
            }
        ]
    },
    {
        name: 'Anna',
        gamerTag: 'annathekate14',
        avatarSrc: annathekate14Img,
        games: [
            {
                eliminations: 4,
                assists: 1,
                accuracy: 40
            }
        ]
    },
    {
        name: 'Jami',
        gamerTag: 'jama_gram11',
        avatarSrc: jamagram11Img,
        games:[
            {
                eliminations: 5,
                assists: 2,
                accuracy: 40
            }
        ]
    },
    {
        name: 'Zach',
        gamerTag: 'Mr._Happy',
        avatarSrc: mrHappyImg,
        games: [
            {
                eliminations: 6,
                assists: 4,
                accuracy: 50
            }
        ]
    }, 
    {
        name: 'Mike',
        gamerTag: 'Fishbone22',
        avatarSrc: fishbone22Img,
        games: [
            {
                eliminations: 3,
                assists: 3,
                accuracy: 40
            }
        ]
    }, 
    {
        name: 'Jack',
        gamerTag: 'JPDiddle',
        avatarSrc: jpdiddleImg,
        games: [
            {
                eliminations: 5,
                assists: 4,
                accuracy: 40
            }
        ]
    }
];

export default players