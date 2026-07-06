import SceneLoader from "./components/SceneLoader";

export default function Home() {
  return (
    <main
      className="relative w-screen h-screen"
      style={{
        backgroundImage: "url('/pexels-adrien-olichon-1257089-2387819.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    

      <div className="absolute top-1/2 left-1/2 z-20 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
        <SceneLoader />
      </div>

      <p className="absolute bottom-6 left-0 right-0 z-10 text-center text-white text-sm font-light tracking-widest">
        by kaleu 2026 — under devolpment
      </p>
    </main>
  );
}
