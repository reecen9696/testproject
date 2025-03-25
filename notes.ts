import { App } from "aws-cdk-lib";
import { NoteStack } from "../lib/notesStack";

const app = new App();
new NoteStack(app, "NoteStack");
