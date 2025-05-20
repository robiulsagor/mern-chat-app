import UserActiveIcon from "./UserActiveIcon"
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"

const ChatInfo = ({ selectedChat }) => {
    return (
        <div className="bg-slate-700/10 flex flex-col gap-4 overflow-scroll scrollbar-hide ">
            <div className=" flex flex-col items-center justify-center py-4 px-6 ">
                <div className="flex flex-col items-center gap-4 ">
                    <img src={selectedChat.picture} className="block w-32 h-32 rounded-full" />
                    <div className="flex items-center gap-2">
                        <UserActiveIcon />
                        <h2 className="text-2xl"> {selectedChat.name} </h2>
                    </div>

                    <p className="text-gray-200">
                        Hi, this is {selectedChat.name}. I am currently using this app to chat with my friends and family. I love the features and the user interface of this app. It is very user-friendly and easy to navigate. I hope you enjoy using it as much as I do!
                    </p>
                </div>

                <hr className="w-full h-0 border border-gray-700 mt-4" />

                <h2 className=" w-full text-xl mt-6 mb-3">Media</h2>
                <div className="h-full grid grid-cols-2 gap-2">
                    <img src={pic1} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic2} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic3} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic4} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic1} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic2} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic3} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic4} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic4} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic1} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic2} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic3} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                    <img src={pic4} alt="" className="w-32 rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer" />
                </div>
            </div>


        </div>
    )
}

export default ChatInfo