import pic0 from './assets/pic-0.jpg'
import pic1 from './assets/pic-1.png'
import pic2 from './assets/pic-2.png'
import pic3 from './assets/pic-3.png'
import pic4 from './assets/pic-4.png'
import pic5 from './assets/pic-5.png'

export const TYPES  ={
    "SIGNUP": "SIGNUP",
    "SIGNIN": "SIGNIN",
}

export type ChatUserProps = {
    data: {
        id: number;
        name: string;
        email: string;
        picture: string;
    }
}

export interface UserType {
    id: number;
    name: string;
    email: string;
    picture: string;
}

export interface MessageType {
    id: number;
    senderId: number;
    receiverId: number;
    content: string;
    timestamp: string;
    seen: boolean;
}

export const registerInputs = [
    {
        id:1,
        type: 'text',
        placeholder: 'Full Name',
        val: 'name'
    },
    {
        id:2,
        type: 'email',
        placeholder: 'Email Address',
        val: 'email'
    },
    {
        id:3,
        type: 'password',
        placeholder: 'Password',
        val: 'password'
    },
    {
        id:4,
        type: 'password',
        placeholder: 'Retype Password',
        val: 'password2'
    },
]

export const loginInputs = [
    {
        id:1,
        type: 'email',
        placeholder: 'Email Address',
        val: 'email'
    },
    {
        id:3,
        type: 'password',
        placeholder: 'Password',
        val: 'password'
    }
]

export const users: ChatUserProps['data'][] = [
    {
        id: 1000,
        name: 'Robiul',
        email: 'robiul@gmail.com',
        picture: pic0,
    },
    {
        id: 1001,
        name: 'John Doe',
        email: 'john@gmail.com',
        picture: pic1,
    },
    {
        id: 1002,
        name: 'Alice Smith',
        email: 'alice@gmail.com',
        picture: pic2,
    },
    {
        id: 1003,
        name: 'Bob Johnson',
        email: 'bob@gmail.com',
        picture: pic3,
    },
    {
        id: 1004,
        name: 'Charlie Brown',
        email: 'charlie@gmail.com',
        picture: pic4,
    },
    {
        id: 1005,
        name: 'David Wilson',
        email: 'david@gmail.com',
        picture: pic5,
    },
]

export const messages = [
    {
        id: 2001,
        senderId: 1000,
        receiverId: 1002,
        content: 'Hello Alice, how are you?',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2002,
        senderId: 1002,
        receiverId: 1000,
        content: 'Hello Robiul, I\'m fine. How about you?',
        timestamp: '2023-10-01T10:01:00Z',
        seen: false,
    },
    {
        id: 2003,
        senderId: 1000,
        receiverId: 1002,
        content: 'I\'m also fine. What are you doing, Alice?',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2004,
        senderId: 1002,
        receiverId: 1000,
        content: 'Robiul, I was just waiting for your message. You know, I miss you so much..',
        timestamp: '2023-10-01T10:01:00Z',
        seen: false,
    },
     {
        id: 2005,
        senderId: 1000,
        receiverId: 1002,
        content: 'Yeah, Alice. I know.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
     {
        id: 2006,
        senderId: 1000,
        receiverId: 1002,
        content: 'I know you love me so much.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
     {
        id: 2007,
        senderId: 1000,
        receiverId: 1002,
        content: 'I also love you very much.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2008,
        senderId: 1002,
        receiverId: 1000,
        content: 'I just wandering Robiul, when will I be yours fully?',
        timestamp: '2023-10-01T10:01:00Z',
        seen: false,
    },
    {
        id: 2009,
        senderId: 1000,
        receiverId: 1002,
        content: 'No worries, my love.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2010,
        senderId: 1000,
        receiverId: 1002,
        content: 'very soon, you will be mine. From top to Bottom.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2011,
        senderId: 1002,
        receiverId: 1000,
        content: 'How many days I need to wait for you, to be my loving husband?',
        timestamp: '2023-10-01T10:01:00Z',
        seen: false,
    },
    {
        id: 2012,
        senderId: 1000,
        receiverId: 1002,
        content: 'Don\'t worry my sweety, I\'ll marry you very soon.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },

    // new msg 
    // sender - Robiul
    // receiver - Bob
    {
        id: 2013,
        senderId: 1000,
        receiverId: 1003,
        content: 'Hi Bob!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2014,
        senderId: 1003,
        receiverId: 1000,
        content: 'Hi Robiul!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2015,
        senderId: 1000,
        receiverId: 1003,
        content: 'What\'sup!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
     {
        id: 2016,
        senderId: 1003,
        receiverId: 1000,
        content: 'Good!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },

    // new msg 
    // sender - Robiul
    // receiver - Charlie
    {
        id: 2017,
        senderId: 1000,
        receiverId: 1004,
        content: 'Hi Charlie!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2018,
        senderId: 1004,
        receiverId: 1000,
        content: 'Hi Robiul!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2019,
        senderId: 1000,
        receiverId: 1004,
        content: 'What\'sup!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
     {
        id: 2020,
        senderId: 1004,
        receiverId: 1000,
        content: 'Good!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    // new msg 
    // sender - Robiul
    // receiver - David
    {
        id: 2021,
        senderId: 1000,
        receiverId: 1005,
        content: 'Hi David! How is your life going?',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2022,
        senderId: 1005,
        receiverId: 1000,
        content: 'Hi Robiul! Not very bad.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2023,
        senderId: 1005,
        receiverId: 1000,
        content: 'How is yours?.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2024,
        senderId: 1000,
        receiverId: 1005,
        content: 'It\'s good.',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2025,
        senderId: 1000,
        receiverId: 1005,
        content: 'Life is a beautiful place. So it is good',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
     {
        id: 2026,
        senderId: 1005,
        receiverId: 1000,
        content: 'Good!',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
]

// export { users, messages }