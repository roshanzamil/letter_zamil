import EmailSignupForm from "./email-signup-form";
import { getSiteUrl } from "../lib/site";

const siteUrl = getSiteUrl();
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roshan Zamil",
  alternateName: "Zamil",
  url: siteUrl,
  image: `${siteUrl}/roshan.gif`,
  jobTitle: "Co-Founder and Software Developer",
  description:
    "Roshan Zamil builds websites, apps, and digital systems focused on real business outcomes.",
  worksFor: {
    "@type": "Organization",
    name: "BroCrypt",
    url: "https://brocrypt.com/"
  },
  sameAs: [
    "https://www.linkedin.com/in/roshan-zamil",
    "https://brocrypt.com/"
  ],
  knowsAbout: [
    "web development",
    "web applications",
    "seo",
    "analytics",
    "performance optimization",
    "digital systems"
  ]
};

export default function HomePage() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <nav className="top-nav" aria-label="primary">
        <a href="https://brocrypt.com" target="_blank" rel="noreferrer">
          my company link
        </a>
        <a href="https://www.linkedin.com/in/roshan-zamil" target="_blank" rel="noreferrer">
          my linkedin
        </a>
      </nav>
      <section className="sheet" aria-label="Intro email">
        <div className="body">
          <h1 className="intro-heading">hi, i&apos;m zamil.</h1>
          <p>or roshan, if that&apos;s how you know me.</p>
          <p>
            i build websites, apps and digital systems that are meant to do something real.
            not just sit there and look nice.
          </p>
          <p>for me, this was never only about code.</p>
          <p>
            it was about freedom.
          </p>
          <p>
            it was about{" "}
            <a
              href="https://www.linkedin.com/posts/roshan-zamil_it-took-me-just-30-minutes-to-build-this-activity-7294259255715487745-_Tlj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChISbUBYvF1W7jcP3qqoL_ZO1zTIlXfXQw"
              target="_blank"
              rel="noreferrer"
            >
              building something
            </a>{" "}
            of my own.
          </p>
          <p>
            it was about{" "}
            <a
              href="https://www.linkedin.com/posts/roshan-zamil_killingit-activity-7251926685678243840-a0Yi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChISbUBYvF1W7jcP3qqoL_ZO1zTIlXfXQw"
              target="_blank"
              rel="noreferrer"
            >
              proving that what i had
            </a>{" "}
            in my head could actually become something useful for other people.
          </p>
          <p>
            about a year ago, my brother{" "}
            <a href="https://www.linkedin.com/in/zaid-moulana/" target="_blank" rel="noreferrer">
              zaid
            </a>{" "}
            and i were both working in stable, well-paying software jobs. on paper,
            everything looked fine. but deep down, we both had the same thought:
          </p>
          <p>
            why are we spending all our energy building other people&apos;s dreams when we could
            be building our own?
          </p>
          <p>
            that thought became{" "}
            <a href="https://brocrypt.com/" target="_blank" rel="noreferrer">
              brocrypt
            </a>
            .
          </p>
          <p>
            <a href="https://www.linkedin.com/in/zaid-moulana/" target="_blank" rel="noreferrer">
              zaid
            </a>{" "}
            came in with deep experience in marketing, seo, strategy and understanding what
            actually makes businesses grow.
          </p>
          <p>
            i came in from the technical side. building systems, solving hard problems,
            creating websites and apps from scratch and figuring out how to turn ideas into
            working products.
          </p>
          <p>
            we didn&apos;t start with a big office, fancy team, or some perfect setup.
            we started with skill, belief, pressure, responsibility and a real desire to
            make something work.
          </p>
          <p>
            so we hired a small team, took on projects, kept learning, kept fixing, kept
            building and little by little,{" "}
            <a href="https://brocrypt.com/" target="_blank" rel="noreferrer">
              brocrypt
            </a>{" "}
            became real.
          </p>
          <p>
            since then, i&apos;ve worked on websites, ecommerce stores, custom builds, creative
            ideas, seo-driven improvements and systems that help businesses actually perform
            better online.
          </p>
          <p>some projects were smooth.</p>
          <p>some were stressful.</p>
          <p>some worked beautifully.</p>
          <p>some taught me things the hard way.</p>
          <p>but every single one of them made me better.</p>
          <p>what matters to me is not just making something beautiful.</p>
          <p>it&apos;s making something that works.</p>
          <p>something fast.</p>
          <p>something clear.</p>
          <p>
            something that helps a business get seen, get trusted and get results.
          </p>
          <p>i like creating things that people can feel proud of.</p>
          <p>things that solve problems.</p>
          <p>
            things that make someone say, &quot;yes, this is exactly what we needed.&quot;
          </p>
          <p>that&apos;s what keeps me going.</p>
          <p>
            i&apos;m still building. still learning. still trying things. still getting better.
            and honestly, i think that&apos;s the best part.
          </p>
          <p>
            outside of work, i&apos;m still figuring myself out too.
            i&apos;m working on becoming{" "}
            <a
              href="https://www.instagram.com/p/DNxHWpGXrSW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              physically
            </a>{" "}
            better.
            {" "}
            <a
              href="https://www.linkedin.com/posts/roshan-zamil_killingit-activity-7251926685678243840-a0Yi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChISbUBYvF1W7jcP3qqoL_ZO1zTIlXfXQw"
              target="_blank"
              rel="noreferrer"
            >
              getting certified
            </a>
            .
            building small stuff just because i enjoy it.
            sometimes even doing{" "}
            <a
              href="https://www.instagram.com/p/C-21waxSzmy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              free modeling work
            </a>{" "}
            for friends when life gets random.
          </p>
          <p>
            and somewhere through all the late nights, ideas and chaos, there&apos;s also{" "}
            <a
              href="https://www.instagram.com/p/CmGbaZ0JrDf/?img_index=1"
              target="_blank"
              rel="noreferrer"
            >
              zoe
            </a>
            , my cat, quietly being part of the journey.
          </p>
          <p>
            some days i&apos;m highly{" "}
            <a
              href="https://www.instagram.com/p/DKMkIphJPBC/?img_index=1"
              target="_blank"
              rel="noreferrer"
            >
              motivated
            </a>
            . some days i&apos;m searching for it again.
          </p>
          <p>but i keep moving.</p>
          <p>this portfolio is a small collection of that journey.</p>
          <p>not just work.</p>
          <p>but proof of what i care about.</p>
          <p>
            if something here speaks to you, or if you think we should build something
            together, reach out.
          </p>
          <p>i&apos;d love to hear from you.</p>
          <p>
            ps: i&apos;m planning to share practical tips and tricks from my experience that
            actually work. if you&apos;d like to be part of it, drop your email below.
          </p>
          <EmailSignupForm />
          <p>- roshan</p>
          <img className="signature-gif" src="/roshan.gif" alt="roshan animated signature visual" />
        </div>
      </section>
    </main>
  );
}
