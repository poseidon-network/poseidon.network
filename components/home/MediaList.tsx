import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import { mediaList } from '../../data';

const MediaList = () => ((
  <Section bgColor={styles.darkLight} color="#fff" padding="120px 0 158px">
    <H2 center margin="0 0 58px">Media List</H2>
    <Content
      direction="row"
      style="display: grid; grid-template-columns: auto auto auto auto auto; grid-gap: 40px 23.5px; justify-items: center;"
      mStyle="grid-template-columns: auto auto auto; grid-gap: 40px 8.5px;"
      sStyle="grid-template-columns: 100%;"
    >
      {
        mediaList.map(({ imgUri }, index) => (
          <img key={index.toString()} className="logo" src={imgUri} />
        ))
      }
      <style jsx>{`
        .logo {
          height: 50px;
          margin: 0 23.5px;
        }
      `}</style>
    </Content>
  </Section>
));

export default MediaList;
