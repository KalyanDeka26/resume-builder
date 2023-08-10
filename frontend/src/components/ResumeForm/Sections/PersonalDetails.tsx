import { TextInput, Grid } from "@mantine/core";
import { ResumeFormType } from "..";

const PersonalDetails: React.FC<{ form: ResumeFormType }> = ({ form }) => {
  return (
    <>
      <Grid grow pt={8}>
        <Grid.Col span={5}>
          <TextInput
            label="Name"
            placeholder="Your name"
            variant="filled"
            required
            {...form.getInputProps("name")}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <TextInput
            className="w-full"
            label="Job Title"
            placeholder="Job Title"
            variant="filled"
            required
            {...form.getInputProps("job_title")}
          />
        </Grid.Col>
      </Grid>
      <TextInput
        pt={8}
        className="w-full"
        label="Email"
        placeholder="Your email"
        variant="filled"
        required
        {...form.getInputProps("email")}
      />
      <Grid grow pt={8}>
        <Grid.Col span={1}>
          <TextInput
            className="w-full"
            label="Contact number"
            placeholder="contact"
            variant="filled"
            required
            {...form.getInputProps("contact")}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <TextInput
            className="w-full"
            label="Github"
            placeholder="GitHub"
            variant="filled"
            {...form.getInputProps("github")}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <TextInput
            className="w-full"
            label="LinkedIn"
            placeholder="LinkedIn"
            variant="filled"
            {...form.getInputProps("linkedin")}
          />
        </Grid.Col>
      </Grid>
      <TextInput
        pt={8}
        className="w-full"
        label="Portfolio Website"
        placeholder="Your portfolio website"
        variant="filled"
        {...form.getInputProps("portfolio")}
      />
    </>
  );
};

export default PersonalDetails;
