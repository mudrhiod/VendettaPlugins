import { logger } from "@vendetta";
import Settings from "./settings";
import { loadAllEffectData } from "./patches/effects";
import { patchGetUserProfile, patchGetAllProfileEffects, patchGetProfileEffect } from "./patches/profile";

export default {
    onLoad: async () => {
        await loadAllEffectData();

        patchGetUserProfile();
        patchGetAllProfileEffects();
        patchGetProfileEffect();
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}