import { Link } from "react-router-dom";

const LayoutAccount = ({ children }) => {
  return (
    <section className="px-[80px] my-[80px] w-full flex">
      <div className="h-full">
        <div className="w-[357px] h-[503px] bg-[#E6E6E6] rounded-[30px] pt-[47px] pl-[57px]">
          <div className="flex flex-col justify-between items-start gap-6">
            <Link to="/account">
              <p className="font-semibold text-sm leading-6">Mi cuenta</p>
            </Link>
            <Link to="/currentplan">
              <p className="font-semibold text-sm leading-6">Plan actual</p>
            </Link>
            <Link to="/paymenthistory">
              <p className="font-semibold text-sm leading-6">Historial de pagos</p>
            </Link>
            <Link to="/support">
              <p className="font-semibold text-sm leading-6">Soporte</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default LayoutAccount;
