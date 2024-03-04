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
                id: 1,
                eliminations: 3,
                assists: 3,
                hits: 60,
                shots:200,
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
                id: 1,
                eliminations: 4,
                assists: 1,
                hits: 60,
                shots:200,
                accuracy: 30
            }
        ]
    },
    {
        name: 'Jami',
        gamerTag: 'jama_gram11',
        avatarSrc: jamagram11Img,
        games:[
            {
                id: 1,
                eliminations: 5,
                assists: 2,
                hits: 60,
                shots:200,
                accuracy: 30
            }
        ]
    },
    {
        name: 'Zach',
        gamerTag: 'Mr._Happy',
        avatarSrc: mrHappyImg,
        games: [
            {
                id: 1,
                eliminations: 6,
                assists: 4,
                hits: 60,
                shots: 200,
                accuracy: 30
            }
        ]
    }, 
    {
        name: 'Mike',
        gamerTag: 'Fishbone22',
        avatarSrc: fishbone22Img,
        games: [
            {
                id: 1,
                eliminations: 3,
                assists: 3,
                hits: 60,
                shots: 200,
                accuracy: 30
            }
        ]
    }, 
    {
        name: 'Jack',
        gamerTag: 'JPDiddle',
        avatarSrc: jpdiddleImg,
        games: [
            {
                gameId: 1,
                eliminations: 5,
                assists: 4,
                hits: 60,
                shots:200,
                accuracy: 30
            }
        ]
    }
];

export default players