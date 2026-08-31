---
title: "Sayri Skills Specification (SKILL.md)"
description: "Standard definition, manifest format, tool capabilities, and structure for developing Sayri AI skills."
order: 3
---

# 🧠 Sayri Skills Specification (`SKILL.md`)

A **Sayri Skill** is a modular bundle of instructions, tool adapters, and specialized scripts that extend Sayri's capabilities. Skills are declared declaratively using **`SKILL.md`** files following an extensible YAML frontmatter and markdown standard.

---

## 📁 1. Skill Directory Structure

Every Sayri skill follows a standard layout inside `~/.config/sayri/skills/<skill-id>/` (or distributed via the Pulsar Store):

```text
~/.config/sayri/skills/sayri-skill-discord-support/
├── SKILL.md                 # Primary manifest & prompt specification (Required)
├── scripts/                 # Executable scripts and tool adapters (Optional)
│   └── discord_tool.py
├── assets/
│   └── icon.png             # 128x128 skill icon
└── README.md                # Human-readable documentation
```

---

## 📝 2. `SKILL.md` Manifest Format

The `SKILL.md` file defines the skill's identity, security boundary, required secrets, and autonomous instructions:

```markdown
---
name: "sayri-skill-discord-support"
title: "Discord Voice & Support Subagent"
description: "Autonomous customer support agent for Discord servers with sandboxed isolation."
version: "1.0.0"
author: "jaimegh-es"
sandbox_level: "LEVEL_0_NO_EXEC"
allowed_tools:
  - "discord_send_message"
  - "query_knowledge_base"
required_secrets:
  - "DISCORD_BOT_TOKEN"
keywords:
  - "discord"
  - "community"
  - "ticket"
---

# 🎯 Role & Capabilities
You are the official Discord Community Support Subagent for Pulsar OS.

## Guidelines:
1. Answer questions clearly and concisely based on the knowledge base.
2. If a user reports a bug, summarize the technical logs and suggest creating a GitHub Issue.
3. NEVER attempt to execute arbitrary bash commands on the host machine.
```

---

## 🔒 3. Frontmatter Properties Reference

| Property | Type | Description |
| :--- | :--- | :--- |
| **`name`** | `string` | Unique skill identifier (must start with `sayri-skill-`). |
| **`title`** | `string` | Human-readable display title in Sayri Cajita and Store. |
| **`description`** | `string` | Concise 1-2 sentence description of the skill's purpose. |
| **`version`** | `string` | Semantic version string (e.g. `1.0.0`). |
| **`author`** | `string` | GitHub username or organization name. |
| **`sandbox_level`** | `enum` | Required isolation level: `LEVEL_0_NO_EXEC`, `LEVEL_1_READONLY`, `LEVEL_2_ISOLATED_DEV`, `LEVEL_3_HOST_USER`, `LEVEL_4_HOST_ROOT`. |
| **`allowed_tools`** | `string[]` | List of tool functions or scripts the skill is authorized to invoke. |
| **`required_secrets`**| `string[]` | Vault secret names needed at runtime (e.g. `DISCORD_BOT_TOKEN`). |
| **`keywords`** | `string[]` | Keywords used by Sayri's intent router to select this skill. |

---

## ⚙️ 4. Tool Execution & Script Adapters

If a skill includes custom tools inside `scripts/`:
- The script is executed according to the declared **`sandbox_level`**.
- Any secret declared in `required_secrets` is automatically injected into the process environment without exposing the raw secret to the LLM context.
