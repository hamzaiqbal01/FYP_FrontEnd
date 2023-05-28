import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import blogcss from "./Blogs.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blogs(props) {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/blog/GetBlog"
      );
      const responseData = response.data.data; // Access the response data
      setBlogs(responseData); // Update the blogs state with the response data
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  // Calculate the indexes of the blogs to display for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container">
        <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
          <div className="main-blog-body">
            <h2 className="fw-bold blog-heading">Blogs On wheat</h2>
            <hr className="line mb-5" />

            {currentBlogs.map((blog) => (
              <div className="container" key={blog._id}>
                <div className="row col-md-12">
                  <div className="blogs-section mb-5 col-md-12">
                    <div className="text-section d-flex flex-column">
                      <h5>{blog.Blog_Name}</h5>
                      <p
                        className="col-md-11 py-2"
                        style={{ textIndent: "0px" }}
                      >
                        {truncateText(blog.Blog_detail, 300)}
                      </p>
                      <Link to={`/Blog/${blog._id}`}>
                        <button className="Blog_readmore_btn">Read More</button>
                      </Link>
                    </div>
                    <div className="img-section">
                      <img
                        src={"data:image/png;base64," + blog.Blog_Img}
                        alt="Blog Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="pagination">
              {Array.from({
                length: Math.ceil(blogs.length / blogsPerPage),
              }).map((_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
