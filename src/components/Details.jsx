import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import Description from "./Description";
import "../styles/style.css";

export default function DetailView({ people }) {

  const { id } = useParams();
  const { push } = useHistory();

  /* Get details of specific character */
  const selectedPerson = people.find((person) => {
    const splitArray = person.url.split("/");
    const matchid = splitArray[splitArray.length - 2];
    return matchid === id;
  });
  const { eye_color, gender, hair_color, skin_color } = selectedPerson;

  /* Returns contents of the character */
  return (
      <section className="page-center">
        <h1 className="people-heading">
          Lets see more about  <span className='character-name'>  {selectedPerson.name}</span>
        </h1>

        <div>
          <div className="page-content">
            <article>
              <Description label="Eye color:" text={eye_color} />
              <Description label="Gender:" text={gender} />
              <Description label="Hair color:" text={hair_color} />
              <Description label="Skin color:" text={skin_color} />
            </article>
          </div>
          <div className="button_margin">
            <button
              className="back-button"
              type="button"
              onClick={() => push("/")}
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
  
  );
}
