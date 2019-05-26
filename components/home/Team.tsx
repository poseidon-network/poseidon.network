import { useState, useCallback, useEffect } from 'react';
import Section from '../Section';
import H2 from '../H2';
import Person from './Person';
import Content from '../Content';
import { styles } from '../../constants';
import { team } from '../../data';

const defaultCurrentAvatarIndex = 3;
let myReq: any;

const Team = () => {
  const [currentRestAvatar, setCurrentResetAvtar] = useState<string>(
    team[defaultCurrentAvatarIndex].avatar,
  );
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState<number>(
    defaultCurrentAvatarIndex,
  );
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isAnimate) {
      myReq = setInterval(animate, 500);
    }
    return () => {
      if (myReq) {
        clearInterval(myReq);
      }
    };
  }, [isAnimate, currentAvatarIndex]);

  const animate = () => {
    if (currentAvatarIndex < team.length) {
      setCurrentResetAvtar(team[currentAvatarIndex].avatar);
      setCurrentAvatarIndex(currentAvatarIndex + 1);
    } else {
      setCurrentResetAvtar(team[defaultCurrentAvatarIndex].avatar);
      setCurrentAvatarIndex(defaultCurrentAvatarIndex);
    }
  };

  const onMouseOut = useCallback(() => {
    if (myReq) {
      clearInterval(myReq);
      myReq = null;
    }
    setIsAnimate(false);
  }, [myReq]);

  return (
    <Section bgColor={styles.dark} color="#222633">
      <Content>
        <H2 center id="team" margin="120px 0 100px" size="32px">
          A Strong Team Determined On Things Happen
        </H2>
        <div className="members">
          {team.slice(0, 3).map(({ name, title, avatar }) => (
            <Person key={name} name={name} title={title} avatar={avatar} />
          ))}
          <a
            onMouseOver={() => setIsAnimate(true)}
            onMouseOut={onMouseOut}
            href="/company"
          >
            <Person
              name="Rest of team members →"
              title=""
              avatar={currentRestAvatar}
            />
          </a>
        </div>
        <style jsx>{`
          .members {
            width: 100%;
            display: grid;
            grid-template-columns: auto auto auto auto;
            justify-content: space-around;
            grid-gap: 0 30px;
          }

          @media only screen and (max-width: 768px) {
            .members {
              grid-template-columns: 160px 160px;
              grid-gap: 60px 0;
            }
          }

          @media only screen and (max-width: 554px) {
            .members {
              grid-template-columns: 141px 141px;
              grid-gap: 10px 34px;
            }
          }
        `}</style>
      </Content>
    </Section>
  );
};

export default Team;
