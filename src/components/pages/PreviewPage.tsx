import { Button } from "../Button";

export function ButtonPreview() {
  return (
    <div className="p-8 bg-background-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Button Components</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Primary Buttons</h2>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="primary" size="large">
            Large
          </Button>
          <Button variant="primary" size="large" disabled>
            Large Disabled
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Secondary Buttons</h2>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="secondary" size="large">
            Large
          </Button>
          <Button variant="secondary" size="large" disabled>
            Large Disabled
          </Button>
        </div>
      </section>
    </div>
  );
}
