import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import "./tinderClass.css";
import Axios from "./axios";

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {

        async function fetchData(){

            // using axios to get the fetch of the url from the api
            const request = await Axios.get('tinder/cards');
            setPeople(request.data);
        }

        fetchData();
    }, [])

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

                    <div 
                    style={{backgroundImage: `url(${person.imgUrl})`}}
                    className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards