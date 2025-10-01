import React from "react"
import fotodummy from '../assets/foto-kasual/sevalino.png'

function KataKlien() {
    return (
        <section className="w-full px-30 py-25 justify-start items-center font-jakarta space-y-25">
            <div>
                <h2 className='text-5xl font-bold'>
                    Apa yang klien kami
                    <span className='ml-2 italic font-medium text-primary'>
                    Katakan
                    </span>
                </h2>
            </div>

            <div className="flex justify-center gap-8">
                <KataCard 
                    word={"Kami sebelumnya bingung mau mulai dari mana. Setelah bekerja sama dengan Teh Developer, website toko online kami jadi lebih cepat, cantik, dan mudah diakses. Penjualan naik 40% dalam 2 bulan!"}
                    photo={fotodummy}
                    name={"Sevalino"}
                    about={'Penganngguran kelas atas'}
                />
                <KataCard 
                    word={"Kami sebelumnya bingung mau mulai dari mana. Setelah bekerja sama dengan Teh Developer, website toko online kami jadi lebih cepat, cantik, dan mudah diakses. Penjualan naik 40% dalam 2 bulan!"}
                    photo={fotodummy}
                    name={"Sevalino"}
                    about={'Penganngguran kelas atas'}
                />
            </div>
        </section>
    )
}

function KataCard({word, photo, name, about}) {
    return (
        <div className="w-full max-w-lg space-y-16 bg-gray-200 p-6 rounded-xl shadow-2xl ">
            <div className="text-2xl">
                <h1>{word}</h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-full max-w-[3rem] aspect-square rounded-full overflow-hidden">
                    <img src={photo} 
                         alt=""
                         className="w-full h-full object-cover" />
                </div>

                <div>
                    <div className="text-xl font-bold">
                        <h1>{name}</h1>
                    </div>
                    <div className="font-medium">
                        <h2>{about}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KataKlien