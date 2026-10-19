import { Card, Group, Text } from "@mantine/core";

type resumeColorVersion = "first" | "second";

const ResumeBox: React.FC<React.PropsWithChildren<{
  boxHeading: string;
  boxText?: string;
  colorVersion: resumeColorVersion;
}>> = ({ boxHeading, boxText, colorVersion, children }) => {
  // Picked by CSS so the server HTML matches the client regardless of the saved color scheme
  const color = colorVersion === "first" ? "grape" : "cyan";
  const titleBg = `light-dark(var(--mantine-color-${color}-6), var(--mantine-color-${color}-8))`;

  return (
    <Card
      style={{
        margin: "32px 24px 0px 24px",
        height: "1.5in",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: titleBg,
      }}
      shadow="xl"
    >
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Group style={{ height: "100%", width: "100%" }}>
          <div
            style={{
              width: "10%",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                writingMode: "sideways-lr",
                width: "32px",
                marginRight: "5px",
                marginLeft: "-5px",
                padding: "15px 0px 15px 3px",
                borderRadius: "5px",
                backgroundColor: titleBg,
              }}
              tt="uppercase"
              fw={700}
            >
              {boxHeading}
            </Text>
          </div>
          {boxText ? (
            <div style={{ width: "80%" }}>{boxText}</div>
          ) : (
            <div style={{ width: "85%" }}>{children}</div>
          )}
        </Group>
      </div>
    </Card>
  );
};

export default ResumeBox;
