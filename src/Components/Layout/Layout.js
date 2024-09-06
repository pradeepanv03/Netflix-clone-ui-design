import React from "react";
import { Cover } from "../Cover/Cover";
import { Ads } from "../Ads/Ads";
import { QA } from "../Question&Answer/QA";
import { Footer } from "../Footer/Footer";

export function Layout() {
  return (
    <>
      <Cover />
      <Ads />
      <QA />
      <Footer />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31227.541636468442!2d79.8149115!3d11.94382085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1657706079325!5m2!1sen!2sin"
        width="100%"
        height="600px"
      /> */}
    </>
  );
}
