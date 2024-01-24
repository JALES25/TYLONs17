

export default function LogOut() {



    return (
        <div className="grid place-items-center h-[80vh]">
            <div className="shadow-lg shadow-blue-500 p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
                <div>
                    Name: <span className="text-blue-500">Anonymous</span>
                </div>
                <div>
                    Email: <span className="text-blue-500">Anonymous@email.com</span>
                </div>
                <button className="bg-red-500 active:opacity-30">Log Out</button>
            </div>

        </div>
    )
}