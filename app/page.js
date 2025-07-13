import LandingPage from "@/components/custom/LandingPage";
import ClientOnly from "@/components/custom/ClientOnly";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ClientOnly>
        <LandingPage />
      </ClientOnly>
    </div>
  );
}
