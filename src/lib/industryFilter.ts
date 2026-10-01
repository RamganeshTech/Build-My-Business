// src/lib/industryFilter.ts
// Tiny shared store so the Industries section can filter the Products section
// without a provider or prop drilling.
import { useSyncExternalStore } from 'react';

let current: string | null = null;
const listeners = new Set<() => void>();

export const setIndustryFilter = (id: string | null) => {
  current = id;
  listeners.forEach((fn) => fn());
};

export const useIndustryFilter = () =>
  useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current,
    () => null,
  );