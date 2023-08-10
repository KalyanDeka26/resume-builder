import mongoose from "mongoose";

type WorkHistory = {
  company: string;
  job_title: string;
  company_website: string;
  employment_type: string;
  country: string;
  city: string;
  from: Date;
  to: Date;
  current: boolean;
  tech: [];
  desc: string;
};

type Education = {
  school: string;
  degree: string;
  field_of_study: string;
  grade: string;
  country: string;
  city: string;
  from: Date;
  to: Date;
  desc: string;
};

interface IResume {
  name: string;
  job_title: string;
  email: string;
  contact: string;
  github: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  skills: { value: string; label: string }[];
  work_history: WorkHistory[];
  education: Education[];
}

const resumeSchema = new mongoose.Schema<IResume>({
  name: { type: String, required: true },
  job_title: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  github: { type: String },
  linkedin: { type: String },
  portfolio: { type: String },
  summary: { type: String },
  skills: [
    {
      value: { type: String },
      label: { type: String },
    },
  ],
  work_history: [
    {
      company: { type: String },
      job_title: { type: String },
      company_website: { type: String },
      employment_type: { type: String },
      country: { type: String },
      city: { type: String },
      from: { type: Date },
      to: { type: Date },
      current: { type: Boolean },
      tech: [],
      desc: { type: String },
    },
  ],
  education: [
    {
      school: { type: String },
      degree: { type: String },
      field_of_study: { type: String },
      grade: { type: String },
      country: { type: String },
      city: { type: String },
      from: { type: Date },
      to: { type: Date },
      desc: { type: String },
    },
  ],
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
