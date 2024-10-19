## Moving self-hosting beyond servers

Recently, self-hosting has been getting more popular. It promises independence of centralized cloud providers, and is giving control back to users. So far, there have been many issues with self-hosting that made many existing solutions impractical to use in practice, or at least significantly diminished the benefits.
Self-hosting should be as simple as using cloud providers, but in a sovereign manner. That is why we are building Nirvati. In this post, I want to explain some of the conceptual drawbacks in currently available solutions, such as CasaOS, umbrelOS or startOS; and try to explain how we are building a better platform.
Nirvati’s benefits are not just at the software level, but extend to the underlying concepts and ideas. This is why we can’t easily improve an existing software, but decided to build one from scratch.

## Who owns your server?

Right now, many popular software projects that facilitate self-hosting are not really open source. While startOS is a notable exception, other solutions, such as umbrelOS or CasaOS claim to be “open”, but delay code releases, or don’t really have an open source license that allows any modifications.
This considerably takes away control of “your” server. If you depend on a company to sustain the development of a software, that company could make arbitrary decisions (removing apps via an update, charging a fee for updates, take away download servers, ...) which could significantly impact what you can do with “your” server.
Nirvati fixes this by using a Copyleft license. That basically means that you as a user can do anything you’d like with the code. There is just one exception: If you share (or sell) software based on our code with your modifications, you need to grant the same rights to your users we granted you. This ensures that even if a company decides to build a hosting solution or an alternative software on top, their version stays completely open, and we can merge back improvements.
As part of the commercial backing, many systems hide support for 3rd party apps, or don’t support them at all, which makes you depend on another service with no easy way to opt out. In contrast, Nirvati allows you to add 3rd party app stores right into the main apps list, not a separate, hidden menu.

## Central points of failure

Current self-hosting software just moves the central point of failure to your home. Instead of depending on the reliable infrastructure of a large company, who have frequent backups and redundancy, your data now suddenly just resides on one disk on one server. While that server is completely under your control, it can easily fail or potentially be stolen.
Backups and redundancy are an afterthought in many systems. Nirvati is instead designed to be completely distributed. This means that data can be replicated across multiple disks and servers. Load can also be distributed across multiple servers, so you can add another server to get more resources if you decide to run more apps. You could even use your PC or laptop for a server.
We’ll be offering both a software for MacOS and Windows, and a portable USB stick in partnership with another project for this purpose soon, so you can take Nirvati literally anywhere. In addition, if one server fails, another one can just take over. You could also dynamically get a cloud server that you only pay for if your own server fails.
This is a fundamental difference between Nirvati and other software: You mainly interact with the apps and data. They are no longer bound to one physical server, but can be distributed however you want.
Nirvati is also designed to support regular backups of your data to another storage of your choice – including encrypted backups to cloud providers you may not trust.

## Security
Most conventional systems assume you are only accessing them locally. They lack encryption for any network communication, and often also trust any apps you install. This means that if you ever get tricked into installing a malicious app, it can fully take over your server, and you probably don’t even know it has the permission to do that.
This means that a malicious attacker on your network could intercept communication with your node. In addition, there is often no isolation between apps, and apps have very broad permissions in general.
Nirvati fixes this by only allowing access to apps via an encrypted HTTPS connection. In addition, the networking between apps is isolated – one app can’t manipulate the other. And apps are also isolated from your local network and only have the permissions you grant them – ensuring you always know what each app does.

## Access

Most conventional systems are designed to be used only in your own home. This takes away many convenience features. You can’t just access your data from anywhere, unless you set up a VPN to your home network yourself.
Nirvati fixes this by integrating the free Tailscale system. Tailscale allows you to access your node from anywhere by just installing an app on your phone. All connections over Tailscale are encrypted between the devices. Neither Tailscale nor the Nirvati team can see them.

## Failing updates
Most other systems are not designed to allow reverting app updates. If you update an app, you are stuck on the new version. In case that version is broken or incompatible with your data, you can’t fix it.
Nirvati is instead designed to take snapshots of an app before an update, and allow easy rollbacks afterwards.

## Multi-user systems
Nirvati is designed to be usable by multiple people on the same server. Unlike traditional systems, Nirvati offers an account system with fine-grained permissions.
This allows multiple users to run their own, isolated apps on the same server. And because of Nirvati’s security features, you don’t have to worry about one user installing a malicious app and stealing others data.

## Where we are now

Nirvati is designed to address these problems. It has a very flexible architecture that will allow us to implement good, reliable solutions to all of these problems.
However, in its current state, not all of these features are exposed to the users. While everything we want is easy to implement, because the whole system is designed for a modern environment, we have not yet built an easy-to-use way for all of these features.
Most notably, version 0.1.0 lacks multi-server support, backup integration and app snapshots. Nirvati is still in preview, and we hope to address all the goals I outlined in this blog post by version 0.2.0. A lot more is also planned for the future.
We are slower to achieve our goals than other projects, because right now, I am the only developer working on this project and I’m not able to do it full-time. To achieve our goals faster, we need your help. If you want to contribute, we need designers, developers, translators, and beta testers. If you are interested in helping in that regard, please contact me at [aaron@nirvati.org](mailto:aaron@nirvati.org), https://t.me/AaronDewes, or on Signal (AaronDewes.14).

We also need financial contributors to sustain the project https://opencollective.com/nirvati.
This helps us cover hosting of code & binaries, testing hardware, and in the future paying team members.
In addition, we need to operate a partial mirror of Docker Hub because it is very unreliable for many of our users, which is also quite expensive to host.

And if you want to just try Nirvati today, click [here](/install/generic).

## What's next

Over the coming days, we plan to release images for Raspberry Pis, and publish many Bitcoin-related apps to our app store.

You can view our full roadmap [here](/roadmap).
