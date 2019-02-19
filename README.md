## mod-5-project: a planner app

A bullet journal-style planner to track daily habits, rollover unfinished tasks, and save items for later with automatic reminders.

Built with MERN stack, redux, styled-components.

### How To Use:
* Log in or create an account.
* Start by adding your to-dos and thoughts for today.
* You can prioritize by starring, or move to "later".
* Add a couple daily tasks to build your habits!
* Features: track habits, roll over unfinished tasks, auto-suggest an item from "later".

![](planner-gif.gif)

Notes for the developer:
* tasks are created at minus 6 hours from `new Date()` to match CST.
* backend cron job times are in CST.
* update times in `actions.js`
