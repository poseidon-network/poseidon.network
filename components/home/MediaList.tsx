import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import { mediaList } from '../../data';

const MediaList = () => (
  <Section bgColor={styles.darkLight} color="#fff" padding="120px 0 158px">
    <H2 center margin="0 0 58px">
      Media List
    </H2>
    <Content
      direction="row"
      style="display: grid; grid-template-columns: auto auto auto auto; grid-gap: 60px 101px; justify-items: center; justify-content: center;"
      mStyle="grid-template-columns: auto auto auto; grid-gap: 70px 5px;"
      sStyle="grid-template-columns: 100%;"
    >
      {mediaList.map(({ imgUri, uri }, index) => (
        <a key={index.toString()} target="_open" href={uri}>
          <img className="logo" src={imgUri} />
        </a>
      ))}
      <style jsx>{`
        .logo {
          height: 50px;
          margin: 0 23.5px;
          transition: transform 0.3s linear;
        }

        .logo:hover {
          transform: scale(0.95, 0.95);
        }
      `}</style>
    </Content>
  </Section>
);

export default MediaList;
