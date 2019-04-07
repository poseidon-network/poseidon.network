import { Fragment } from 'react';
import Section from './Section';
import Content from './Content';
import { intro } from '../data';

const Intro = () => ((
  <Section bgColor="#222633" color="#fff" padding="0 32px 40px">
    <Content>
      {
        intro.map(({ title, description }) => ((
          <Fragment key={title}>
            <p className="title">{ title }</p>
            <p className="description">{ description }</p>
          </Fragment>
        )))
      }

      <style jsx>{`
        .title {
          font-size: 20px;
          font-weight: bold;
          margin: 0 0 15px;
          line-height: 1.35;
          text-align: center;
          white-space: pre-line;
        }

        .description {
          font-size: 16px;
          color: #90cfbe;
          line-height: 1.31;
          margin-bottom: 40px;
          text-align: center;
          white-space: pre-line;
          max-width: 560px;
        }

        @media only screen and (min-width: 600px) {
          .description {
            line-height: 1.6em;
          }
        }
      `}</style>
    </Content>
  </Section>
));

export default Intro;
