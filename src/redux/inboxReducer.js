
let initialState = {
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

}

const inboxReducer = (state = initialState, action) => {
    return state
}

export default inboxReducer()
