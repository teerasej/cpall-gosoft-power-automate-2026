# CPAll GoSoft — Power Automate Day 1

[https://teerasej.github.io/cpall-gosoft-power-automate-2026/](https://teerasej.github.io/cpall-gosoft-power-automate-2026/)

Thai-first learner exercises for a beginner Power Automate workshop using Standard connectors.

Learner-facing Markdown is maintained in [`docs/`](./docs/). Each published page also has an **แก้ไขหน้านี้บน GitHub** link so small corrections can be proposed directly from the site.

## Edit and preview locally

```bash
npm ci
npm run docs:dev
```

Build the production site before publishing:

```bash
npm run docs:build
npm run docs:preview
```

The site is deployed from `main` by [the GitHub Pages workflow](./.github/workflows/deploy.yml).

## Content map

- [Learner home](./docs/index.md)
- [Exercises](./docs/exercises/)
- [Sample requests](./docs/resources/sample-requests.md)
- [Automation Canvas](./docs/resources/automation-canvas.md)
- [Excel tracker](./docs/public/downloads/task-request-tracker.xlsx)
- [Learner slide deck](./docs/public/downloads/CPAll-Power-Automate-Day-1.pptx)

## Instructor files

These files remain in the repository but are intentionally excluded from the learner-site navigation:

- [Instructor readiness checklist](./instructor-readiness-checklist.md)
- [Reference topic coverage](./reference-topic-coverage.md)
- [Presentation slide outline](./presentation-slide-outline.md)
