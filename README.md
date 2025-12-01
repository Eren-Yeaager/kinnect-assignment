# Playwright + Cucumber Automation Framework

Automation framework for SauceDemo using Playwright and Cucumber with TypeScript.

## Features

- ✅ BDD with Cucumber
- ✅ TypeScript support
- ✅ Page Object Model
- ✅ Docker support for headless execution : pull the correct version : docker pull mcr.microsoft.com/playwright:v1.39.0-jammy
- ✅ HTML and JSON test reports

## Prerequisites

- Node.js 20.x or higher
- npm or yarn

## Installation

```bash
npm install
npx playwright install chromium
```

## Running Tests

### Run all tests

```bash
npm run test
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run regression tests

```bash
npm run test:regression
```

### Run tests in headless mode

```bash
npm run test:headless
```

### Run tests in parallel

```bash
npm run test:parallel
```

## View Reports

```bash
npm run report
```

This will open the Cucumber HTML report in your default browser.

## Docker

### Build Docker image

```bash
npm run docker:build
```

### Run tests in Docker

```bash
npm run docker:run
```

Or manually:

```bash
docker build -t playwright-cucumber-automation .
docker run --rm playwright-cucumber-automation
```

## Project Structure

```
.
├── features/              # Cucumber feature files
├── step-definitions/     # Step definition implementations
├── pages/                # Page Object Model classes
├── support/              # Hooks, world, and utilities
├── test-results/         # Test execution results
├── .github/workflows/    # CI/CD pipelines
└── Dockerfile           # Docker configuration
```

## Environment Variables

- `HEADLESS=true` - Run browser in headless mode
- `SAUCEDEMO_USERNAME` - Optional username override
- `SAUCEDEMO_PASSWORD` - Optional password override
