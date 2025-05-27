import { RxAvatar } from "react-icons/rx"

const ProfilePicture = ({ profilePicture, big }: { profilePicture: string, big?: boolean }) => {
    return (
        profilePicture ?
            <img src={profilePicture}
                className={`block rounded-full ${big ? 'w-32 h-32' : 'w-11 h-11'}`} /> : (
                <RxAvatar size={big ? 130 : 42} title="No profile picture"
                    className={`rounded-full text-slate-400  flex items-center justify-center${big ? 'w-32 h-32' : 'w-11 h-11'}`} />
            )

    )
}

export default ProfilePicture