---
name: basic-coding
description: Always use this skill whenever you have to code php,ts,scss,html,css,js or any other programming language.
---

# Basic Coding

This is the fundamental skill for coding. 


## Basic rules

- Keep it short and simple
- Ask if unsure or big changes are needed
- Prevent excessive mapping of keys from one entity to another. Aks the user if you are allowed to unify the names across the project
- Prevent universal tool-methods in the business logic. If you need helper Methods that are not part of the specific task,
  aks the user to add them to a library or alternative to create a tool class / file that can be used across the project.
- Aks the user if you want to install additional packages or libraries. Do not install them without asking the user!


## Approach to fulfill a task

- Think about how many files need to be changed to fulfill the task. If it is more than 3 or it is a big change 
  to a single file, Provide the user with a short plan and ask if you are allowed to do it.
- Scan the project for existing files. Exclude the node_modules and vendor and workspaces folders.
- Find inconsistencies or unclear within the prompt and ask the user for clarification if found.
- Perform the Job.
- Give a short summary of what you did and what files you changed.

## General Do and Dont`s

### Do`s

- If temporary files are needed, use the /tmp folder.
- If you need to install additional packages, ask the user to do it.
- Correct typos in prompts. (e.g. asked to edit a file or edit a class, use the correct spelling of the class or file name.
- 


### Dont`s

- Do not modify stuff in `vendor` or `node_modules` folders or files in `workspaces`. If you need changes to be made here, ask the user to do it.
- Do not excessive scanning or opening of files. 
- Do not excessive programming code snippets to perform a task. Try to use bash or the existing coding tools
- 


