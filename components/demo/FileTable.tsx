import React from 'react';
import FileContentLoading from './FileContentLoading';
import fileStyle from './fileStyle';
import FileRow from './FileRow';

interface IFile {
  id: string;
  name: string;
  size: number;
  hash: string;
}

interface IState {
  activeItemHash?: string;
}

interface IProps {
  fileList: IFile[];
  isLoading: boolean;
}
class FileTable extends React.Component<IProps, IState> {
  state = {
    activeItemHash: undefined,
  };

  componentDidMount() {
    document.body.addEventListener(
      'click',
      ({ target }: any) => {
        if (target.tagName !== 'IMG') {
          this.setState({
            activeItemHash: undefined,
          });
        }
      },
      false,
    );
  }

  handleClickAction = (activeItemHash: string) => {
    this.setState({
      activeItemHash,
    });
  };

  getFileImage = (name: string) => {
    const ext = name.split('.').pop() || '';
    if (['jpg', 'png', 'gif', 'svg'].includes(ext)) {
      return '/static/ic-img@2x.png';
    }
    if (['mp4', 'mov', 'wmv', 'avi', 'mpeg'].includes(ext)) {
      return '/static/ic-mov@2x.png';
    }
    return '/static/ic-placholder@2x.png';
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="col1-title">Recent file</div>
          <div className="col2-title">Hash</div>
        </div>
        <div className="table">
          {this.props.isLoading && <FileContentLoading />}
          {this.props.fileList.map(({ id, name, size, hash }, index) => (
            <FileRow
              key={`${hash}${index}`}
              name={name}
              size={size}
              hash={hash}
              uri={`${window.location.protocol}//${
                window.location.host
              }/preview?q=${id}`}
              fileID={`${hash}${index}`}
              activeItemHash={this.state.activeItemHash}
              getFileImage={this.getFileImage}
              handleClickAction={this.handleClickAction}
            />
          ))}
        </div>
        <style jsx>{fileStyle}</style>
      </div>
    );
  }
}

export default FileTable;
