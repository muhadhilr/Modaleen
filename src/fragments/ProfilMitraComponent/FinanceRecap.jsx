import React, { useState } from "react";
import CardTotal from "../../elements/CardTotal";
import { IDRCurrency } from "../../utils/Currency";
import CardProfit from "../../elements/CardProfit";
import CardNeeds from "../../elements/CardNeeds";

const FinanceRecap = () => {
  const [pendanaan, setPendanaan] = useState(16000000);
  const [keuntungan, setKeuntungan] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-h2 font-bold mb-5">Rekap Keuangan</h1>
      <div className="w-2/4 bg-brown-bg p-8 px-12 rounded-3xl">
        <div>
          <CardTotal description="total modal terkumpul">{pendanaan}</CardTotal>
          <div className="flex justify-center text-orange font-semiBold my-4 text-h4">
            <p>sisa kebutuhan dana</p>
            <p className="mx-1">:</p>
            <h1 className="text-[#000000]">
              {IDRCurrency({ nominal: keuntungan })}
            </h1>
          </div>
        </div>
        <div className="border border-orange rounded-3xl p-10 py-5">
          <CardNeeds profit={keuntungan} date={"2022-03-01"} bank={"BCA"} rekening={"1234567890"}>
            Mie Ayam Celaket
          </CardNeeds>
        </div>
      </div>
    </div>
  );
};

export default FinanceRecap;