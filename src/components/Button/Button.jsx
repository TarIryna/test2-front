import React from 'react';
import {Main} from "./Button.styled";

export default function Button ({type, onClick, title}) {
  return(
    <Main type={type} onClick={onClick}>{title}</Main>
  )
}
