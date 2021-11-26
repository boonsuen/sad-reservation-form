import Head from 'next/head';
import { Button, Space, Typography, Input, Divider } from 'antd';
import styled from 'styled-components';
import {
  CalendarOutlined,
  GithubOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fef1ef;

  .logo {
    width: 270px;
  }
`;

const Content = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 13px 37px 84px 0px rgba(50, 55, 72, 0.1);
`;

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const MemberBasicDataContainer = styled.div`
  .ant-input-prefix {
    margin-right: 10px;
  }
  .memberIdInputContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Label = styled.label`
  color: #6f7482;
  margin-bottom: 5px;
  display: block;
  .required {
    color: #ed0131;
  }
`;

const MemberInfoContainer = styled.div`
  table {
    text-align: left;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #f0f0f0;
    padding: 10px 20px;
  }
  th {
    max-width: 200px;
    font-weight: normal;
    background-color: #fafafa;
  }
`;

const SelectBookInputs = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr 1fr;
  gap: 30px;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Revervation Form - SAD Library</title>
      </Head>
      <Main>
        <img className="logo" alt="SAD Library" src="/img/logo.svg" />
        <Content className="container">
          <InfoSection>
            <MemberBasicDataContainer>
              <Space size={20} direction="vertical">
                <div>
                  <Label>Request Date &amp; Time</Label>
                  <Input
                    size="large"
                    style={{ width: '230px', fontSize: 16 }}
                    prefix={<CalendarOutlined />}
                    value={new Date().toDateString()}
                    disabled
                  />
                </div>
                <div>
                  <Label>
                    Member ID <span className="required">*</span>
                  </Label>
                  <div className="memberIdInputContainer">
                    <Input
                      size="large"
                      placeholder="e.g. 21GP1234"
                      style={{ width: '230px', fontSize: 16 }}
                      prefix={<UserOutlined />}
                    />
                    <Button type="primary" size="large">
                      Submit
                    </Button>
                  </div>
                </div>
              </Space>
            </MemberBasicDataContainer>
            <MemberInfoContainer>
              <Title level={4}>Your Infomation</Title>
              <table>
                <tr>
                  <th>Name</th>
                  <td>John ***</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>+601****1234</td>
                </tr>
                <tr>
                  <th>NRIC Number</th>
                  <td>******-**-1234</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>j***@gmail.com</td>
                </tr>
              </table>
            </MemberInfoContainer>
          </InfoSection>
          <Divider />
          <Title level={4}>Select Book</Title>
          <SelectBookInputs>
            <div>
              <Label>Search by Book Title</Label>
              <Input
                size="large"
                placeholder="e.g. 21GP1234"
                style={{ fontSize: 16 }}
                prefix={<SearchOutlined />}
              />
            </div>
            <div>
              <Label>Filter by Category</Label>
              <Input
                size="large"
                placeholder="e.g. 21GP1234"
                style={{ fontSize: 16 }}
                prefix={<SearchOutlined />}
              />
            </div>
            <div>
              <Label>Filter by Author</Label>
              <Input
                size="large"
                placeholder="e.g. 21GP1234"
                style={{ fontSize: 16 }}
                prefix={<SearchOutlined />}
              />
            </div>
          </SelectBookInputs>
          <Button type="primary" size="large">
            Reserve
          </Button>
        </Content>
        <Paragraph>Welcome back</Paragraph>
      </Main>
    </>
  );
};

export default HomePage;
