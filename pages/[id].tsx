import type { NextPage, GetServerSideProps } from "next";

interface pageProps {
  id: string;
}

const IDHome: NextPage<pageProps> = ({ id }) => {
  return (
    <div>
      <h1>Hello model site! {id}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!ctx.params?.id) {
    return {
      props: {},
    };
  }
  return {
    props: {
      id: ctx.params.id,
    },
  };
};

export default IDHome;
