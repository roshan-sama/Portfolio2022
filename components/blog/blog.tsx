import { Card, Center, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import purify from "dompurify/dist/purify";
import marked from "../../utils/custom-marked";

const Blog: React.FC<{ path: string }> = ({ path }) => {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const markDownElementId = "mark-down-root-element";

  useEffect(() => {
    getMarkDown();
  }, [path]);

  const getMarkDown = async () => {
    const md = await fetch(path);
    if (md.status >= 400) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    const markdownHtml = marked.parse(await md.text());
    const sanitizedHtml = purify.sanitize(markdownHtml, {
      ADD_ATTR: ["target"],
    });
    // DO NOT ALTER THE HTML AFTER THE SANITIZATION STEP ABOVE
    // unless you know what you're doing
    // 🚨 VVV This next line is usually dangerous. 🚨
    document.getElementById(markDownElementId).innerHTML = sanitizedHtml;
    setLoading(false);
  };

  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        margin: "auto",
      }}
    >
      {loading && (
        <Center>
          <Loader />
        </Center>
      )}
      {notFound && (
        <div style={{ margin: "32px" }}>
          The requested Blog post was not found
        </div>
      )}
      <div style={{ margin: "32px" }} id={markDownElementId}></div>
    </Card>
  );
};

export default Blog;
