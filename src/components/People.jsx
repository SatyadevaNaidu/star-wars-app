import React from "react";

import { Card, Grid } from "semantic-ui-react";
import "../styles/style.css";

export default function People({ people }) {
  return (
    <>
      <Grid columns={3}>
        {people.map((link) => {
          const splitArray = link.url.split("/");
          const id = splitArray[splitArray.length - 2];
          return (
            <Grid.Column key={id}>
              <Card className="card-details">
                <Card.Content className="card-content">
                  <Card.Header className="card-content-header">
                    {link.name}
                  </Card.Header>
                  <Card.Description className="card-content-description">
                    <h5 className="card-content-description">
                      Height: <span className="card-values">{link.height}</span>
                    </h5>
                    <h5 className="card-content-description">
                      {" "}
                      Mass: <span className="card-values">{link.mass}</span>
                    </h5>
                  </Card.Description>
                </Card.Content>
                <a className="button" href={`/people/${id}`}>
                  View More
                </a>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
