import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSendAllCertificate,
  postCertificate,
  setEmptyCertificate
} from "../features/certificateSlice";
import { getAllTemplates } from "../features/templateSlice";
import { getAllLogos, setEmptySelectedLogo } from "../features/logosSlice";
import MenuCertificate from "../components/Certificate/MenuCertificate/MenuCertificate";
import SelectorComponent from "../components/SelectorComponent/SelectorComponent";
import { getAllAuthorities, setEmptySelectedAuthorities } from "../features/authoritiesSlice";
import { useNavigate } from "react-router-dom";
import EmailSent from "../../public/img/bgNotificationSentEmail.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const certificate = useSelector(state => state.certificate);
  const templateSelected = useSelector(state => state.templates.templateSelected);
  const logoSelected = useSelector(state => state.logos.logoSelected);
  const authoritiesSelected = useSelector(state => state.authorities.authoritiesSelected);

  const dispatch = useDispatch();
  const [certifySalved, setCertifySalved] = useState(false);
  const [certificateData, setCertificateData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModalSendMail, setShowModalSendMail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTemplates());
    dispatch(getAllLogos());
    dispatch(getAllAuthorities());
  }, []);

  useEffect(() => {
    setCertificateData({ ...certificate, authorities: authoritiesSelected });
  }, [authoritiesSelected, certificate]);

  const openModal = () => {
    sendCertificate();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalEmail = () => {
    setShowModalSendMail(false);
    navigate("/home");
  };

  const handleSendNow = async () => {
    try {
      setLoadingEmail(true);
      const emailSent = await dispatch(getSendAllCertificate(certifySalved._id));
      if (emailSent) {
        closeModal();
        setShowModalSendMail(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleSendLater = () => {
    closeModal();
    navigate("/home");
  };

  const imgLogo = logoSelected.urlImg;

  const sendCertificate = async () => {
    setLoading(true);
    const saveCertificate = {
      emission_date: certificate.emission_date,
      institution: certificate.institution,
      id_template: templateSelected._id,
      career_type: certificate.career_type,
      certificateContent: certificate.certificateContent,
      certificateTitle: certificate.certificateTitle,
      authorities: authoritiesSelected.map(auth => auth._id),
      logos: [logoSelected._id],
      students: certificate.students
    };
    try {
      const certicateSalved = await dispatch(postCertificate(saveCertificate));
      setCertifySalved(certicateSalved.data.certificateData);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setEmptyCertificate());
      dispatch(setEmptySelectedLogo());
      dispatch(setEmptySelectedAuthorities());
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full flex-col-reverse lg:flex-row  flex h-full my-14 justify-center gap-8 ">
        <MenuCertificate />
        <div className="flex flex-col ">
          <div className="flex shadow-xl">
            <SelectorComponent
              certificate={certificateData}
              templateSelected={templateSelected}
              imgLogo={imgLogo}
            />
          </div>
          <div className="flex justify-center lg:justify-end ">
            <button
              className="w-[20.5rem] mt-4 p-2 font-bold bg-primary shadow-lg text-white rounded-lg hover:bg-blue-400 hover:text-black"
              onClick={openModal}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="border-2 border-white border-t-ligthblue rounded-full w-5 h-5 animate-spin"></div>
                </div>
              ) : (
                "Guardar Certificados"
              )}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <section className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700">
          <div className="flex flex-col gap-2 text-center bg-secondary rounded-lg p-8">
            <header className="text-white">
              <h2 className="text-2xl font-bold mb-1 text-green ">CERTIFICADOS GUARDADOS!!</h2>
              <h2 className="text-lg font-bold mb-4">¿Quiere enviar los certificados ahora?</h2>
            </header>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-end gap-2">
              <button
                onClick={handleSendNow}
                className="w-[14.375rem] rounded-lg bg-[#FAC87B] hover:bg-primary text-gray-800 font-bold py-2 px-4 shadow-buttonshadow"
              >
                {loadingEmail ? (
                  <div className="flex items-center justify-center">
                    <div className="border-2 border-white border-t-ligthblue rounded-full w-5 h-5 animate-spin"></div>
                  </div>
                ) : (
                  "Enviar ahora"
                )}
              </button>
              <button
                onClick={handleSendLater}
                className="w-[14.375rem] rounded-lg bg-[#FAC87B] hover:bg-gray-400 text-white font-bold py-2 px-4 shadow-buttonshadow"
              >
                Enviar más tarde
              </button>
            </div>
          </div>
        </section>
      )}
      {showModalSendMail && (
        <section className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700">
          <div className="relative">
            <img src={EmailSent} alt="emailSent" className="" />
            <AiOutlineCloseCircle
              size={30}
              color="white"
              className=" absolute top-2 right-2 cursor-pointer"
              onClick={closeModalEmail}
            />
            <div className="flex flex-col text-center rounded-lg absolute top-[30%] md:top-[45%] left-0 right-0">
              <h2 className="text-2xl text-white font-bold">Certificados enviados!!!</h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
