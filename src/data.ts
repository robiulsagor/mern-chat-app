import pic1 from './assets/pic-1.png'
import pic2 from './assets/pic-2.png'
import pic3 from './assets/pic-3.png'
import pic4 from './assets/pic-4.png'
import pic5 from './assets/pic-5.png'

export type ChatUserProps = {
    data: {
        id: number;
        name: string;
        email: string;
        picture: string;
    }
}

export const users: ChatUserProps['data'][] = [
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
        senderId: 1001,
        receiverId: 1002,
        content: 'Hello John, how are you?',
        timestamp: '2023-10-01T10:00:00Z',
        seen: true,
    },
    {
        id: 2002,
        senderId: 1002,
        receiverId: 1001,
        content: 'Hello Alice, I\'m fine. How about you?',
        timestamp: '2023-10-01T10:01:00Z',
        seen: false,
    },
]

// export { users, messages }