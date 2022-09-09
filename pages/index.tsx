import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import ToastStore from "../store/toast_store";
import t from "../hooks/useTranslation";
import Button from "../components/utilities/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "../components/utilities/Modal";
import { useState } from "react";
import Search, { IBaseSelect } from "../components/utilities/Search"
import UpChevron from "../public/vectors/up_chevron.svg"
import Select from "../components/utilities/Select";


const Home: NextPage = () => {
  const dummyData = [
    { id: 1, name: 'Wade Cooper', age: 21 },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
  ]
  const router = useRouter();
  const [modal, setModal] = useState(false)

  const test = (e: IBaseSelect) => {
    console.log(e);
  }

  return (
    <Layout>
      <div className="w-[500px] h-[500px] bg-red-700">
        <h1>{t("əlave et")}</h1>
        <Button onClick={() => ToastStore.errorToast("Errorrr blyaaa!!")}>
          Test Store
        </Button>
        <Link href={router.asPath} locale="az" passHref={true}>
          AZ
        </Link>
        <Link href={router.asPath} locale="ru" passHref={true}>
          RU
        </Link>
      </div>
      <Modal visible={modal} setVisible={setModal}>
        <h1>Qunduz</h1>
        <p>kldjklasd</p>
      </Modal>
      <button onClick={() => setModal(true)}>Open Modal</button>
      {/* <Search data={dummyData} placeholder="Qunduz" onChange={(e) => test(e)} /> */}
      <UpChevron className="w-20 h-20 text-red-500" />
      <Select data={dummyData} defaultTitle="Marka" onChange={(e) => test(e)} />
    </Layout>
  );
};

export default Home;
