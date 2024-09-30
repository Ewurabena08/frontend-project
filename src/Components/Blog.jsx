import React from "react";
import './blog.css';

const BlogForm = () => {
  return (
    <div style={{ backgroundColor: "rgb(249, 202, 228)" }}>
      <header>
      </header>

      <main>
        <section className="blog">
          <div className="container">
            <h1>Submit a Blog Post</h1>
            <div className="blog-content">
              <form action="/submit-post" method="POST" encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="title">Blog Post Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter blog post title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Published Date:</label>
                  <input type="date" id="date" name="date" required />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Blog Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Enter a brief description or excerpt"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="content">Blog Content:</label>
                  <textarea
                    id="content"
                    name="content"
                    rows="10"
                    placeholder="Write your blog post here"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category:</label>
                  <select id="category" name="category" required>
                    <option value="">Select a category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="tags">Tags:</label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    placeholder="Enter tags, separated by commas"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Upload an Image:</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Post
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
      </footer>
    </div>
  );
};

export default BlogForm;
