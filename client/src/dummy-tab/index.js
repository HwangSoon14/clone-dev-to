import image from '../assest/1.webp'
import avatar from '../assest/avatar.jfif'
export const routeTab = [
    {
        name: 'Home',
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
        route: '/'
    },
    {
        name: 'Listings',
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
        route: '/readinglist'
    },
    {
        name: 'Podcasts',
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
        route: '/'
    },
    {
        name: 'Videos',
        icon: '',
        route: '/'
    },
    {
        name: 'Tags',
        icon: '',
        route: '/'
    },
    {
        name: 'FAQ',
        icon: '',
        route: '/'
    },
    {
        name: 'Forem Shop',
        icon: '',
        route: '/'
    },
    {
        name: 'Sponsors',
        icon: '',
        route: '/'
    },
    {
        name: 'About',
        icon: '',
        route: '/'
    },
    {
        name: 'Contact',
        icon: '',
        route: '/'
    },
]



export const dummyPost = [
    {
        comments: ['1', '1', '1', '1','1','1'],
        createdAt: "2021-05-24T05:58:00.610Z",
        likes: ['1', '1', '1', '1','1','1','1', '1', '1', '1','1','1'],
        saver: ['62655efb65c4fa4922c08fea'],
        slug: "complete-guide-to-using-monitor-as-a-programmer",
        tags:  ['linux', 'programming', 'ubuntu'],
        title: "The Complete Guide To Using One Monitor As A Programmer.",
        updatedAt: "2022-04-24T15:06:21.852Z",
        userId: {_id: '625f5b0522f9b28f4908d17c', userName: 'quangngu', avatar: 'https://res.cloudinary.com/tuy-n-beat/image/upload/v1650356999/default/store-default_izscy4.png'},
        __v: 0,
        _id: "6264e6e8abc2a1e071b08a69",
    },
    {
        comments: ['1','1'],
        createdAt: "2022-01-24T05:58:00.610Z",
        likes: ['1', '1', '1', '1','1','1','1', '1', '1', '1','1','1'],
        saver: ['62655efb65c4fa4922c08fea'],
        slug: "the-power-of-dev-community-feedback-391d",
        tags:  ['watercooler','showdev'],
        title: "THANK YOU DEV! (The power of community feedback! 💘)",
        updatedAt: "2022-04-24T15:06:21.852Z",
        userId: {_id: '625f5b0522f9b28f4908d17c', userName: 'quangngu', avatar: 'https://res.cloudinary.com/tuy-n-beat/image/upload/v1650356999/default/store-default_izscy4.png'},
        __v: 0,
        _id: "6264e6e8abc2a1e071b08a69",
    },
    {
        comments: ['1','1'],
        createdAt: "2022-01-24T05:58:00.610Z",
        likes: ['1', '1', '1', '1','1','1','1', '1', '1', '1','1','1'],
        saver: ['62655efb65c4fa4922c08fea'],
        slug: "ive-made-a-react-component-that-hides-sensitive-information-in-your-app-6og",
        tags:  ['react','javascript','npm'], 
        title: "I've made a react component that hides sensitive information in your app.",
        updatedAt: "2022-04-24T15:06:21.852Z",
        userId: {_id: '625f5b0522f9b28f4908d17c', userName: 'quangngu', avatar: 'https://res.cloudinary.com/tuy-n-beat/image/upload/v1650356999/default/store-default_izscy4.png'},
        __v: 0,
        _id: "6264e6e8abc2a1e071b08a69",
    },
    {
        comments: ['1','1'],
        createdAt: "2022-01-24T05:58:00.610Z",
        likes: ['1', '1', '1', '1','1','1','1', '1', '1', '1','1','1'],
        saver: ['62655efb65c4fa4922c08fea'],
        slug: "is-ruby-based-on-python-5hf9",
        tags:  ['python','ruby','beginners','discuss'], 
        title: "Is Ruby based on Python?",
        updatedAt: "2022-04-24T15:06:21.852Z",
        userId: {_id: '625f5b0522f9b28f4908d17c', userName: 'quangngu', avatar: 'https://res.cloudinary.com/tuy-n-beat/image/upload/v1650356999/default/store-default_izscy4.png'},
        __v: 0,
        _id: "6264e6e8abc2a1e071b08a69",
    },
    
]


export const dummy_tags = [
    {
        tag: "help",
        postList: [
            {
                title: "Is there any effect learning two programming language at the same time ?",
                comments: 6
            },
            {
                title: " Should I start learning React or is it too late ???",
                comments: 32
            },
            {
                title: "TypeScript is wasting my time",
                comments: 30
            },
            {
                title: "Github New : View your contributions in 3D, VR and IRL!",
                comments: 3
            },
            {
                title: "How do I implement a plagiarism detector completely from scratch and it has to be fast as well?",
                comments: 8
            },
        ]
    },
    {
        tag: "explainlikeimfive", 
        postList: [
            {
                title: "What's the difference between Front-end and Back-end development?",
                comments: 27
            }
        ]
      }
]