export default function Home() {
  const categories = [
    "Vehicles",
    "Electronics",
    "Furniture",
    "Tools",
    "Events",
    "Rooms",
    "Fashion",
    "Sports & Baby",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Rental Vala</h1>
        <p className="mt-4 text-lg">Rent anything. Earn from everything.</p>
        <div className="mx-auto mt-8 flex max-w-xl gap-2">
          <input
            type="text"
            placeholder="What do you want to rent?"
            className="flex-1 rounded px-4 py-3 text-black"
          />
          <button className="rounded bg-amber-400 px-6 py-3 font-semibold text-black">
            Search
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Browse categories</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <div key={c} className="rounded-lg bg-white p-6 text-center shadow">
              {c}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}