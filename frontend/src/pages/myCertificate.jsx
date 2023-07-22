import { useParams } from "react-router-dom";
import Certificate_14 from "../components/Certificate/Certificate_14";
import save_icon from "../assets/icons/saved.svg";

export const MyCertificate = () => {
  const data = {
    career_type: "Formación profesionl",
    certificateContent: "Certificamos la experiencia obtenida",
    authority1: "Juan Angel Muñoz",
    authority2: "Pedro Leiva",
    imgLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    templateSelected: {
      urlImg:
        "https://res.cloudinary.com/dtfjbprru/image/upload/v1689803349/bk2y3br7ugrpxucsfjeh.png"
    },
    studentSelected: {
      name: "Alejandro",
      lastname: "Wogelman"
    }
  };

  const { id } = useParams();
  const completePath = window.location.href;

  const copyText = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(completePath);
    } else {
      document.execCommand("copy", true, completePath);
    }
  };

  return (
    <section className=" flex flex-col min-w-[370px] min-h-[70vh] w-full max-w-[1280px] mx-auto px-4">
      <p className="text-end my-5">Fecha de emisión 12 de junio, 2023</p>
      <div className="  flex  flex-col-reverse lg:items-start items-center lg:flex-row gap-4">
        <div className="flex flex-col gap-8 justify-between w-full lg:w-2/5 mb-4">
          <div>
            <p className=" mb-3">Certificado emitido por</p>
            <p className=" text-center text-xl">Universidad de Buenos Aires</p>
          </div>
          <div className="my-3">
            <p>Destinatario:</p>
            <p className="text-center">Nicolás García</p>
          </div>
          <div className=" flex justify-between rounded-md border-2 py-3 px-6">
            <p>{completePath}</p>
            <button type="button" onClick={copyText}>
              <img width="26px" src={save_icon} alt="save-icon" />
            </button>
          </div>
          <div className=" flex flex-col gap-3 text-white">
            <button className=" p-3 bg-slate-500 rounded-lg font-bold">Descargar en PDF</button>
            <button className=" p-3 bg-slate-500 rounded-lg font-bold">Descargar en JPGE</button>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <Certificate_14 {...data} />
        </div>
      </div>
    </section>
  );
};
