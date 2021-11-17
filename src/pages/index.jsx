import Page from 'features/page';

export default function IndexPage() {
  return (
    <Page
      title="Next.js Tailwind Starter"
      description="An opinionated starter kit for Next.js and TailwindCSS"
      canonical="/"
    >
      <main className="space-y-10 py-12 md:py-24 bg-gray-50">
        <div className="section pb-8 border-b">
          <h1 className="display text-xl md:text-2xl lg:text-3xl">
            Next.js + TailwindCSS Starter Kit
          </h1>
          <p className="body mt-2">
            An opinionated boilerplate for working with Next.js and TailwindCSS. The purpose of this
            work is to provide a framework and set of components that make it convienent to start
            new Next.js + TailwindCSS projects.
          </p>
        </div>
        <div className="section">
          <div className="shadow p-4 bg-white">
            <h2 className="display text-xl">Folder Structure</h2>
            <p className="body mt-2">
              All files are moved into the ./src folder. Additional folders included:
            </p>
            <h3 className="display mt-4">UI</h3>
            <p className="body mt-2">
              A place for generic design components. UI components are generally useable in a
              variety of context and in many cases across multiple different applications. An
              example of a UI component is a generic calendar that can be used for many purposes.
            </p>
            <h3 className="display mt-4">Features</h3>
            <p className="body mt-2">
              A place for application-specific functionality. Features tend to be comprised of UI
              building blocks and include some form of state. An example of a feature would be an
              hotel availability calendar that adds room availability state to a calendar UI
              component.
            </p>
            <h3 className="display mt-4">Functions</h3>
            <p className="body mt-2">
              A place for functions that can be used in multiple contexts. The included example is a
              function that formats numbers by adding commas to them.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="shadow p-4 bg-white">
            <h2 className="display text-xl">Naming Convention</h2>
            <p className="body mt-2">All files are named in lowercase-kebab-case. </p>
          </div>
        </div>
        <div className="section">
          <div className="shadow p-4 bg-white">
            <h2 className="display text-xl">TailwindCSS Components</h2>
            <p className="body mt-2">
              Styled components provided in styles.css serve to provide a set of basic components
              that promote building a cohesive brand.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="shadow p-4 bg-white">
            <h2 className="display text-xl">React Components</h2>
            <p className="body mt-2">
              React components are added as a need is recognized to reduce development around
              commonly recurring component patterns.
            </p>
          </div>
        </div>
      </main>
    </Page>
  );
}
