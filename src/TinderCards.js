import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./tinderClass.css";

function TinderCards() {

    const [people, setPeople] = useState([
        {name: 'Elon Musk', url: ""},
        {name: 'Luis Martínez', url: ""},
        {name: 'Reyna Sorto', url: ""},
        {name: 'Jheferson Pavón', url: ""},
    ]);

    // this one indicates when we swipe and don't want to see the person anymore
    const swiped = (direction, nameToDelete) => {
        console.log(`removing: ${nameToDelete}`);
    }

    const onOutFrame = (nameToDelete) => {
        console.log(`${nameToDelete} left the screen`);
    }

  return (
    <div className='tinderClass'>
        <div className="tinderCard_container">
            {people.map((person) => (
                <TinderCard
                
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => onOutFrame(person.name)}
                >

                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards
