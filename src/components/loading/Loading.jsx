import React from 'react';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 25px auto;
  border-color: red;
`;

export default function Loading(props) {
    return (
        <div className="sweet-loading">
            <PuffLoader
              css={override}
              size={50}
              color={"#00c6ff"}
              loading={props.loading}
            />
        </div>
    )
}


