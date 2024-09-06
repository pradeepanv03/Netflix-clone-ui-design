import React from "react";
import "./Style/CoverStyle.scss";

export function Cover() {
  // function open() {
  //     console.log("heello")
  // }
  return (
    <main>
      <section className="layer">
        <header>
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <aside>
            <button className="btn">English</button>
            <button className="btn1">Sign In</button>
          </aside>
        </header>

        <article className="center">
          <div className="card">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>

            <div className="membership">
              <input type="text" placeholder="Email Address" />
              <button>Get Started</button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
