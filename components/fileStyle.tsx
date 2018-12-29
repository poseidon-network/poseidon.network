import css from 'styled-jsx/css';

const style = css`
.container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.header {
  display: flex;
  padding: 12px 20px 12px 30px;
  width: 100%;
}

.col1-title, .col2-title {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  color: #fff;
}

.col1-title {
  margin-right: 80px;
}

.table {
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #d7f2ee;
  display: flex;
  flex-direction: column;
  padding: 14px 0 0 0;
  overflow: auto;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
}

.row {
  display: flex;
  flex-direction: row;
  height: 69px;
  min-height: 69px;
  padding: 12px 20px 12px 30px;
}

.file-icon {
  min-width: 15px;
  width: 30px;
  height: 30px;
  margin-right: 15px;
}

.file-info {
  flex: 1;
}

.file-name {
  width: 100px;
  height: 19px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: -0.1px;
  color: #222633;
  margin-bottom: 8px;
}

.hash {
  word-break: break-word;
  min-width: 170px;
  width: 170px;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  color: #222633;
}

.file-desc {
  font-family: Montserrat;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  color: #222633;
  margin-top: 2px;
}

.loading-action, .action {
  width: 28px;
  height: 28px;
  margin-left: 23px;
}

.action {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 28px;
  position: relative;
}

.bs-circle {
  min-width: 3px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #000;
}


@media only screen and (min-width: 600px) {
  .container {
    width: initial;
  }

  .table {
    width: 728px;
    height: 600px;
    margin-bottom: 0;
  }

  .col1-title {
    margin-right: 379px;
  }

  .row {
    display: flex;
    flex-direction: row;
    height: 69px;
    min-height: 69px;
    padding: 16px 29px 16px 32px;
  }

  .circle, .ld-circle {
    min-width: 33px;
    width: 33px;
    height: 33px;
    margin-right: 30px;
  }

  .file-name {
    width: 100%;
    font-size: 15px;
  }

  .line {
    width: calc(100% - 95px);
    height: 1px;
    min-height: 1px;
    opacity: 0.08;
    background-color: #222633;
    align-self: flex-end;
    margin-right: 29px;
  }

  .row {
    overflow: auto;
  }

  .action {
    position: initial;
  }
}
`;

export default style;
