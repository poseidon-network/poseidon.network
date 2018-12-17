import React from 'react';

interface IFile {
  name: string;
  size: number;
  uri: string;
  hash: string;
}

interface IProps {
  fileList: IFile[];
}
const FileTable = ({ fileList }: IProps) => ((
  <table>
    <thead>
      <tr>
        <th className="th-name"><div>Name</div></th>
        <th className="th-size"><div>Size</div></th>
        <th className="th-hash"><div>Hash</div></th>
      </tr>
    </thead>
    <tbody>
      {
        fileList.map(({ name, size, hash, uri }) => (
          <tr>
            <td><div>{ name }</div></td><td><div>{ size }</div></td><td><a target="_blank" href={uri}>{ hash }</a></td>
          </tr>
        ))
      }
    </tbody>
    <style jsx>{`
      table {
        margin-top: 20px;
        width: 90%;
        max-width: 600px;
        font-size: 14px;
        border: 1px solid;
        border-radius: 5px;
        padding: 10px;
        table-layout: fixed;
      }

      thead tr{
        display: flex;
      }

      .th-name {
        width: 80px;
      }

      .th-size {
        width: 80px;
      }

      .th-hash {
        flex: 1;
      }

      tbody {
        display: block;
        overflow: auto;
        height: 200px;
      }

      th {
        border-bottom: 1px solid;
        color: #fff;
        padding-bottom: 7px;
      }

      td {
        word-break: break-word;
        padding: 5px;
        min-width: 80px;
      }

      @media only screen and (min-width: 600px) {
        td {
          word-break: break-word;
          padding: 16px;
          min-width: 120px;
        }

        .th-name {
          width: 120px;
        }

        .th-size {
          width: 120px;
        }
      }
    `}</style>
  </table>
));

export default FileTable;
