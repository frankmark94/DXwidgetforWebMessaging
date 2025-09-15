# Web Messaging Widget for Constellation DX

A Constellation DX PAGE Widget that embeds Pega's Web Messaging widget into Constellation portals and landing pages with safe, configurable script injection.

## Overview

This project provides a custom Constellation DX component that allows you to embed Pega's hosted Web Messaging widget inside Constellation portals. The component safely injects the widget script once per session and provides configuration options for different environments (dev/uat/prod).

## Features

- **Safe Script Injection**: Prevents duplicate script loading with idempotent injection
- **Configurable Properties**: Environment-specific script URLs, IDs, and loading behavior
- **Data Attributes Support**: Optional JSON configuration for custom data-* attributes
- **App Studio Integration**: Available in Channels → Landing Pages for easy deployment
- **Storybook Demo**: Local validation and testing environment

## Screenshots

These screenshots demonstrate the following:

### 1. Custom 'WebMessaging' DX widget available

<img width="525" height="543" alt="image" src="https://github.com/user-attachments/assets/f7af0d1a-19e2-4955-9b3d-d5c3b5f30099" />

*Screenshot showing the "WebMessaging" DX widget appearing as an available component within the Pega Constellation component selection interface, ready to be added to a landing page or portal region.*

### 2. Input variables for the widget URL

<img width="574" height="231" alt="image" src="https://github.com/user-attachments/assets/1e3c08ab-680b-4954-9518-9ed37ccc76cd" />

*Screenshot of the component's property panel in App Studio, showing configurable fields for `scriptSrc`, `scriptId`, `async`, `defer`, `autoLoad`, and `dataAttrs`.*

### 3. Widget loading onto the Constellation page

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/b0d618a1-9444-4fb0-bb98-8224d014b8c6" />

*Screenshot of a Constellation landing page with the Web Messaging widget successfully loaded and rendered, showing the chat interface integrated seamlessly into the portal.*

## Configuration Properties

The component exposes the following configurable properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `scriptSrc` | TEXT | `https://widget.use1.chat.pega.digital/e03b7c71-ac8b-4cb4-b890-d813ff3b9074/widget.js` | URL of the widget script |
| `scriptId` | TEXT | `pega-wm-chat` | ID attribute of the script tag |
| `async` | CHECKBOX | `true` | Whether to set async on script |
| `defer` | CHECKBOX | `true` | Whether to set defer on script |
| `autoLoad` | CHECKBOX | `true` | Whether to auto-load script on mount |
| `dataAttrs` | TEXT | `{}` | JSON map of data-* attributes to apply |

## Usage

### In App Studio

1. Navigate to **Channels → Landing Pages**
2. Select or create a landing page
3. Add the **WebMessaging** component to a region
4. Configure the properties in the component's property panel
5. Save and preview the page

### Local Development

```bash
# Install dependencies
npm install

# Start Storybook for local development
npm run startStorybook

# Build the component
npm run buildComponent

# Publish to Pega environment
npm run publish
```

## Content Security Policy (CSP)

**Important**: Ensure your Constellation portal's CSP headers allow the widget host URL:

```
script-src 'self' https://widget.use1.chat.pega.digital;
```

Add `https://widget.use1.chat.pega.digital` to your `script-src` allowlist to prevent CSP violations.

## Prerequisites

- Pega Platform™ version 24.2 or later
- Git version 2.30 or later
- Node version 20 and npm version 10 (or node 18 with npm 8)
- Supported browser (Chrome, Edge, Firefox, Safari)

## Documentation

- [Constellation DX Components - Initialize a project](https://docs.pega.com/bundle/constellation-dx-components/page/constellation-dx-components/custom-components/initialize-project.html)
- [Constellation DX Components - Types](https://docs.pega.com/bundle/constellation-dx-components/page/constellation-dx-components/custom-components/types-constellation-dx-components.html)
- [Constellation DX Components - Latest Documentation](https://docs.pega.com/bundle/constellation-dx-components/page/constellation-dx-components/custom-components/whats-new-constellation-dx-component-builder.html)
