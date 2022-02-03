import {
  Grid,
  Container,
  Card,
  Title,
  Paper,
  Button,
  Center,
} from "@mantine/core";
import Layout from "../../components/layout";
import Blog from "../../components/blog/blog";
import { useRouter } from "next/router";
import blogs from "../../components/blog/blogs";
import { useEffect, useMemo, useState } from "react";
import blogType from "../../components/blog/blog-type";
import { useNotifications } from "@mantine/notifications";
import { Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Skills from "../../components/Skill/skills";
import SkillBadge from "../../components/Skill/skill-badge";

export default function IndividualBlog() {
  const router = useRouter();
  const { postid } = router.query;
  const { showNotification } = useNotifications();
  const [showGallery, setShowGallery] = useState(false);
  const invalidBlogNotifId = "invalid-blog";

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
  }, [blog, postid]);

  if (showGallery) {
    return (
      <PageWrapper>
        <Paper padding="xs">
          <Title order={2}>My Blog Posts</Title>
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog?postid=${blog.id}`}>
              <Card style={{ margin: "16px 8px", cursor: "pointer" }}>
                {blog.title}
                <br />
                {blog.skillIds &&
                  blog.skillIds.map((skillId) => {
                    const skill = Skills.find((skill) => skill.id === skillId);
                    return (
                      <SkillBadge
                        key={skillId}
                        margin="0px 5px"
                        skill={skill}
                      />
                    );
                  })}
              </Card>
            </Link>
          ))}
        </Paper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {blog !== undefined && (
        <>
          <Link href={"/blog"}>
            <Button style={{ marginBottom: "5px" }}>&lt; Back to blogs</Button>
          </Link>
          <Paper padding="xs">
            <Center>
              <Title
                order={2}
                style={{ marginBottom: "16px", fontSize: "32px" }}
              >
                {blog.title}
              </Title>
            </Center>
            <Blog path={"posts/" + blog.path} />
          </Paper>
        </>
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
