import React from "react";
import Layout from "../components/layout";

import classes from "styles/pages/contact.module.scss";
const Contact = () => {
  return (
    <Layout
      title="Contact"
      description="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
    >
      <div className={classes.contact}>
        <div className={classes.contact__intro}>
          <h1>Contact</h1>
          <p>
            Hi, I'm Kaung Khant Thar, a frontend developer from Myanmar. I love
            sharing my knowledge and experience from my job.
          </p>
          <p>
            If you have any comments, ideas, critiques, or you just want to say
            hi, don’t hesitate to send me an email at
            kaungkhantthar77@gmail.com!
          </p>
        </div>

        <div className={classes.contact__socials}>
          <h2>Arount the wrold</h2>
          <ul>
            <li>
              <strong>Email</strong>: kaungkhantthar77@gmail.com
            </li>
            <li>
              <strong>GitHub</strong>:{" "}
              <a href="https://github.com/KaungKhantThar7777" target="_blank">
                https://github.com/KaungKhantThar7777
              </a>
            </li>
            <li>
              <strong>LinkedIn</strong>:{" "}
              <a
                href="https://www.linkedin.com/in/kaung-khant-thar-b978ab1a1/"
                target="_blank"
              >
                https://www.linkedin.com/in/kaung-khant-thar-b978ab1a1/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
