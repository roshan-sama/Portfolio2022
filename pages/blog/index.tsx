import { Grid, Container, Card, Title, Paper } from "@mantine/core";
import Layout from "../../components/layout";
import Blog from "../../components/blog/blog";
import { useRouter } from "next/router";
import blogs from "../../components/blog/blogs";
import { useEffect, useMemo, useState } from "react";
import blogType from "../../components/blog/blog-type";
import { useNotifications } from "@mantine/notifications";
import { Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function IndividualBlog() {
  const router = useRouter();
  const { postid } = router.query;
  const { showNotification, hideNotification } = useNotifications();
  const [showGallery, setShowGallery] = useState(false);
  const [timeoutNotif, setTimeoutNotif] = useState(null);
  const invalidBlogNotifId = "invalid-blog";

  // TODO: If postid returns an undefined blog, then perform a useeffect to
  // check if blog is underfined, then rouiter.push to remove hte invalid postid
  // And set a flag to display a notification that the postid request either does not
  // exist or was renamed/ removed
  const blog: blogType | undefined = useMemo(
    () => blogs.filter((blog) => blog.id === postid)[0] ?? undefined,
    [postid]
  );

  useEffect(() => {
    if (postid === undefined || postid === "") {
      setShowGallery(true);
      return;
    }
    const blogUndefined = blog === undefined;
    setShowGallery(blogUndefined);
    if (blogUndefined) {
      showNotification({
        id: invalidBlogNotifId,
        message:
          "Oops! We couldn't find the blog post you asked for. It may have been renamed or removed",
        autoClose: 7000,
        color: "red",
        icon: <Cross1Icon />,
      });
    }
    // let timeout = setTimeout(() => {

    // }, 2000);
    // setTimeoutNotif(timeout);
  }, [blog, postid]);

  if (showGallery) {
    return (
      <PageWrapper>
        <Paper padding="xs">
          <Title order={2}>My Blog Posts</Title>
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog?postid=${blog.id}`}>
              {blog.title}
            </Link>
          ))}
        </Paper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {blog !== undefined && (
        <Paper padding="xs">
          <Title order={2} style={{ marginBottom: "5px" }}>
            {blog.title}
          </Title>
          <Blog path={"posts/" + blog.path} />
        </Paper>
      )}
    </PageWrapper>
  );
}

const PageWrapper = ({ children }) => (
  <Container fluid={true} style={{ marginBottom: "20vh" }}>
    <Grid justify="center" align="start" style={{ height: "inherit" }}>
      <Grid.Col span={12} sm={8} lg={6}>
        {children}
      </Grid.Col>
    </Grid>
  </Container>
);

IndividualBlog.getLayout = function getLayout(page) {
  return <Layout hideName={true}>{page}</Layout>;
};
