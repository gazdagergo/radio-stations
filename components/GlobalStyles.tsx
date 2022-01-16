import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #21212A;
    --border-radius: 20px;
    font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  }

  .row {
    --bs-gutter-x: 0.0rem;
  }

  .card {
    border-color: #222;
  }
`;
