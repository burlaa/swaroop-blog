---
title: "Understanding Webhooks"
description: "A calm walkthrough of webhook flows, delivery guarantees, and the small design choices that make integrations reliable."
pubDate: 2026-05-27
---

A webhook is basically a way for one app to notify another app automatically when something happens.

For example, when someone pushes code to GitHub, GitHub can notify a build system immediately. The build system does not need to keep asking GitHub if something changed. It simply receives an HTTP request at the moment the event occurs.

## The Shape

A webhook flow usually has three parts:

- An event source that knows something happened.
- A destination URL owned by the receiving system.
- A payload that describes the event.

The sender makes an HTTP request to the receiver. The receiver validates the request, stores enough information to process it safely, and returns a quick response.

## What Makes Them Reliable

Good webhook systems assume the network will occasionally fail. They retry deliveries, sign payloads, include event identifiers, and make handlers idempotent so the same event can be processed more than once without corrupting state.

The most important habit is to separate receipt from processing. Accept the webhook quickly, put the event into durable storage or a queue, and let background workers do the slow work.

## A Simple Mental Model

Polling asks, "Did anything happen yet?"

Webhooks say, "Something happened. Here are the details."
