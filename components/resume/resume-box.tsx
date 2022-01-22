import { Card, Group, Text } from "@mantine/core";

const ResumeBox: React.FC<{ boxHeading: string; boxText: string }> = ({
  boxHeading,
  boxText,
}) => {
  return (
    <Card style={{ margin: "10%" }}>
      <Group direction="row">
        <Text
          style={{
            writingMode: "sideways-lr",
            width: "10%",
            marginRight: "5px",
            marginLeft: "-5px",
          }}
          transform="uppercase"
          weight={700}
        >
          {boxHeading}
        </Text>
        <div style={{ width: "80%" }}>{boxText}</div>
      </Group>
    </Card>
  );
};

export default ResumeBox;
