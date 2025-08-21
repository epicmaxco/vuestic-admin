For this application the testing strategy is mostly going with screenshot.

There are two reasons for that:

- It's important for us to stick closely to design (almost pixel perfect).
- API is transactional and hard to reset and change. So it's not possible to test full application even on staging, and we have to rely on mocks.

### How to run tests

Let's say our reference branch is `main`, we're working on `develop` and before the merge to main we want to make sure there are no regressions.

First we would switch to `main` branch, then:

- in one process run `pnpm build && pnpm preview`
- in another process `pnpm e2e -u`

That would make screenshots of `main` build and place them locally within repo.

After that - switch to `develop` branch, then:

- in one process run `pnpm build && pnpm preview`
- in another process `pnpm e2e`

This would give you a diff between current screenshots and

You can check screenshots within the report, or, if you need - they're available as files:

- [screenshot](../__screenshot__)
- [diffs](../test-results)

### How to write tests

We mostly focus our tests on cases. Case generally would include:

- Id - to match with [orders list](https://docs.google.com/spreadsheets/d/1F4K3LURRRKVy-B_-gMiJG8f4lXx53u9bM9x3horvJrw/edit?gid=0#gid=0))
- Description
- Url to navigate
- Urls to replace

So, most of the tests follow the pattern:

- Land on page while replacing all urls with mocks.
- Wait for page to fully load
- Make a screenshot

### Benefits of current system

- Gives very high confidence on visual consistency and data handling.

### Shortcomings of current approach

- Right now there are too many screenshot (300ish), this number should be reduced in the future.
- We cannot test flows, we only test states. It is so because of API limitations (we can't reset database for each test).
- Wouldn't catch breaking api changes.

## Possible next steps

### Improving test cases

Right now test are all over the place. In future we want to create more refined test cases.

Here are some examples of what is doable:

- For invoices - rather than having the same set of invoices for every order pretty much - we should tailor it to match order structure.
- For orders - we might want to have universal stub, and only change what's unique for current case.

I think this is the most valuable thing we can do for e2e and we didn't do because it poses a requirement on good understanding on data structures and their variability, which we lack.

### Introducing CI

Not sure if it's worth considering. There was a plan not to touch application after it's done, so if e2e testing should only be done once a month - CI - is definitely not worth bothering.
