import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import save_icon from "../assets/icons/saved.svg";
import useToast from "../hooks/useToast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { getRequest } from "../services/httpRequest";
import SelectorComponent from "../components/SelectorComponent/SelectorComponent";

export const MyCertificate = () => {
  const { toastSuccess } = useToast();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const completePath = window.location.href;

  const [certificateData, setCertificateData] = useState({
    career_type: "",
    certificateContent: "",
    authority1: "",
    authority2: "",
    imgLogo: "",
    templateSelected: {
      urlImg: ""
    },
    studentSelected: {
      name: "Dario",
      lastname: "Elguero"
    }
  });

  useEffect(() => {
    getCertificateData();
  }, []);

  const copyText = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(completePath);
    } else {
      document.execCommand("copy", true, completePath);
    }
    toastSuccess(`Copiado al portapapeles`);
  };

  const exportToPDF = () => {
    const element = document.getElementById("certificate");

    html2canvas(element, { scale: 3, useCORS: true, allowTaint: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const pdfWidth = 297;
      const pdfHeight = 210;

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [pdfWidth, pdfHeight]
      });

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(
        `${certificateData.studentSelected.name}-${certificateData.studentSelected.lastname}-certificate-${id}.pdf`
      );
    });
  };

  const exportToImage = () => {
    const element = document.getElementById("certificate");

    html2canvas(element, { scale: 3, useCORS: true, allowTaint: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${certificateData.studentSelected.name}-${certificateData.studentSelected.lastname}-certificate-${id}.jpg`;
      link.click();
    });
  };

  const getCertificateData = async () => {
    setLoading(true);
    try {
      const dataCertificate = await getRequest(`/api/v1/certificates/${id}`);
      if (dataCertificate.status === "success") {
        const { certificate } = dataCertificate.data;
        setCertificateData({
          institution: certificate.certificate_data.institution,
          certificateTitle: certificate.certificate_data.certificateTitle,
          emission_date: certificate.certificate_data.emission_date,
          career_type: certificate.certificate_data.career_type,
          certificateContent: certificate.certificate_data.certificateContent,
          authorities: certificate.certificate_data.authorities,
          authority1: certificate.certificate_data.authorities[0]?.autorityName,
          authority2: certificate.certificate_data.authorities[1]?.autorityName,
          imgLogo: certificate.logo.urlImg,
          templateSelected: certificate.template,
          studentSelected: certificate?.student
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" flex flex-col min-w-[370px] min-h-[70vh] w-full max-w-[1280px] mx-auto px-4 mb-4">
      <p className="text-end my-5">Fecha de emisión: {certificateData?.emission_date}</p>
      <div className="  flex flex-col-reverse lg:items-start items-center lg:flex-row gap-4">
        <div className="flex flex-col gap-8 justify-between w-full lg:w-2/5 mb-4">
          <div className="flex md:flex-col items-center md:items-start md:justify-start  font-semibold">
            <span className="mb-0 md:mb-3 mr-2 md:mr-0">Certificado emitido por: </span>
            <span className="md:w-full text-center text-xl text-primary">
              {certificateData.institution}
            </span>
          </div>
          <div className="flex md:flex-col items-center md:items-start md:justify-start font-semibold">
            <p className="mb-0 md:mb-3 mr-2 md:mr-0">Destinatario:</p>
            <p className="md:w-full text-center text-primary">{`${certificateData.studentSelected.name} ${certificateData.studentSelected.lastname}`}</p>
          </div>
          <div className=" flex justify-between rounded-md border-2 py-3 px-6">
            <p>{completePath}</p>
            <button type="button" onClick={copyText}>
              <img width="26px" src={save_icon} alt="save-icon" />
            </button>
          </div>
          <div className=" flex flex-col gap-3 text-black">
            <button
              className=" p-3 bg-secondary rounded-lg font-bold shadow-lg hover:shadow-red-300 "
              onClick={exportToPDF}
            >
              Descargar en PDF
            </button>
            <button
              className=" p-3 bg-secondary rounded-lg font-bold shadow-lg hover:shadow-red-300 "
              onClick={exportToImage}
            >
              Descargar en JPGE
            </button>
          </div>
        </div>
        <div id="certificate" className="w-full lg:w-3/5 shadow-xl">
          {loading ? (
            <div className="flex w-full h-[12.5rem] justify-center items-center gap-4">
              <div className="border-2 border-red-200 border-t-ligthblue rounded-full w-8 h-8 animate-spin"></div>
              <span>Cargando Certificado...</span>
            </div>
          ) : (
            <SelectorComponent
              certificate={certificateData}
              templateSelected={certificateData.templateSelected}
              imgLogo={certificateData.imgLogo}
            />
          )}
        </div>
      </div>
    </section>
  );
};
