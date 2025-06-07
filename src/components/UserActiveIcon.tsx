const UserActiveIcon = ({ isActive }) => {
    return (
        <span className={`block w-3 h-3 rounded-full ${isActive ? 'bg-green-700' : 'bg-red-700/60'}`}></span>
    )
}

export default UserActiveIcon