module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // File extensions Jest should look for
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for TypeScript files
  },
  testMatch: ["**/*.test.(ts|tsx)"], // Look for test files ending with .test.ts or .test.tsx
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
