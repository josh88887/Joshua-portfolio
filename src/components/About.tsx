import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Tech-forward MarTech specialist based in Lahore, Pakistan — combining an
          HND Level 4 qualification with 2 years of hands-on experience in
          AI-assisted development and sales.
        </p>
        <p className="para">
          I specialize in architecting autonomous AI agents and automated workflows
          using <strong>n8n</strong>, connecting LLMs like Claude and ChatGPT to
          real business systems through custom API integrations. My expertise bridges
          technical innovation with commercial growth.
        </p>
      </div>
    </div>
  );
};

export default About;