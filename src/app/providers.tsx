"use client";

import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const Providers = ({ children }: { children: React.ReactNode }) => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </NextThemesProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
