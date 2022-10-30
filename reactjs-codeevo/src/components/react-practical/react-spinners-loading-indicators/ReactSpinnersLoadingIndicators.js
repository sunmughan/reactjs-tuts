import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const loaderCss = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const ReactSpinnersLoadingIndicators = () => {
  return (
    <>
      <BounceLoader css={loaderCss} loading size={12} color={"blue"} />
      <BarLoader css={loaderCss} loading size={24} color={"purple"} />
      <BeatLoader css={loaderCss} loading size={48} color={"cyan"} />
    </>
  );
};

export default ReactSpinnersLoadingIndicators;
