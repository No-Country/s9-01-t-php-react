import Layout from "../components/Layout/Layout";

const Profile = () => {
  return (
    <Layout>
      <section className="mt-4 mb-[81px] w-full h-[606px] flex">
        <div className="w-[538px] h-[full] bg-[#E6E6E6] flex flex-col items-center justify-between pt-[13px] pb-[55px]">
          <h4 className="font-normal text-2xl left-6">Mi plan</h4>
          <button className="w-[288px] h-[42px] bg-[#7F807F] text-white font-semibold text-base leading-6 rounded-[10px]">
            Modificar plan
          </button>
        </div>
        <div className="flex-1 flex flex-col w-full h-full gap-[30px]">
          <h3 className="text-center font-normal text-2xl leading-6">Hola! Nombre</h3>
          <p className="font-normal text-2xl leading-6 pl-[88px]">Correo electronico:</p>
          <p className="font-normal text-2xl leading-6 underline pl-[88px]">
            Recuperar mi contraseña
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
