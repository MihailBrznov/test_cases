import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/test_cases.ts"]
};

export default config;