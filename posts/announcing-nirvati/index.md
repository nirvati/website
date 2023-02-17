---
title: "Announcing Nirvati"
date: 2022-04-01
authorName: Aaron Dewes
authorLink: https://twitter.com/AaronDewes
---

Today, I am excited to showcase a new project: Nirvati.

Nirvati tries to fix the architecture of Citadel.

Without any legacy design concepts from Umbrel, I've nearly completely rebuilt Citadel, and a core part of that has now resulted in this project: Nirvati.

## What is Nirvati?

Nirvati is the core of what makes Citadel 0.3.0 possible. It is a modular base system projects like Citadel can build on. It currently handles

- User management
- App management
- Container management
- Providing a REST API for these features

With Nirvati, we have a much more lightweight core project. And in the future, some features like Kubernetes support just need to be added in Nirvati, and Citadel will automatically get them.

### Why did you start Nirvati?

Nirvati allows decoupling various core parts of Citadel. A majority of features are a lot simpler to implement with this new architecture, including

- Updates
- The new UI
- HTTPS
- Tor & I2P 
- More settings for apps
- Switching between mainnet/testnet/regtest

In addition, Nirvati can be extended to target more people than Bitcoiners. For example, schools can use Nirvati to manage their IT infrastructure.

## Built with Nirvati

There are two projects I built with Nirvati.

Hopefully, the community will find Nirvati useful and also start projects based on Nirvati or contribute to one of these.

### Introducing the new Citadel update

> Citadel logo

Together with the launch of Nirvati, Citadel also got a new release and is now based on Nirvati. You can have a look at [the Citadel blog](https://runcitadel.space/blog) to learn more about this update.

### Waldbaur Servr

> Waldbaur Logo

Waldbaur Servr is a new server system optimized for schools. I convinced my school's IT team to use it, and I hope it'll be helpful to other schools (especially in Germany) too.

Waldbaur Servr is a great example of Nirvati's capabilities: Like Citadel, it builds on Nirvati, but instead of focusing on Bitcoin apps, it instead contains:

- A built-in LDAP server
- Printer management
- Easy integration with [MNS+](https://mnsplus.de)
- A DNS server
- Interoperability with Windows Server
- NextCloud
- Many more tools for schools

## Funding

Most work on Nirvati is still funded by the community.

You can support us on [GitHub sponsors](https://example.com) or [OpenCollective](https://opencollective.com).

However, there also have been some corporate sponsors for Nirvati.

I especially want to thank [DTV Electronics](https://dtvelectronics.com/) for supporting the development of Nirvati.

## Future plans

Improving Nirvati will be my core focus for the next few weeks.

Citadel is completely removing any compatibility with Umbrel, but will support migrating from Umbrel for apps that are already available on Citadel.

Long term, I also want to built _Nirvati Enterprise_, another project built on Nirvati, this time focused on companies and larger nodes. It will use Kubernetes and be a lot more reliable and have some advanced options. Citadel or Waldbaur Servr will also be installable on Nirvati Enterprise.

Despite what "Enterprise" software often means, Nirvati Enterprise will still be 100% FOSS, but if any company starts using it, we would strongly recommend donating to the development.
