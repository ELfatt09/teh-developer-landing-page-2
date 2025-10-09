import React, { useRef } from "react"
import emailjs from "emailjs-com"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionWrapper from "../partials/SectionWrapper";

const sosmed = [
  {
    logo: <FaInstagram className="text-4xl" />,
    app: "Instagram",
    account: "@official.tehdeveloper",
    description: "Follow kami untuk lihat karya terbaru dan tips digital"
  },
  {
    logo: <FaLinkedin className="text-4xl" />,
    app: "Linkedin",
    account: "Teh Developer",
    description: "Gabung dengan kami di LinkedIn untuk jaringan profesional dan kolaborasi"
  },
  {
    logo: <FaWhatsapp className="text-4xl" />,
    app: "Whatsapp",
    account: "+62 0812-3456-7890",
    description: "Chat langsung dengan tim kami responsif & cepat!"
  },
  {
    logo: <MdEmail className="text-4xl" />,
    app: "Email",
    account: "tehdev@gmail.com",
    description: "Hubungi kami via email untuk kerjasama dan pertanyaan"
  },
];

function Kontak() {
     const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_palbk0r",
    "template_sn3nznb",
    form.current,
    "tiyxxcayHjzrNEh8L"
  ).then(
    (result) => {
      console.log("Success:", result.text);
      toast.success("Pesan berhasil dikirim!");
      form.current.reset();
    },
    (error) => {
      console.log("Error:", error.text);
      toast.error("Gagal mengirim pesan.");
    }
  );
};

    return (
        <SectionWrapper>
<div className="w-full justify-end">
                <h1 className="text-primary text-5xl italic">
                    Kontak <span className="text-black not-italic font-semibold">Kami</span>
                </h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sosmed.map((item, index) => (
                <KontakCard 
                    key={index}
                    logo={item.logo}
                    app={item.app}
                    account={item.account}
                    description={item.description}
                />
                ))}
            </div>
            <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full max-w-4xl grid grid-cols-3">
                <div className="col-span-3 space-y-8">
                    <div className="space-y-2">
                        <div className="text-4xl font-bold">
                            <h1>
                                Kirim Pesan Kepada Kami
                            </h1>
                        </div>
                        <div className="text-xl text-gray-500">
                            <p>Isi formulir di bawah untuk menghubungi tim kami.</p>
                        </div>
                    </div>

                    <form action=""
                          ref={form}
                          onSubmit={sendEmail}
                          className="space-y-4"
                          >
                        
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="font-semibold block mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                                <input
                                type="text"
                                name="name"
                                id="name"                                
                                className="w-full p-3 border rounded"
                                required
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="font-semibold block mb-2">Nama Perusahaan</label>
                                 <input
                                type="text"
                                name="company"
                                id="company"
                                className="w-full p-3 border rounded"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="font-semibold block mb-2">Email  <span className="text-red-500">*</span></label>
                            <input
                            type="email"
                            name="from"
                            id="email"
                            className="w-full p-3 border rounded"
                            required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="font-semibold block mb-2">Pesan  <span className="text-red-500">*</span></label>
                            <textarea
                            name="message"
                            id="message"
                            className="w-full p-3 border rounded resize-none"
                            rows="5"
                            required
                        />
                        </div>

                        <button
                            type="submit"
                            className="bg-black flex items-center gap-2 uppercase rounded-full border border-black hover:bg-transparent hover:text-black transition text-white px-6 py-3"
                        >
                            Kirim Pesan <CgArrowTopRight />
                        </button>
                    </form>
                </div>
            </div>

    <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false} 
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover
      />
            </div>
            

        </SectionWrapper>
    )
}

function KontakCard({logo, app, account, description}) {
    return (
        <div className="p-6 flex flex-col justify-center items-center space-y-4 bg-white shadow-xl rounded-xl">
            <div className="bg-primary p-4 rounded-full text-white">
                {logo}
            </div>
            <div className="flex flex-col justify-center items-center space-y-1">
                <div className="font-bold text-xl">
                    <h1>{app}</h1>
                </div>
                <div className="font-medium">
                    <h2>{account}</h2>
                </div>
                <div className="text-center text-gray-500">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Kontak