import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import ToastStore from "../store/toast_store";
import t from "../hooks/useTranslation";
import Button from "../components/utilities/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "../components/utilities/Modal";
import { useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false)

  return (
    <Layout>
      <div className="w-[500px] h-[500px] bg-red-700">
        <h1>{t("hi")}</h1>
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
    </Layout>
  );
};

export default Home;
