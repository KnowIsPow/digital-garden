export function Container({ children, wide = false }) {
  return (
    <main className="bg-gray-50">
      <section className={`py-12 md:py-16 ${wide ? 'content-wide' : 'content'}`}>
        {children}
        <div className="mt-12">
          I'm working to grow this digital garden. Please excuse the appearance and noted lack of
          resources as I have only just planted the seeds.
        </div>
      </section>
    </main>
  );
}
