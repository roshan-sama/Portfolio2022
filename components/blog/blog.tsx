import { Card, Center, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import purify from "dompurify/dist/purify";
import { parse } from "marked";

const Blog: React.FC<{ id?: string }> = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const markDownElementId = "mark-down-root-element";

  useEffect(() => {
    if (loading) {
      getMarkDown();
    }
  }, [loading]);

  const getMarkDown = async () => {
    const md = await fetch("posts/test.md");
    const markdownHtml = parse(await md.text());
    const sanitizedHtml = purify.sanitize(markdownHtml);
    // DO NOT ALTER THE HTML AFTER THE SANITIZATION STEP ABOVE
    // unless you know what you're doing
    // 🚨 VVV This next line is usually dangerous. 🚨
    document.getElementById(markDownElementId).innerHTML = sanitizedHtml;
    setLoading(false);
  };

  return (
    <Card
      style={{
        width: 400,
        position: "relative",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <Center>
        {loading && <Loader />}
        <div id={markDownElementId}></div>
      </Center>
    </Card>
  );
};

export default Blog;
