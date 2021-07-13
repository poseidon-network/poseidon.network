import React from 'react';
import axios from 'axios';

import Section from '../Section';
import Content from '../Content';
import UploadFileForm from './UploadFileForm';
import FileTable from './FileTable';

interface IFile {
  id: string;
  name: string;
  size: number;
  hash: string;
}

interface IState {
  fileList: IFile[];
  isLoading: boolean;
  hasError: boolean;
  percentCompleted?: number;
  hash?: string;
}
export default class Demo extends React.Component<{}, IState> {
  state: IState = {
    fileList: [],
    hash: undefined,
    isLoading: true,
    hasError: false,
  };

  async componentDidMount() {
    await this.getFileList();
  }

  getFileList = async () => {
    try {
      const response = await axios.post(`${process.env.GRAPHQL_URI}`, {
        operationName: null,
        variables: {},
        query:
          '{files(filter: {take: 9, orderBy: "file.createdAt"}) {  id    name    size    hash  }}',
      });
      this.setState({
        fileList: response.data.data.files,
      });
    } catch (error) {
      console.log(error);
    }
    this.setState({
      isLoading: false,
    });
  };

  onDrop = async (files: File[]) => {
    if (this.state.isLoading) {
      return;
    }
    const formData = new FormData();
    formData.append(
      'operations',
      '{"operationName":null,"variables":{"file":null},"query":"mutation ($file: Upload!) {  file: uploadPublicFile(file: $file) {    uri    __typename  }}"}',
    );
    formData.append('map', '{ "0": ["variables.file"] }');
    formData.append('0', files[0]);
    await this.uploadToIpfs(formData);
    await this.getFileList();
  };

  uploadToIpfs = async (formData: FormData) => {
    this.setState({
      isLoading: true,
      percentCompleted: 0,
      hasError: false,
    });
    try {
      await axios({
        method: 'post',
        url: `${process.env.GRAPHQL_URI}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent: any) => {
          const percentCompleted = Math.floor(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          this.setState({
            percentCompleted: percentCompleted >= 95 ? 95 : percentCompleted,
          });
        },
      });
      this.setState({
        isLoading: false,
        percentCompleted: 100,
      });
    } catch (err) {
      console.error(err);
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  };

  render() {
    return (
      <Section bgColor="#222633" color="#90cfbe">
        <Content>
          <section>
            <UploadFileForm
              onDrop={this.onDrop}
              percentCompleted={this.state.percentCompleted}
              isLoading={this.state.isLoading}
            />
            <FileTable
              isLoading={this.state.isLoading}
              fileList={this.state.fileList}
            />
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
      </Section>
    );
  }
}
