import App from "../App";

let state = {
        inbox : {
            mailData : [
                {id: 1, name : 'Linda Jackson', time: '3:30 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 2, name : 'Linda Jackson', time: '3:40 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 3, name : 'Linda Jackson', time: '3:50 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 4, name : 'Linda Jackson', time: '4:00 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },     {id: 5, name : 'Linda Jackson', time: '4:10 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 6, name : 'Linda Jackson', time: '4:20 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
            ],
            userName : 'Conner B. Realtor',
            companyName : 'For Realtors, LLC',
            avatar : 'Avatar.png',
            emailUserName : 'Linda Jackson',
            emailTime : '3:30pm',

        },
        messages : {
            messagesData : [
                {id: 1, message : 'Hey'},
                {id: 2, message : 'Hi'},
                {id: 3, message : 'How are u?'},
                {id: 4, message : 'Whats up'},
                {id: 5, message : 'Bye'},
            ],
            usersData : [
                {id: 1, name: 'Peter'},
                {id: 2, name: 'Rose'},
                {id: 3, name: 'Tom'},
                {id: 4, name: 'Zack'},
                {id: 5, name: 'Sara'},
            ],
        },
        dashboard: {
            postData : [
                {id: 1, text: 'Hi, how are you?'},
                {id: 2, text: 'Its ,my first post'},
                {id: 3, text: 'Blablabla'},
                {id: 4, text: 'like me'},
                {id: 5, text: 'Comment my page'},
                {id: 6, text: 'Write me a message'},
            ]
        }
}

export default state