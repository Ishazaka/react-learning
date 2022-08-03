
import React from "react";
import { UserContext } from "./Contexthook";
import { EmailContext } from "./Contexthook";

const ComponentC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <EmailContext.Consumer>
              {(email) => {
                return (
                  <div>
                    hello how ae you {user} your email is {email}
                  </div>
                );
              }}
            </EmailContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentC;
