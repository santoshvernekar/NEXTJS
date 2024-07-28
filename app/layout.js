import { Inter } from "next/font/google";
import Header from "./Header";
import { ContextProvider } from "../components/clientside";
import "../styles/app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "TO do App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
