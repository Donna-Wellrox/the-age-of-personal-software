---
title: Why I Built My Own AI-Native Personal Finance Tool
description: KolShek started as a way to replace spreadsheet drift with a finance system that an AI agent could actually use.
---

## Who built it and what it is

I built KolShek, a personal finance tool that lets my AI agent work directly with my financial data.

It uses Israeli bank scrapers to pull transactions from my bank accounts and credit cards into a local SQLite database. From there, I can query the data through a CLI, view it in a dashboard, and run things like translation and categorization on top of it. I also exposed it to my AI agent through a custom skill, which means I can ask questions about my finances in plain language, get feedback, and check in every couple of days to see how things are going. It has already helped me spot overspending in certain categories and notice subscriptions I didn’t really need.

## Why I needed it

Before KolShek, I tracked things manually in spreadsheets. It never really worked. I would skip months, forget to enter transactions, miss important details, and lose any clear view of the full picture. I never managed to build a consistent spreadsheet habit, and I’m just not the kind of person who enjoys maintaining financial systems by hand.

Over time, I felt lost in my own finances: I had no real goals, no reliable visibility, and money was being spent without me really understanding where it was going.

## Why existing tools weren’t enough

There were already tools I could have used, including paid products like RiseUp and prebuilt spreadsheet templates. But none of them really fit how I think about money. The paid tools felt like someone else’s model of financial life. The templates had the same weakness as my own setup: they still relied on manual upkeep.

What I needed was not another template, but something automated.

## How I built it with AI

I started with the idea and the main pieces I knew the system needed. From there, I used Claude Code to help plan the project. I chose Bun as the stack, since it felt like the obvious fit for a CLI tool with a dashboard, SQLite, and OS keychain support, and then I mostly switched into build mode and vibe-coded the rest.

AI did most of the implementation work. My role was mainly to think through the architecture, judge whether the plans made sense, and test what it produced. The workflow was simple: have the AI write it, test it, find bugs, send the bugs back, and repeat. Before releases, I also used AI agents for targeted QA and security checks.

## Challenges I had to overcome

The tool is still unfinished. The dashboard needs work. Some of the finance functions and agent skills are still rough. I also don’t come from a finance background, so it isn’t always obvious what the right features or workflows should be.

A lot of the learning has happened through use: the more I use the system, the more clearly I understand what it needs to become.

## Closing

But it already does something spreadsheets and off-the-shelf tools never really did for me: it gives me a financial system I actually want to use.
