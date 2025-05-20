const NoMessages = ({ selectedUser }: { selectedUser: string }) => {
    return (
        <div className="w-full h-full  flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-xl">No messages yet!</h2>
                <span className="text-slate-400 mt-2 block">Send Hi to {selectedUser}  </span>
            </div>

        </div>
    )
}

export default NoMessages