export function Container({ children, wide = false }) {
  return (
    <main className="bg-gray-50">
      <section className={`py-12 md:py-16 ${wide ? 'section-wide' : 'section'}`}>
        {children}
      </section>
    </main>
  );
}
