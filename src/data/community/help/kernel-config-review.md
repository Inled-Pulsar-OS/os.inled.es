---
type: "help"
title: "Kernel configuration review"
status: "Open"
priority: "high"
date: 2026-07-08
---

The kernel config is generated with a sane default, but it has never been
reviewed end to end.

**What we need:**
- Drop unneeded drivers and modules to slim the image.
- Verify security-relevant options (module signing, lockdown).
- Suggest flags that improve hardware support without bloat.

The config lives in the `kernel` repository of the organization.
