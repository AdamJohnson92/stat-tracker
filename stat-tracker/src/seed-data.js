import jitter from './avatars/jitter.PNG'
import imagined from './avatars/imagined.PNG'
import imani from './avatars/imani.PNG'
import defaultImg from './avatars/defaultImg.PNG'
import snake from './avatars/snake.PNG'
import highwire from './avatars/highwire.PNG'

const players = [
    {
        name: 'Adam',
        gamerTag: 'A-Jo',
        avatarSrc: jitter,
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
        avatarSrc: imagined,
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
        avatarSrc: defaultImg,
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
        avatarSrc: highwire,
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
        avatarSrc: imani,
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
        avatarSrc: snake,
        games: []
    }
];

export default players

// const answerJSON = {
//     "id": "5f8317c3-79ab-4bb6-9387-8668f56971f3",
//     "first_name" : "Adam",
//     "last_name": "Johnson",
//     "email": "adamgjohnson92@gmail.com",
//     "phone": "4804218270",
//     "solution": 107747
// }