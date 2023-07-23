import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSendAllCertificate, postCertificate } from "../features/certificateSlice";
import { getAllTemplates } from "../features/templateSlice";
import { getAllLogos } from "../features/logosSlice";
import MenuCertificate from "../components/Certificate/MenuCertificate/MenuCertificate";
import SelectorComponent from "../components/SelectorComponent/SelectorComponent";

const Dashboard = () => {
  const certificate = useSelector(state => state.certificate);
  const templateSelected = useSelector(state => state.templates.templateSelected);
  const logoSelected = useSelector(state => state.logos.logoSelected);

  const dispatch = useDispatch();
  const [certifySalved, setCertifySalved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllTemplates());
    dispatch(getAllLogos());
  }, []);

  const openModal = () => {
    sendCertificate();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSendNow = () => {
    dispatch(getSendAllCertificate(certifySalved.data._id));
    closeModal();
  };

  const handleSendLater = () => {
    closeModal();
  };

  const imgLogo = logoSelected.urlImg;

  const sendCertificate = async () => {
    setLoading(true);
    const saveCertificate = {
      institution: certificate.institution,
      id_template: templateSelected._id,
      career_type: certificate.career_type,
      certificateContent: certificate.certificateContent,
      authority1: certificate.authority1,
      authority2: certificate.authority2,
      id_logo: logoSelected._id,
      students: certificate.students
    };
    try {
      const certicateSalved = await dispatch(postCertificate(saveCertificate));
      setCertifySalved(certicateSalved);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full flex-col-reverse lg:flex-row  flex h-full my-14 justify-center gap-8 ">
        <MenuCertificate />
        <div className="flex flex-col ">
          <div className="flex shadow-xl">
            {/* {componentSelected()} */}
            <SelectorComponent
              certificate={certificate}
              templateSelected={templateSelected}
              imgLogo={imgLogo}
            />
          </div>
          <div className="flex justify-end ">
            <button
              className="w-[20.5rem] mt-4 p-2 font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:text-black"
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
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700">
          <div className="flex flex-col gap-2 text-center bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-1 text-green">CERTIFICADOS GUARDADOS!!</h2>
            <h2 className="text-lg font-bold mb-4">¿Quiere enviar los certificados ahora?</h2>
            <div className="flex justify-end">
              <button
                onClick={handleSendNow}
                className="w-[14.375rem] rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2"
              >
                Enviar ahora
              </button>
              <button
                onClick={handleSendLater}
                className="w-[14.375rem] rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
              >
                Enviar más tarde
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
