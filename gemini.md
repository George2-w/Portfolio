# Using the `agent` Option in Node.js

In Node.js development, the `agent` option is used when making HTTP or HTTPS requests to manage connection pooling, socket reuse, and persistence.

## Overview
By default, Node.js creates a new connection for every request. Using a custom agent enables **Keep-Alive**, which reuses the underlying TCP connection for multiple requests. This significantly improves performance by reducing SSL/TLS handshake overhead and latency.

## 1. Using `agent` with the Standard `https` Module

When using the built-in `https` module, you can create an agent to control how many concurrent sockets are open and whether they should stay active.

```javascript
const https = require('https');

// Create a custom agent
const myAgent = new https.Agent({
  keepAlive: true,             // Keep sockets around even when no requests are active
  keepAliveMsecs: 1000,        // Initial delay for TCP Keep-Alive packets
  maxSockets: 25,              // Maximum number of sockets allowed per host
  maxFreeSockets: 10,          // Maximum number of idle sockets to keep open
  timeout: 60000               // Socket timeout in milliseconds
});

const options = {
  hostname: 'api.example.com',
  port: 443,
  path: '/data',
  method: 'GET',
  agent: myAgent               // Pass the agent here
};

const req = https.request(options, (res) => {
  // Handle response
});
```

## 2. Using `agent` with the `fetch` API (Node.js 18+)

In modern Node.js environments, the global `fetch` API (built on `undici`) uses a `dispatcher` property instead of `agent`.

```javascript
import { Agent } from 'undici';

const dispatcher = new Agent({
  keepAliveTimeout: 10,
  keepAliveMaxTimeout: 600,
});

const response = await fetch('https://api.example.com/v1/user', {
  dispatcher 
});
```

## Why Use Custom Agents?

*   **Reduced Latency:** Skips the three-way TCP handshake and heavy TLS handshake for subsequent requests.
*   **Resource Management:** Prevents application exhaustion of OS file descriptors by limiting `maxSockets`.
*   **Stability:** Allows setting specific timeouts to handle unstable network environments or strict server-side limits.

### Global Configuration
You can also modify the global defaults, though this is generally discouraged for library authors:
```javascript
https.globalAgent.keepAlive = true;


// for google cli config
default compute region and zone manually. If you would like [gcloud init] to be
able to do this for you the next time you run it, make sure the
Compute Engine API is enabled for your project on the
https://console.developers.google.com/apis page.

Created a default .boto configuration file at [C:\Users\Dell\.boto]. See this file and
[https://cloud.google.com/storage/docs/gsutil/commands/config] for more
information about configuring Google Cloud Storage.
The Google Cloud CLI is configured and ready to use!

* Commands that require authentication will use ajieyegeorge@gmail.com by default
* Commands will reference project `project-94e9628f-1e11-4518-969` by default
Run `gcloud help config` to learn how to change individual settings

This gcloud configuration is called [default]. You can create additional configurations if you work with multiple accounts and/or projects.
Run `gcloud topic configurations` to learn more.

Some things to try next:

* Run `gcloud --help` to see the Cloud Platform services you can interact with. And run `gcloud help COMMAND` to get help on any gcloud command.
* Run `gcloud topic --help` to learn about advanced features of the CLI like arg files and output formatting
* Run `gcloud cheat-sheet` to see a roster of go-to `gcloud` commands.
```