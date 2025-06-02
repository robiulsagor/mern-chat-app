const NoChatSelected = () => {
    return (
        <div className="w-full h-full hidden md:flex items-center justify-center ">
            <div className="">
                <div className="flex flex-col items-center justify-center gap-4 mt-10">
                    <img src="./icon1.1.svg" alt="icon" className="w-20 h-20 text-white" />
                    <h1 className="text-2xl font-semibold text-white">Select a user to start messaging</h1>
                    <p className="text-slate-400">Your messages will appear here</p>
                    <p className="text-slate-400">Click on a chat to view messages</p>
                    <p className="text-slate-400">or start a new conversation</p>
                </div>
            </div>
        </div>
    )
}

export default NoChatSelected