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
import { BlogPageWrapper } from "./index";

export default function ViewBlog() {
  const router = useRouter();
  const { postid } = router.query;
  const { showNotification } = useNotifications();
  const invalidBlogNotifId = "invalid-blog";

  const blog: blogType | undefined = useMemo(
    () => blogs.filter((blog) => blog.id === postid)[0] ?? undefined,
    [postid]
  );

  useEffect(() => {
    if (postid === undefined || postid === "") {
      return;
    }
    const blogUndefined = blog === undefined;
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

  return (
    <BlogPageWrapper>
      <>
        <Link href={"/blog"}>
          <Button style={{ marginBottom: "5px" }}>&lt; Back to blogs</Button>
        </Link>
        {blog !== undefined ? (
          <Paper padding="xs">
            <Center>
              <Title
                order={2}
                style={{ marginBottom: "16px", fontSize: "32px" }}
              >
                {blog.title}
              </Title>
            </Center>
            <Blog path={`${window.location.origin}/posts/${blog.path}`} />
          </Paper>
        ) : (
          <Paper padding="xs">-</Paper>
        )}
      </>
    </BlogPageWrapper>
  );
}

ViewBlog.getLayout = function getLayout(page) {
  return <Layout hideName={true}>{page}</Layout>;
};
