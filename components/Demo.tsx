import React from 'react';
import axios from 'axios';

import Layout from './Layout';
import Content from './Content';
import UploadFileForm from './UploadFileForm';
import FileTable from './FileTable';

interface IFile {
  name: string;
  size: number;
  uri: string;
  hash: string;
}

interface IState {
  fileList: IFile[];
}
export default class Demo extends React.Component<{}, IState> {
  state:IState = {
    fileList: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.post(`${process.env.GRAPHQL_URI}`, {
        operationName:null,
        variables:{},
        query: '{files {    name    size    uri   hash  }}',
      });
      this.setState({
        fileList: response.data.data.files,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Layout bgColor="#222633" color="#90cfbe">
        <Content>
          <section>
            <UploadFileForm />
            <FileTable fileList={this.state.fileList} />
          </section>
          <style jsx>{`
            section {
              width: 100%;
              min-height: 500px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}</style>
        </Content>
      </Layout>
    );
  }
}
