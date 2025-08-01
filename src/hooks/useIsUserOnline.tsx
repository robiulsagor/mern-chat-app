import { useSelector } from "react-redux"
import { getOnlineUsers } from "../redux/userStatusSlice"

export const useIsUserOnline = ({ userId }: { userId: string }) => {
    const onlineUsers = useSelector(getOnlineUsers)
    if (!userId) return false; // If userId is not provided, return false

    return onlineUsers.includes(userId)
}
