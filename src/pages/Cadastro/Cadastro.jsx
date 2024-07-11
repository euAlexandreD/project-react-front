import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Container,
  ContainerTitle,
  DivButtons,
  DivForms,
  FormEmail,
  InputLabel,
  Title,
} from "./styles";

import DefaultButton from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Cadastro() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputAge = useRef();

  const navigate = useNavigate();

  const registerNewUser = async () => {
    const data = await api.post("/users", {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
    });

    console.log(data);
  };

  return (
    <>
      <Container>
        <TopBackground />

        <ContainerTitle>
          <Title>Cadastro de Usuarios</Title>
        </ContainerTitle>

        <DivForms action="">
          <InputLabel>
            <label>
              Nome<span>*</span>
            </label>
            <input type="text" placeholder="Nome do Usuario" ref={inputName} />
          </InputLabel>

          <InputLabel>
            <label>
              Idade<span>*</span>
            </label>
            <input
              type="number"
              placeholder="Idade do Usuario"
              ref={inputAge}
            />
          </InputLabel>
        </DivForms>

        <FormEmail action="">
          <InputLabel>
            <label>
              E-mail<span>*</span>
            </label>
            <input
              type="email"
              placeholder="E-mail do Usuario"
              ref={inputEmail}
            />
          </InputLabel>
        </FormEmail>

        <DivButtons>
          <DefaultButton theme="primary" onClick={registerNewUser}>
            Cadastrar Usuarios
          </DefaultButton>
          <DefaultButton onClick={() => navigate("usuarios")}>
            Ver Usuarios
          </DefaultButton>
        </DivButtons>
      </Container>
    </>
  );
}

export default Cadastro;
