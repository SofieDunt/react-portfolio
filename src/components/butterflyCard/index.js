import React, { useState } from 'react';
import { BUTTERFLIES } from '../../content';
import Project from '../project';
import './butterflyCard.css';

/*
props:
- title: string
- description: { text: string, custom: JSX Element }
- date: string
- badges: DefaultBadges[]
*/
function ButterflyCard(props) {
  const { title, description, date, badges } = props;
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <Project
      title={title}
      titleBody={
        <>
          <p className={'small-text'}>Supported modifications include:</p>
          <div className={'flex-section'}>
            {BUTTERFLIES.map((butterfly, index) => {
              return (
                <button
                  key={butterfly.name}
                  className={'code-button'}
                  onClick={() => setActivePhoto(index)}
                >
                  {butterfly.name}
                </button>
              );
            })}
          </div>
          <p className={'small-text'}>...and more!</p>
        </>
      }
      description={description}
      date={date}
      image={BUTTERFLIES[activePhoto].img}
      badges={badges}
    />
  );
}

export default ButterflyCard;
