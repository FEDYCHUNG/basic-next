import Layout from "../../components/Layout";

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props;

  console.log(dataUsers);

  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => (
        <>
          <p key={user.id}>{user.name}</p>
          <p key={user.email}>{user.email}</p>
        </>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}
