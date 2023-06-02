import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import blogcss from "./Blogs.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Blog_Detail = () => {
  const params = useParams();
  const [blogDetail, setBlogDetail] = useState([]);

  useEffect(() => {
    fetchBlogDetail();
  }, []);

  const fetchBlogDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/blog/GetBlog/${params.id}`
      );
      const responseData = response.data.data;
      setBlogDetail(responseData);
    } catch (error) {
      console.error("Error fetching blog detail:", error);
    }
  };
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
          <div className="main-blog-body d-flex">
            <div className="text-section d-flex flex-column">
              <h2 className="fw-bold blog-heading  mt-2 mb-4">
                {blogDetail.Blog_Name}
              </h2>
              <p>
                <img
                  src={"data:image/png;base64," + blogDetail.Blog_Img}
                  className="float-end ms-4 "
                />
                {blogDetail.Blog_detail}
              </p>
            </div>
          </div>
        </div>
      </div>
      {console.log(blogDetail)}
    </div>
  );
};

export default Blog_Detail;
