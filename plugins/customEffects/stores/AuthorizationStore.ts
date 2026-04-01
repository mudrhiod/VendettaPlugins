import { storage } from "@vendetta/plugin";
import create from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    token?: string;
    setToken: (token?: string) => void;
    isAuthorized: () => boolean;
}

export const useAuthorizationStore = create<AuthState>(
    persist(
        (set, get) => ({
            token: undefined,
            setToken: token => set({ token }),
            isAuthorized: () => !!get().token,
        }),
        {
            name: "customeffects-auth",
            storage: storage,
        } as any
    )
);