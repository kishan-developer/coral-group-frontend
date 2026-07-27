export default function GradientBanner() {
  return (
    <div
      className="
        relative w-full h-screen bg-cover bg-center bg-fixed 
        flex items-center justify-center
        after:content-[''] after:absolute after:inset-0 
        after:bg-gradient-to-t after:from-black/60 after:to-transparent
      "
      style={{ backgroundImage: "url('./property/SK2.jpg')" }}
    >
      <h1 className="relative z-10 text-white text-5xl font-bold">
        Premium Background Banner
      </h1>
    </div>
  );
}
