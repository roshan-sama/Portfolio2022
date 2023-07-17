Blog in progress.
=================

Writing code for everything you need from scratch takes time. Complex web applications have to deal with authentication and authorization, complex form inputs etc.

Javascript libraries and frameworks make getting started easy, but what are the security implications of downloading and utilizing hundreds of megabytes of code we didn't author?

```
$ du -sh /workspaces/Portfolio2022/node_modules
348M    /workspaces/Portfolio2022/node_modules
```

# Security Implications

The most obvious concern is security. Malicious 3rd party libraries can hijack your website, using an end user's client to mine crypto currency or capture the information they enter.

## Mitigating security issues

The concept of a "Software Bill of Materials", used by cyber security specialists helps mitigate this risk. You can use a tool like [Dependency Track](https://dependencytrack.org/) 

npm audit can help catch most known concerns. Github's Dependabot notifies me of dependency issues too.

Use lockfiles like package-lock.json to lock in dependency versions, avoiding surprise breaks from downstream upgrades.

# Reliability Concerns

External libraries might not work as advertised. Actual code behavior might deviate subtly from that advertised in documentation, either because of a untested edge case, or because the authors omitted documenting specific caveats believing that information may not be needed.

We may also need to extend the functionality provided by a library. How easy this is depends on how the library is configured.

The [react-pdf](https://github.com/diegomura/react-pdf) library used in the app has an open issue to let users specify the default zoom level of the reader. I did not consider this a major issue until I wanted to display my resume at a smaller zoom level by default. 

My first solution was to find the Zoom selection element and update the zoom level. This was not possible because the pdf renderer lived within an iframe, and I couldn't access the select input from the DOM my javascript was running in.

## Mitigating reliability concerns

Reliability shouldn't be an issue for popular libraries with a lot of activity and maintenance, but is still worth consideration. Checking in the package-lock.json file should help mitigate 

if a library doesn't offer the functionality you need, as long as its open source, you have the opportunity to open an issue and contribute the feature yourself.