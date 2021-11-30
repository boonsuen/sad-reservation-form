import Head from 'next/head';
import {
  Button,
  Space,
  Typography,
  Input,
  Divider,
  Select,
  Checkbox,
  DatePicker,
} from 'antd';
import styled from 'styled-components';
import {
  CalendarOutlined,
  SearchOutlined,
  UserOutlined,
  SecurityScanOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const ReserveBookTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0px;
  text-align: left;
  align-self: flex-start;
  background-color: #FFE0E0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: translateY(10px);
  z-index: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 18px;
  display: inline-block;
  width: 200px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fef1ef;
  padding-bottom: 50px;
  z-index: 1;

  .logo {
    width: 270px;
    margin: 20px auto 20px auto;
  }
  .verificationContainer {
    display: flex;
    align-items: center;
    gap: 10px;
    .ant-input-prefix {
      margin-right: 10px;
    }
  }
`;

const Content = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 13px 37px 84px 0px rgba(50, 55, 72, 0.1);
  z-index: 100;
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
  grid-template-columns: 370px 1fr 1fr;
  gap: 32px;

  .ant-input-prefix {
    margin-right: 10px;
  }
`;

const ListView = styled.div`
  border: 1px solid #b8bcca;
  border-radius: 10px;
  margin-top: 42px;
  .list-item {
    display: flex;
    padding: 20px 0;
    margin: 0 40px;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #b8bcca;
    }
    .text {
      width: 100%;
      max-width: 500px;
    }
    .book-title {
      color: #303441;
      margin: 0 0 2px 0;
    }
    .author {
      color: #6f7482;
      font-size: 14px;
      margin: 0;
    }
    .year {
      margin: auto;
    }
    img {
      width: 80px;
      aspect-ratio: 61 / 74;
    }
  }
`;

const BookSection = styled.section`
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 55px;

  .details {
    border-bottom: 1px solid rgb(220 220 221);
    &--item {
      display: grid;
      grid-template-columns: 200px 1fr;
      color: #6f7482;
      margin-bottom: 10px;
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Revervation Form - SAD Library</title>
      </Head>      
      <Main>
        <img className="logo" alt="SAD Library" src="/img/logo.svg" />
        <div className="container">
        <ReserveBookTitle>Reserve Book</ReserveBookTitle></div>        
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
          <Divider
            style={{
              margin: '42px 0',
            }}
          />
          <Title level={4}>Select Book</Title>
          <SelectBookInputs>
            <div>
              <Label>Search by Book Title</Label>
              <Input
                size="large"
                placeholder="Enter book title"
                style={{ fontSize: 16 }}
                prefix={<SearchOutlined />}
              />
            </div>
            <div>
              <Label>Filter by Category</Label>
              <Select
                showSearch
                placeholder="Select a category"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                style={{ width: '100%' }}
                size="large"
              >
                <Option value="computer-science">Computer Science</Option>
                <Option value="encyclopedia">Encyclopedia</Option>
                <Option value="horror">Horror</Option>
              </Select>
            </div>
            <div>
              <Label>Filter by Author</Label>
              <Select
                showSearch
                placeholder="Select a author"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                style={{ width: '100%' }}
                size="large"
              >
                <Option value="alison-chong">Alison Chong</Option>
                <Option value="alan-turing">Alan Turing</Option>
                <Option value="andrew-garfield">Andrew Garfield</Option>
              </Select>
            </div>
          </SelectBookInputs>
          <ListView>
            <div className="list-item">
              <Checkbox
                style={{
                  marginRight: 30,
                }}
              />
              <div className="text">
                <p className="book-title">The C++ Programming Language</p>
                <p className="author">by Alan Turing</p>
              </div>
              <div className="year">2008</div>
              <img src="/img/book-1.png" />
            </div>
            <div className="list-item">
              <Checkbox
                style={{
                  marginRight: 30,
                }}
                defaultChecked
              />
              <div className="text">
                <p className="book-title">C Programming in Easy Steps</p>
                <p className="author">by Alan Turing</p>
              </div>
              <div className="year">2009</div>
              <img src="/img/book-2.png" />
            </div>
            <div className="list-item">
              <Checkbox
                style={{
                  marginRight: 30,
                }}
                defaultChecked
              />
              <div className="text">
                <p className="book-title">
                  Programming: Principles and Practise using Scratch
                </p>
                <p className="author">by Alan Turing</p>
              </div>
              <div className="year">2011</div>
              <img src="/img/book-3.png" />
            </div>
          </ListView>
          <Divider
            style={{
              margin: '42px 0',
            }}
          />
          <BookSection>
            <div className="book-details">
              <Title
                level={5}
                style={{
                  paddingBottom: 10,
                  borderBottom: '1px solid rgb(220 220 221)',
                }}
              >
                Book 1 Details
              </Title>
              <div className="details">
                <div className="details--item">
                  <div>Title</div>
                  <div>C Programming in Easy Steps</div>
                </div>
                <div className="details--item">
                  <div>Author</div>
                  <div>Alan Turing</div>
                </div>
                <div className="details--item">
                  <div>Book Copy ID</div>
                  <div>CS9483</div>
                </div>
                <div className="details--item">
                  <div>Expected Available Date</div>
                  <div>18/11/2021</div>
                </div>
              </div>
            </div>
            <div className="pickup-date-container">
              <div>
                <Label>
                  Preferred Pickup Date <span className="required">*</span>
                </Label>
                <DatePicker
                  defaultValue={moment('18/11/2021', 'DD/MM/YYYY')}
                  format={'DD/MM/YYYY'}
                  size="large"
                  style={{
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </BookSection>
          <Divider
            style={{
              margin: '42px 0',
            }}
          />
          <BookSection>
            <div className="book-details">
              <Title
                level={5}
                style={{
                  paddingBottom: 10,
                  borderBottom: '1px solid rgb(220 220 221)',
                }}
              >
                Book 2 Details
              </Title>
              <div className="details">
                <div className="details--item">
                  <div>Title</div>
                  <div>Programming: Principles and Practise using Scratch</div>
                </div>
                <div className="details--item">
                  <div>Author</div>
                  <div>Alan Turing</div>
                </div>
                <div className="details--item">
                  <div>Book Copy ID</div>
                  <div>CS4785</div>
                </div>
                <div className="details--item">
                  <div>Expected Available Date</div>
                  <div>19/11/2021</div>
                </div>
              </div>
            </div>
            <div className="pickup-date-container">
              <div>
                <Label>
                  Preferred Pickup Date <span className="required">*</span>
                </Label>
                <DatePicker
                  defaultValue={moment('19/11/2021', 'DD/MM/YYYY')}
                  format={'DD/MM/YYYY'}
                  size="large"
                  style={{
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </BookSection>
          <Divider
            style={{
              margin: '42px 0',
            }}
          />
          <div>
            <Label>
              Verification code <span className="required">*</span>
            </Label>
            <div className="verificationContainer">
              <Input
                size="large"
                placeholder="e.g. 123456"
                style={{ width: '230px', fontSize: 16 }}
                prefix={<SecurityScanOutlined />}
                required
              />
              <Button type="primary" size="large">
                Get Code
              </Button>
              <Button type="primary" size="large" disabled>
                Verify
              </Button>
            </div>
          </div>
          <Divider
            style={{
              margin: '42px 0',
            }}
          />
          <Button
            type="primary"
            size="large"
            style={{
              float: 'right',
            }}
          >
            Reserve
          </Button>
        </Content>
      </Main>
    </>
  );
};

export default HomePage;
