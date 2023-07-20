const Faq = () => {
  return (
    <section className="w-full">
      <h1 className="pl-[83px] font-normal text-2xl leading-6 my-[50px]">Frecuentes preguntas</h1>
      <div className="w-full h-[225px] flex justify-center gap-[97px] mb-[50px]">
        <div className="w-[263px] h-full bg-[#D9D9D9] rounded-[20px] flex items-center">
          <p className="font-normal text-2xl leading-6 text-center">
            Sobre los planes y medios de pago
          </p>
        </div>
        <div className="w-[263px] h-full bg-[#D9D9D9] rounded-[20px] flex items-center justify-center">
          <p className="font-normal text-2xl leading-6 text-center">Sobre la cuenta</p>
        </div>
        <div className="w-[263px] h-full bg-[#D9D9D9] rounded-[20px] flex items-center justify-center">
          <p className="font-normal text-2xl leading-6 text-center">Soporte y contacto</p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
