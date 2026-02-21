import AIChat from "@/components/AIChat";

export default function HomePage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Persona 3 Reload Guide</h1>
      {/* Integrasi fitur AI Chat ke dalam layout utama */}
      <section className="max-w-md">
        <AIChat />
      </section>
      {/* Konten lainnya */}
    </main>
  );
}