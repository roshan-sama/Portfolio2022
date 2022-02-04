import { Card, Group, Text, useMantineTheme } from "@mantine/core";

type resumeColorVersion = "first" | "second";

const ResumeBox: React.FC<{
  boxHeading: string;
  boxText?: string;
  colorVersion: resumeColorVersion;
}> = ({ boxHeading, boxText, colorVersion, children }) => {
  const { colors, colorScheme } = useMantineTheme();
  const boxColor = colorVersion === "first" ? colors.grape : colors.cyan;
  const titleBg = colorScheme === "dark" ? boxColor["8"] : boxColor["6"];

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
        <Group direction="row" style={{ height: "100%", width: "100%" }}>
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
              transform="uppercase"
              weight={700}
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
