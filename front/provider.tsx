"use client";

import React, { ReactNode, createContext } from "react";
import BasketStore from "./store/BasketStore";

type context = {
    basket: BasketStore;
}

export const BasketContext = createContext<context>({ basket: new BasketStore() });

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <BasketContext.Provider value={{ basket: new BasketStore() }}>{children} </BasketContext.Provider>
}