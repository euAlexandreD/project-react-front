import Trash from "../../assets/trash.svg";
import DefaultButton from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import {
  Avatar,
  Container,
  Content,
  DivInformations,
  Title,
  TrashIcon,
  User,
} from "./styles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function getDeleteUser(id) {
    await api.delete(`/users/${id}`);

    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  const navigate = useNavigate();

  return (
    <Container>
      <TopBackground />
      <Title>Users</Title>
      <User>
        {users.map((user) => (
          <Content key={user.id}>
            <Avatar
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <DivInformations>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </DivInformations>
            <TrashIcon src={Trash} onClick={() => getDeleteUser(user.id)} />
          </Content>
        ))}
      </User>

      <DefaultButton onClick={() => navigate("/")}>
        Retornar ao inicio
      </DefaultButton>
    </Container>
  );
}

export default Users;
