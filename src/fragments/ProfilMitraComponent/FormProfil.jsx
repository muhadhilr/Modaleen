import React from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const FormProfil = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-h2 font-bold">Profil Mitra</h1>
        <p className="text-p1 text-red">Harap Lengkapi Data Berikut</p>
      </div>
      <div className="mt-5">
        <div className="bg-brown-bg flex flex-col justify-center h-full p-10 rounded-3xl">
          <form action="">
            <div className="flex flex-col">
              <div className="flex w-full">
                <div className="w-full mr-5">
                  <Input placeholder={"Masukkan Nama Mitra"} type={"text"}>
                    Nama Usaha
                  </Input>
                  <Input
                    placeholder={"Masukkan Estimasi Tiap Bulan"}
                    type={"number"}
                  >
                    Estimasi Tiap Bulan
                  </Input>
                  <Input placeholder={"Masukkan Alamat"} type={"text"}>
                    Alamat UMKM
                  </Input>
                </div>
                <div className="w-full">
                  <Input
                    placeholder={"Masukkan Nomor Rekening"}
                    type={"number"}
                  >
                    Nomor Rekening
                  </Input>
                  <Input placeholder={"Masukkan Jenis Bank"} type={"text"}>
                    Jenis Bank
                  </Input>
                  <Input placeholder={"Masukkan Email"} type={"email"}>
                    Email
                  </Input>
                </div>
              </div>
            </div>
            <div className="my-5">
              <Button type={"submit"} className="w-full text-center">Simpan Data</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormProfil;