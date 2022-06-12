import React, { useEffect } from "react";
import Prism from "prismjs";

import { useRouter } from "next/router";
import Layout from "components/layout";

import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

import classes from "styles/pages/blogpost.module.scss";
import Link from "next/link";
const BlogPost = () => {
  const router = useRouter();
  const { title = "" } = router.query;

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Layout
      title={`${title} | Coding Blog`}
      description={"will be pulled from BE api"}
    >
      <div className={classes.blog_post}>
        <div className={classes.blog_post__top__section}>
          <h1>{title}</h1>
          <div className={classes.blog_post__top__media}>
            <span>5/1/2020</span>
            <Link href="/blog/tags/javascript">
              <span className={classes.blog_post__top__tag_btn}>
                javascript
              </span>
            </Link>
            <Link href="/blog/tags/css">
              <span className={classes.blog_post__top__tag_btn}>css</span>
            </Link>
          </div>
        </div>

        <div className={classes.blog_post__body__content}>
          <p>Blog post content will go here!</p>
          <h2>h2 Section Heading</h2>
          <h3>h3 Section Heading</h3>
          <h4>h4 Section Heading</h4>
          <h5>h5 Section Heading</h5>
          <p>A short paragraph with a link to </p>

          <p>
            An example of a longer paragraph that will be used in your blog
            posts when you create your own website or blog. And add as much
            additional content here as you want. An example of a longer
            paragraph that will be used in your blog posts when you create your
            own website or blog. Also an example of a{" "}
          </p>

          <p>
            An example of a longer paragraph that will be used in your blog
            posts when you create your own website or blog. And add as much
            additional content here as you want. An example of a longer
            paragraph that will be used in your blog posts when you create your
            own website or blog. Also an example of a{" "}
          </p>

          <p>Ordered List:</p>
          <ol>
            <li>A sentence goes here.</li>
            <li>
              A short code snippet: <code>code snippet</code>
            </li>
            <li>A link inside a unordered list bullet </li>
          </ol>
          <p>Unordered List:</p>
          <ul>
            <li>A sentence goes here.</li>
            <li>
              A short code snippet: <code>code snippet</code>
            </li>
            <li>A link inside a unordered list bullet </li>
          </ul>
          <div className={classes.blog_post__body__code__snippet}>
            <nav className={classes.blog_post__body__code__snippet__header}>
              <span>example.html</span>
            </nav>
            <pre className="line-numbers language-html">
              <code className="html language-html">
                {`
                    <div>
                        <p>Html code example</p>
                    </div>
                `}
              </code>
            </pre>
          </div>
          <div className={classes.blog_post__body__code__snippet}>
            <nav className={classes.blog_post__body__code__snippet__header}>
              <span>example.js</span>
            </nav>
            <pre className="line-numbers language-js">
              <code className="js language-js">
                {`
          // Set your secret key: remember to switch to your live secret key in production
          // See your keys here: https://dashboard.stripe.com/account/apikeys

          const stripe = require('stripe')('sk_test_hZIksNuZZMXLLFn8q5LtPDAm00Y6r5kUg7')

          (async () => {
            const paymentIntent = await stripe.paymentIntents.create({
              amount: 1099,
              currency: 'usd',
            })
          })()
        `}
              </code>
            </pre>
          </div>
          <div className={classes.blog_post__body__code__snippet}>
            <nav className={classes.blog_post__body__code__snippet__header}>
              <span>Terminal</span>
            </nav>
            <pre className="language-bash">
              <code className="bash language-bash">
                {`
          npm install react
        `}
              </code>
            </pre>
          </div>
          <img src="https://assets.coderrocketfuel.com/css-article-image.png" />
          <blockquote>
            Warning or special message that you want to stand out should be
            placed in this blockquote element.
          </blockquote>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
