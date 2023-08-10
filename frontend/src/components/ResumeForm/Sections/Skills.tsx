import { MultiSelect } from "@mantine/core";
import { useState } from "react";
import { ResumeFormType } from "..";

const skills = [
  { value: "css", label: "CSS" },
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "html", label: "HTML" },
  { value: "mantine", label: "Mantine" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "tailwind-css", label: "TailwindCSS" },
];

const Skills: React.FC<{ form: ResumeFormType }> = ({ form }) => {
  const [data, setData] = useState(skills);

  return (
    <>
      <MultiSelect
        data={data}
        label="Skills"
        description="We recommend to keep your skills max 10-12. Can not find your skill? Create one!"
        variant="filled"
        searchable
        creatable
        getCreateLabel={(query: string) => `+ Create ${query}`}
        onCreate={(query: string) => {
          const item = { value: query, label: query };
          setData((current) => [...current, item]);
          form.setFieldValue("skills", [...form.values.skills, item]);
          return item;
        }}
        {...form.getInputProps("skills")}
      />
    </>
  );
};

export default Skills;
