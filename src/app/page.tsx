"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import { Award, BarChart, Lightbulb, Scale, Shield, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Skills",          id: "#skills"},
        {
          name: "Projects",          id: "#projects"},
        {
          name: "Experience",          id: "#experience"},
        {
          name: "Certifications",          id: "#certifications"},
        {
          name: "AI Playground",          id: "#ai-playground"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="WILLSON"
      button={{
        text: "Resume",        href: "http://img.b2bpic.net/free-photo/upload-icon-front-side_187299-45737.jpg"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "canvas-reveal"}}
      logoText="WILLSON"
      description="AI Systems Builder, Data Strategist, Cybersecurity-Focused Engineer, Product Thinker.\nBuilding intelligent digital systems at the intersection of AI, analytics, cloud infrastructure, and human-centered design."
      buttons={[
        {
          text: "Explore Work",          href: "#projects"},
        {
          text: "Connect",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241207.jpg"
      imageAlt="Abstract neural network background with subtle glowing lines"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      title="Shaping Tomorrow with Systems Intelligence"
      description="As an AI Systems Builder and Data Strategist, Willson architects intelligent digital experiences. Pursuing an MSc in Big Data Analytics, he combines academic rigor with hands-on expertise in AI, cloud infrastructure, and cybersecurity. His approach is rooted in systems thinking, focusing on precision-engineered workflows and analytics-driven platforms that deliver modern digital solutions with a strong product mindset."
      bulletPoints={[
        {
          title: "Advanced Education",          description: "MSc in Big Data Analytics at St. Joseph’s College (Autonomous), Bengaluru."},
        {
          title: "Oracle AI Foundations Certified",          description: "Validated expertise in Oracle Cloud Infrastructure AI, cloud systems, and data analytics."},
        {
          title: "Leadership & Strategy Programs",          description: "Participant in the Aspire Leaders Program and McKinsey Forward Program."},
        {
          title: "Diverse Technical Experience",          description: "Proficient in AI systems, Oracle APEX, cloud infrastructure, cybersecurity, cryptography, databases, and MERN stack technologies."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-with-neon-light_23-2149005459.jpg"
      imageAlt="Professional portrait of Willson with abstract AI elements"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="skills" data-section="skills">
      <FeatureCardTwentyEight
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "python",          title: "Python",          subtitle: "Language",          category: "Development",          value: "Expert"},
        {
          id: "sql",          title: "SQL",          subtitle: "Database",          category: "Data Management",          value: "Advanced"},
        {
          id: "oracle-apex",          title: "Oracle APEX",          subtitle: "Platform",          category: "Low-Code Development",          value: "Expert"},
        {
          id: "vibe-coding",          title: "Vibe Coding",          subtitle: "Framework",          category: "Web Development",          value: "Proficient"},
        {
          id: "oci",          title: "OCI",          subtitle: "Cloud",          category: "Cloud Infrastructure",          value: "Certified"},
        {
          id: "cloud-infra",          title: "Cloud Infrastructure",          subtitle: "Concepts",          category: "Operations",          value: "Advanced"},
        {
          id: "ai-systems",          title: "AI Systems",          subtitle: "Development",          category: "Artificial Intelligence",          value: "Expert"},
        {
          id: "cryptography",          title: "Cryptography",          subtitle: "Security",          category: "Cybersecurity",          value: "Proficient"},
        {
          id: "cybersecurity",          title: "Cybersecurity",          subtitle: "Practices",          category: "Information Security",          value: "Experienced"},
        {
          id: "postgresql",          title: "PostgreSQL",          subtitle: "Database",          category: "Data Management",          value: "Proficient"},
        {
          id: "mongodb",          title: "MongoDB",          subtitle: "Database",          category: "NoSQL",          value: "Proficient"},
        {
          id: "data-analytics",          title: "Data Analytics",          subtitle: "Strategy",          category: "Business Intelligence",          value: "Expert"},
      ]}
      title="Proficiencies in the AI-Native Stack"
      description="Mastering interconnected technologies to engineer intelligent systems and drive data-centric strategies with precision and modern engineering taste."
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      animationType="blur-reveal"
      products={[
        {
          id: "pos-webapp",          name: "Multi-Seller POS Web App",          price: "Case Study",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-eating-tasty-sandwich-having-meal-break-working-business-company-office-takeout-lunchbreak_482257-2136.jpg",          imageAlt: "Mockup of a POS web application dashboard"},
        {
          id: "oracle-apex-workflow",          name: "Oracle APEX Workflow System",          price: "Case Study",          imageSrc: "http://img.b2bpic.net/free-photo/african-american-software-developer-does-visual-coding-creating-software_482257-127024.jpg",          imageAlt: "Mockup of an Oracle APEX workflow automation system"},
        {
          id: "student-food-platform",          name: "Student Food Platform",          price: "Case Study",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-nutritional-counter-app-composition_23-2149880622.jpg",          imageAlt: "Mockup of a student food ecosystem platform"},
        {
          id: "skillforge",          name: "SkillForge - AI Career Platform",          price: "Case Study",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-laptop-with-rate-charts-display-while-man-woman-working-business-project-design-computer-screen-with-data-chart-information-finance-analysis-desk_482257-40065.jpg",          imageAlt: "Mockup of SkillForge AI-driven career intelligence platform"},
        {
          id: "cybersecurity-platform",          name: "Cybersecurity Incident Response",          price: "Case Study",          imageSrc: "http://img.b2bpic.net/free-photo/empty-military-operation-headquarters-follow-threats-radar-surveillance_482257-91207.jpg",          imageAlt: "Mockup of a cybersecurity incident response platform"},
        {
          id: "predictive-analytics-dashboard",          name: "Predictive Analytics Dashboard",          price: "Case Study",          imageSrc: "http://img.b2bpic.net/free-photo/empty-high-end-workspace-with-advanced-tech-tools-enhancing-productivity_482257-119752.jpg",          imageAlt: "Mockup of a predictive analytics dashboard"},
      ]}
      title="Featured Works & Product Vision"
      description="Showcasing impactful projects designed with architectural precision, systems thinking, and a modern product aesthetic. Each case study reflects analytical depth and premium digital craftsmanship."
    />
  </div>

  <div id="experience" data-section="experience">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "msc-big-data",          name: "MSc Big Data Analytics",          role: "St. Joseph’s College (Autonomous), Bengaluru",          imageSrc: "http://img.b2bpic.net/free-photo/business-data-analysis-presentation-information-concept_53876-144422.jpg",          imageAlt: "Abstract representation of big data analytics"},
        {
          id: "oracle-ai-foundations",          name: "Oracle Cloud Infrastructure AI Foundations Certified",          role: "Certification",          imageSrc: "http://img.b2bpic.net/free-vector/gradient-data-logo-template_23-2149200603.jpg",          imageAlt: "Oracle AI Foundations certification badge"},
        {
          id: "aspire-leaders",          name: "Aspire Leaders Program",          role: "Participant",          imageSrc: "http://img.b2bpic.net/free-photo/people-celebrating-world-population-day_23-2151493182.jpg",          imageAlt: "Abstract image representing a leadership program"},
        {
          id: "mckinsey-forward",          name: "McKinsey Forward Program",          role: "Participant",          imageSrc: "http://img.b2bpic.net/free-photo/business-executives-discussing-with-their-colleagues-whiteboa_1170-1835.jpg",          imageAlt: "Abstract image representing a professional development program"},
        {
          id: "cybersecurity-roles",          name: "Cybersecurity Engineer",          role: "Professional Experience",          imageSrc: "http://img.b2bpic.net/free-photo/dropbox-icon-line-icon-connection-circuit-board_1379-896.jpg",          imageAlt: "Abstract image representing cybersecurity"},
        {
          id: "workflow-systems",          name: "Enterprise Workflow Systems",          role: "Developer & Architect",          imageSrc: "http://img.b2bpic.net/free-photo/programming-background-with-html_23-2150038862.jpg",          imageAlt: "Abstract image representing workflow systems"},
        {
          id: "legal-practice",          name: "Legal Practice Environments",          role: "Internship Experience",          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139358.jpg",          imageAlt: "Abstract image representing legal practice"},
      ]}
      title="Journey in Tech & Innovation"
      description="A curated timeline of key milestones, from academic pursuits and leadership programs to professional engagements and impactful experiences, reflecting continuous growth and expertise."
    />
  </div>

  <div id="certifications" data-section="certifications">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "oracle-ai",          icon: Lightbulb,
          title: "Oracle AI Foundations Certified",          value: "Achieved"},
        {
          id: "aspire-leadership",          icon: Award,
          title: "Aspire Leaders Program",          value: "Completed"},
        {
          id: "mckinsey-forward",          icon: TrendingUp,
          title: "McKinsey Forward Program",          value: "Completed"},
        {
          id: "cybersecurity-exp",          icon: Shield,
          title: "Cybersecurity Experience",          value: "Applied"},
        {
          id: "forensic-internship",          icon: BarChart,
          title: "Forensic Science Internship",          value: "Completed"},
        {
          id: "legal-internship",          icon: Scale,
          title: "Legal Practice Internship",          value: "Completed"},
      ]}
      title="Accreditations & Recognitions"
      description="Validating expertise across AI, cloud infrastructure, and strategic leadership disciplines, showcasing a commitment to continuous learning and professional excellence."
    />
  </div>

  <div id="ai-playground" data-section="ai-playground">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "command-about",          title: "about",          content: "Willson is an AI Systems Builder, Data Strategist, and Cybersecurity-Focused Engineer. He builds intelligent digital systems at the intersection of AI, analytics, cloud infrastructure, and human-centered design."},
        {
          id: "command-projects",          title: "projects",          content: "Explore featured works including a Multi-Seller POS Web App, Oracle APEX Workflow System, Student Food Platform, and SkillForge (AI Career Platform). Each project showcases architectural precision and product vision."},
        {
          id: "command-skills",          title: "skills",          content: "Proficient in Python, SQL, Oracle APEX, OCI, AI Systems, Cybersecurity, PostgreSQL, MongoDB, and Data Analytics. Mastering interconnected technologies for intelligent system engineering."},
        {
          id: "command-certifications",          title: "certifications",          content: "Certifications include Oracle AI Foundations, participation in Aspire Leaders Program and McKinsey Forward Program, and experience in cybersecurity, forensic science, and legal practice."},
        {
          id: "command-contact",          title: "contact",          content: "To connect, visit the contact section. You can reach out via LinkedIn, GitHub, or email, or download my resume."},
        {
          id: "command-resume",          title: "resume",          content: "You can download Willson's full professional resume from the navigation bar or the contact section for a comprehensive overview of his experience."},
        {
          id: "command-help",          title: "help",          content: "Available commands: 'about', 'projects', 'skills', 'certifications', 'contact', 'resume', 'help', 'clear'. Click any command to view its details."},
        {
          id: "command-clear",          title: "clear",          content: "Terminal screen cleared. Ready for your next command."},
      ]}
      title="AI Playground: Terminal Interface"
      description="Interact with Willson's digital identity using a simulated command-line interface. Type a command or click an entry below. For assistance, type 'help'."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      tag="Get in Touch"
      title="Let's Build the Future, Together"
      description="Reach out to discuss AI systems, data strategy, cybersecurity, or collaboration opportunities. Willson is always open to connecting on innovative projects."
      imageSrc="http://img.b2bpic.net/free-photo/3d-abstract-dots-lines-connected_1048-11946.jpg"
      imageAlt="Abstract illustration of global connection and collaboration"
      mediaAnimation="blur-reveal"
      mediaPosition="left"
      inputPlaceholder="Your email address"
      buttonText="Send Message"
      termsText="By sending a message, you agree to Willson's professional outreach guidelines."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="WILLSON"
      leftLink={{
        text: "LinkedIn",        href: "https://www.linkedin.com/in/willson-ai"}}
      rightLink={{
        text: "GitHub",        href: "https://github.com/willson-dev"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
