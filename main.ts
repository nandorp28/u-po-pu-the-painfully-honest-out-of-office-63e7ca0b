import { mkdirSync, writeFileSync } from "node:fs";

// The Painfully Honest Out-of-Office — one sentence, 141 characters.
// Formula (playbook §36): precise number (214) + second actor reacts
// (manager: "same, honestly") + action with consequence arriving inside
// the line (inbox unionised -> manager forwarded the message) + the sting
// is the final clause.
const LINE =
  "I'm away until Monday, and my 214 unread emails have unionised — my manager just forwarded your message to me with the note 'same, honestly.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
