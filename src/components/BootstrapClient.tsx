'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // dynamically load bootstrap JS bundle on client only
    // TypeScript: runtime-only import without types, ignore missing declaration
    // @ts-expect-error: bootstrap has no bundled TypeScript declarations
    void import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return null;
}
