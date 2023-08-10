import { Textarea } from "@mantine/core";
import { ResumeFormType } from "..";

const Summary: React.FC<{ form: ResumeFormType }> = ({ form }) => {
  return (
    <>
      <Textarea
        placeholder="Summary"
        label="Summary"
        autosize
        minRows={2}
        variant="filled"
        {...form.getInputProps("summary")}
      />
    </>
  );
};

export default Summary;
