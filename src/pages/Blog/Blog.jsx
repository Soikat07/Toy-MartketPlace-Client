import React from 'react';
import useTitle from '../../hooks/useTItle';

const Blog = () => {
  useTitle('Blog');

  return (
    <div className="bg-slate-200 max-w-screen-xl mx-auto p-4 mb-10">
        <h1 className="text-center text-2xl lg:text-4xl m-6">*This is blog page*</h1>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Here are some Questions & Answers :
        </h3>
        <h4 className="font-semibold">
          Q-1: What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h4>
        <p>
          <span className="font-bold">Ans: </span>
          An access token is a credential that is used to access protected
          resources or perform authorized actions on behalf of a user.When a
          client application wants to access a protected resource, it includes
          the access token in the request to prove its authorization. <br />A
          refresh token is a credential that is used to obtain a new access
          token when the current one expires.When an access token expires, the
          client can send the refresh token to the server to obtain a new access
          token without requiring the user to reauthenticate. <br />
          We can store the tokens in client side in multiple ways. But the most
          secure two ways are: <br />
          *Cookies: We can store tokens in HTTP-only cookies. <br />
          *Local Storage: We can store tokens in the browser's local storage.
        </p>
        <h4 className="font-semibold mt-3">
          Q-2: Compare SQL and NoSQL databases?
        </h4>
        <p>
          <span className="font-bold">Ans: </span>
          SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
          different types of database management systems with distinct
          characteristics.SQL databases are best for structured and complex data
          with strict consistency requirements, while NoSQL databases excel at
          handling large volumes of unstructured or semi-structured data with
          flexible schemas, high scalability, and performance.
        </p>
        <h4 className="font-semibold mt-3">
          Q-3: What is express js? What is Nest JS?
        </h4>
        <p>
          <span className="font-bold">Ans: </span>
          Express.js is a popular and lightweight web application framework for
          Node.js. It provides a set of features and utilities to build web
          applications and APIs. Express.js simplifies the process of handling
          HTTP requests, routing, middleware management, and response
          generation. Express.js has a large ecosystem with numerous middleware
          and plugins available, making it highly extensible and suitable for
          building a variety of web applications. <br /> On the other hand,
          Nest.js is a progressive Node.js framework for building efficient,
          scalable, and maintainable server-side applications. Nest.js focuses
          on modularity, dependency injection, and an opinionated architectural
          pattern to enhance code organization, reusability, and testability. It
          also integrates well with other libraries and frameworks.
        </p>
        <h4 className="font-semibold mt-3">
          Q-4: What is MongoDB aggregate and how does it work?
        </h4>
        <p>
          <span className="font-bold">Ans: </span>
          In MongoDB, the aggregate is a powerful aggregation framework that
          allows us to perform advanced data processing and analysis on
          collections of documents. It provides a flexible and efficient way to
          perform computations, transformations, and aggregations within the
          database. <br />
          The aggregate operation in MongoDB works by processing a sequence of
          stages on a collection of documents to perform complex data
          transformations, aggregations, and computations. Here's some steps
          overview of how it works: <br /> <br />
          Data Input: The aggregate operation takes input from a MongoDB
          collection, which serves as the starting point for the data
          processing. <br />
          <br />
          Pipeline Stages: The aggregate operation accepts an array of pipeline
          stages. Each stage represents a specific operation or transformation
          to be applied to the data. The stages are processed sequentially, with
          the output of one stage becoming the input for the next stage. <br />
          <br />
          Efficiency and Optimization: MongoDB's aggregation framework is
          designed for efficiency and optimization. It utilizes indexes,
          in-memory sorting, and other techniques to improve performance when
          executing complex aggregations on large datasets.
        </p>
      </div>
    </div>
  );
};

export default Blog;