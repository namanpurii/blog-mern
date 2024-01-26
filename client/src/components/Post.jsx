import React from 'react'

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://media.wired.com/photos/6570fa9c24772bae860336a9/16:9/pass/bard-biz-gemini_mm_03.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Google’s Gemini Is the Real Start of the Generative AI Boom</h2>
        <p className="info">
          <a href="https://github.com/namanpurii" className="author">
            John Doe
          </a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          A new AI model from Google—called Gemini—is fresh competition for
          OpenAI’s ChatGPT. The AI rivals are now working on even more radical
          ideas.
        </p>
      </div>
    </div>
  );
}

export default Post
