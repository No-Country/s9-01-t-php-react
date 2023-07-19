import LayoutAccount from "../components/Layout/LayoutAccount";
import Layout from "../components/Layout/Layout";

const PaymentHistory = () => {
  return (
    <Layout>
      <LayoutAccount>
        <div className="flex flex-col w-full h-full">
          <h1 className="font-semibold text-2xl leading-6 pl-[56px]">Método de pago</h1>
          <div className="bg-[#D9D9D9] w-[712px] h-[105px] rounded-[20px] my-[54px] ml-[56px]"></div>
          <h1 className="font-semibold text-2xl leading-6 pl-[56px]">Historial de pagos</h1>
          <table className="w-[519px] ml-[80px] mt-[15px]">
            <thead>
              <tr>
                <th className="font-medium text-base leading-6">Tarjeta</th>
                <th className="font-medium text-base leading-6">Precio</th>
                <th className="font-medium text-base leading-6">Fecha de cobro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center font-medium text-base leading-6 text-gray-500">
                  xxx4585
                </td>
                <td className="text-center font-medium text-base leading-6 text-gray-500">
                  10.000 Ars
                </td>
                <td className="text-center font-medium text-base leading-6 text-gray-500">
                  12/04/2023
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </LayoutAccount>
    </Layout>
  );
};

export default PaymentHistory;
