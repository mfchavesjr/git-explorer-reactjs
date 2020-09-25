import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/5477712?s=460&u=7088e1c7206e398d52f3eb42ae5e19bcfb7e723a&v=4"
            alt="Owner Repository" />
          <div>
            <strong>mfchavesjr/go-barber-backend</strong>
            <p>Descrição do Repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/5477712?s=460&u=7088e1c7206e398d52f3eb42ae5e19bcfb7e723a&v=4"
            alt="Owner Repository" />
          <div>
            <strong>mfchavesjr/go-barber-backend</strong>
            <p>Descrição do Repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/5477712?s=460&u=7088e1c7206e398d52f3eb42ae5e19bcfb7e723a&v=4"
            alt="Owner Repository" />
          <div>
            <strong>mfchavesjr/go-barber-backend</strong>
            <p>Descrição do Repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
