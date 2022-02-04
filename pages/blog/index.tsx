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

export default function BlogIndexPage() {
  return (
    <BlogPageWrapper>
      <Paper padding="xs">
        <Title order={2}>My Blog Posts</Title>
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/view?postid=${blog.id}`}>
            <Card style={{ margin: "16px 8px", cursor: "pointer" }} shadow="md">
              {blog.title}
              <br />
              {blog.skillIds &&
                blog.skillIds.map((skillId) => {
                  const skill = Skills.find((skill) => skill.id === skillId);
                  return (
                    <SkillBadge key={skillId} margin="0px 5px" skill={skill} />
                  );
                })}
            </Card>
          </Link>
        ))}
      </Paper>
    </BlogPageWrapper>
  );
}

export const BlogPageWrapper = ({ children }) => (
  <Container fluid={true} style={{ marginBottom: "20vh" }}>
    <Grid justify="center" align="start" style={{ height: "inherit" }}>
      <Grid.Col span={12} sm={8} lg={6}>
        {children}
      </Grid.Col>
    </Grid>
  </Container>
);

BlogIndexPage.getLayout = function getLayout(page) {
  return <Layout hideName={true}>{page}</Layout>;
};
