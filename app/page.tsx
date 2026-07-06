import SceneLoader from "./components/SceneLoader";

export default function Home() {
  return (
    <main
      className="relative w-screen h-screen"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-[-20px] left-0 z-20 w-[600px] h-[600px]">
        <SceneLoader />
      </div>

      <p className="absolute bottom-6 left-0 right-0 z-10 text-center text-black text-sm font-light tracking-widest">
        developed by kaleu 2026 — under construction
      </p>
    </main>
  );
}
