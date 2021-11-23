import axios from "axios";

export async function markdownToHTML(markdown) {
  // Setup credentials
  const writeAsHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = {
    raw_body: markdown,
  };

  // Get the html from markdown
  const res = await axios.post(
    `https://write.as/api/markdown`,
    data,
    writeAsHeaders
  );
  return res.data.data.body;
}

export async function getAllPosts() {
  // Setup credentials
  const writeAsHeaders = {
    headers: {
      Authorization: `Token ${process.env.WRITE_AS_KEY}`,
      "Content-Type": "application/json",
    },
  };

  // Collect posts
  const posts = await axios.get(
    `https://write.as/api/me/posts`,
    writeAsHeaders
  );
  return posts.data.data.reverse();
}

export async function getPost(id) {
  const post = await axios.get(`https://write.as/api/posts/${id}`);
  return post.data.data;
}

export function parseDate(dateString) {
  const d = new Date(dateString).toDateString();
  return d.substr(d.indexOf(" ") + 1);
}
