

export default function ProjectPortofolio() {
    return (
         <section className="w-full h-[100vh] pt-12 font-jakarta">
                {/* Upper */}
                <div className="flex items-center px-20 justify-between">
                    <div className="text-4xl">
                        <h1>Project <span className="text-primary italic font-semibold">Terakhir Kami</span></h1>
                    </div>

                    <div className="flex gap-2">
                            {team.map((person) => (
                                <img
                                key={person.id}
                                src={person.menuPhoto}
                                alt={person.name}
                                onClick={() => setSelected(person)}
                                className={`w-12 h-12 object-cover rounded-sm cursor-pointer border-2 ${
                                        selected.id === person.id
                                        ? "border-primary"
                                        : "border-black"
                                    }`}
                                />
                            ))}
                        </div>
                </div>

                {/* Content */}
                <div className="w-full flex justify-center items-center">
                    {/* Upper Project */}
                    <div className="bg-black rounded-lg p-4 w-[50%] flex gap-6">
                        {/* Gambar */}
                        <div className="w-fit">
                            <img 
                                src={selected.project[0].picture} 
                                alt=""
                                className="rounded-lg w-70 object-cover"
                            />
                        </div>

                        {/* Desc */}
                        <div>
                            {/* Label */}
                            <div className="flex h-fit gap-2">
                                <div className="text-white bg-primary px-4 py-2 rounded-full">
                                    <h1>Fullstack</h1>
                                </div>
                                <div className="text-white bg-primary px-4 py-2 rounded-full">
                                    <h1>Laravel</h1>
                                </div>
                                <div className="text-white bg-primary px-4 py-2 rounded-full">
                                    <h1>Solo Project</h1>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="text-white">
                                <h1>TwiiAhh</h1>
                                <h1>Social Media Website</h1>
                            </div>

                            <div className="text-white w-full max-w-md">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fugit pariatur quasi soluta architecto veritatis placeat fuga harum sit doloremque!</p>
                            </div>

                            <div className="text-white">
                                <a href="">Test</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}