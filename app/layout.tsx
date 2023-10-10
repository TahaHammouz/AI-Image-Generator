import Header from "../components/Header";
import PromptInput from "../components/PromptInput";
import "../styles/globals.css";

export const metadata = {
  title: "AI Image Generator",
  description: "Built with Next.js 13.2, DALL·E 2, and Chat GPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

          <Header />

          <PromptInput />

          {children}

      </body>
    </html>
  );
}
