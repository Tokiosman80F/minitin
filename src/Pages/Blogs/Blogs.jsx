const Blogs = () => {
  const blogContent = [
    {
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "Access token is a credential used to access protected resources, typically issued by an authentication server. Refresh token is used to obtain a new access token without requiring the user to reauthenticate. They should be securely stored on the client-side, such as in an HTTP-only cookie or a secure storage mechanism.",
    },
    {
      question: "Compare SQL and NoSQL databases?",
      answer:
        "SQL databases are structured, relational databases that use structured query language for defining and manipulating the data. NoSQL databases are non-relational databases that provide flexibility and scalability, often used for handling large amounts of unstructured or semi-structured data.",
    },
    {
      question: "What is express js? What is Nest JS?",
      answer:
        "Express.js is a minimal and flexible web application framework for Node.js, used for building web applications and APIs. Nest.js is a progressive TypeScript framework for building efficient and scalable server-side applications, built on top of Express.js.",
    },
    {
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "MongoDB's aggregate is a method for performing advanced data aggregation operations in MongoDB. It allows you to process and transform data using a pipeline of stages, such as filtering, grouping, sorting, and applying various operators, to retrieve the desired results from the database.",
    },
  ];
  return (
    <div>
      <div className="relative">
        <div className="absoulte bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px]  z-[-1]">
          <div className="max-width-container text-white">
            <h3 className="stoke "> My Blog </h3>
            <ul>
              <li>
                Read the blog every day this will help u gain knowledge.First u
                have to learn then u earn{" "}
              </li>
              <li>
                This blog is powered by{" "}
                <span className="font-semibold text-yellow-400">
                  Toki Osman Nahian 😀
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
      <div className="max-width-container">
        {
            blogContent.map((blog,index)=><div key={index} className=" bg-gray-200 p-5 my-4">
                <p className="text-2xl font-semibold">Q-{index+1}: {blog.question} </p>
                <p>{blog.answer}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Blogs;
