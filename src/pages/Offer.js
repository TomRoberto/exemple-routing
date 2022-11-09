import { useParams } from "react-router-dom";

const Offer = () => {
  //   const params = useParams();
  //   console.log(params.id);

  const { id } = useParams();
  console.log(id);
  return <div>Je suis sur la page Offer</div>;
};

export default Offer;
