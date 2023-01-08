import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/../public/images/profile.png" width={200} height={200} alt="profile" />
      <h1>Welcome</h1>
    </Layout>
  );
}
