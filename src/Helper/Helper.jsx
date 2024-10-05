import { Helmet } from "react-helmet";

const Helmets = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/600px-2023_Facebook_icon.svg.png?20231011122028"
          type="image/x-icon"
        />
      </Helmet>
    </>
  );
};

export default Helmets;
